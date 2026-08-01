$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:9093/')
$listener.Start()
$baseDir = $PSScriptRoot
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = $context.Request.Url.AbsolutePath
    if ($path -eq '/') { $path = '/index.html' }
    $filePath = Join-Path $baseDir $path.TrimStart('/')
    if (Test-Path $filePath -PathType Leaf) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath)
        $mime = switch ($ext) {
            '.html' { 'text/html; charset=utf-8' }
            '.js' { 'application/javascript; charset=utf-8' }
            '.css' { 'text/css; charset=utf-8' }
            '.json' { 'application/json; charset=utf-8' }
            '.png' { 'image/png' }; '.jpg' { 'image/jpeg' }
            '.gif' { 'image/gif' }; '.svg' { 'image/svg+xml' }
            default { 'application/octet-stream' }
        }
        $context.Response.ContentType = $mime
        $context.Response.ContentLength64 = $content.Length
        $context.Response.OutputStream.Write($content, 0, $content.Length)
    } else { $context.Response.StatusCode = 404 }
    $context.Response.Close()
}