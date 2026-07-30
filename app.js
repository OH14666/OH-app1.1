// ===================== 工具函数 =====================
function fmtDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
function fmtDateCN(d) {
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const days = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
  return `${y}年${m}月${day}日 ${days[d.getDay()]}`;
}
function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
function money(v) {
  const n = parseFloat(v) || 0;
  return '¥' + n.toFixed(2);
}
function pickN(arr, n) {
  const copy = arr.slice();
  const out = [];
  for (let i = 0; i < n && copy.length; i++) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===================== 数据 =====================
const recreationData = [
  {
    title: "源头厂探店：一副耳环的诞生",
    tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "饰品", cls: "" }],
    idea: "你家里就是饰品源头厂，生产全过程是别人没有的信任背书。",
    adaptedTitle: "一副耳环从我家作坊到你手上",
    xhsTitle: "1688源头厂探访｜耳环制作全过程",
    plan: "机位：手持跟拍工作台；场景：家里作坊；节奏：中速，突出手工细节特写。"
  },
  {
    title: "戴夸张耳环的妆容搭配",
    tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "化妆", cls: "" }],
    idea: "你是饰品源头，耳环+妆容联动正好种草自家货。",
    adaptedTitle: "夸张耳环配什么妆不翻车",
    xhsTitle: "耳环×妆容搭配｜源头厂女孩的私藏",
    plan: "机位：镜子前；场景：家里；节奏：对比式，每款耳环+妆容8秒。"
  },
  {
    title: "车模收藏玩家的开箱日常",
    tags: [{ text: "B站", cls: "bilibili" }, { text: "中爆", cls: "hot" }, { text: "开箱", cls: "" }],
    idea: "小众收藏垂类粉丝粘性高，可结合故事+展示打造系列内容。",
    adaptedTitle: "花一个月工资买的车模，到底值不值？",
    xhsTitle: "男友的车模墙｜男生快乐原来这么简单",
    plan: "机位：桌面俯拍+侧面；场景：收藏柜前；节奏：开场悬念，中段细节，结尾金句。"
  },
  {
    title: "职场妈妈的清晨routine",
    tags: [{ text: "小红书", cls: "xhs" }, { text: "大爆", cls: "hot" }, { text: "vlog", cls: "" }],
    idea: "真实、有共鸣的职场妈妈日常容易引发评论区互动。",
    adaptedTitle: "6点起床的职场妈妈，早上到底在忙什么",
    xhsTitle: "30+职场妈妈晨间routine｜自律但不焦虑",
    plan: "机位：固定机位+手持；场景：卧室、厨房、卫生间；节奏：轻快节奏，配治愈音乐。"
  },
  {
    title: "普通人如何穿出高级感",
    tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "穿搭", cls: "" }],
    idea: "穿搭干货+前后对比，易获得收藏和转发。",
    adaptedTitle: "3个技巧，让便宜衣服看起来很贵",
    xhsTitle: "低成本高级感穿搭｜这3点很重要",
    plan: "机位：全身镜前；场景：卧室；节奏：前后对比，重点突出配色和版型。"
  }
];

// 雅思词汇池
const ieltsPool = [
  { en: "accommodate", ph: "/əˈkɒmədeɪt/", cn: "容纳；顺应" },
  { en: "ambiguous", ph: "/æmˈbɪɡjuəs/", cn: "模糊的；含糊的" },
  { en: "analyze", ph: "/ˈænəlaɪz/", cn: "分析" },
  { en: "approach", ph: "/əˈprəʊtʃ/", cn: "方法；接近" },
  { en: "assemble", ph: "/əˈsembl/", cn: "组装；集合" },
  { en: "beneficial", ph: "/ˌbenɪˈfɪʃl/", cn: "有益的" },
  { en: "category", ph: "/ˈkætəɡəri/", cn: "类别" },
  { en: "circumstance", ph: "/ˈsɜːkəmstəns/", cn: "情况；环境" },
  { en: "comprehensive", ph: "/ˌkɒmprɪˈhensɪv/", cn: "全面的" },
  { en: "concept", ph: "/ˈkɒnsept/", cn: "概念" },
  { en: "consequence", ph: "/ˈkɒnsɪkwəns/", cn: "后果" },
  { en: "consistent", ph: "/kənˈsɪstənt/", cn: "一致的；持续的" },
  { en: "contrast", ph: "/ˈkɒntrɑːst/", cn: "对比；对照" },
  { en: "contribute", ph: "/kənˈtrɪbjuːt/", cn: "贡献；促成" },
  { en: "criteria", ph: "/kraɪˈtɪəriə/", cn: "标准（复数）" },
  { en: "demonstrate", ph: "/ˈdemənstreɪt/", cn: "证明；展示" },
  { en: "derive", ph: "/dɪˈraɪv/", cn: "源于；获得" },
  { en: "deteriorate", ph: "/dɪˈtɪəriəreɪt/", cn: "恶化" },
  { en: "emphasis", ph: "/ˈemfəsɪs/", cn: "强调" },
  { en: "establish", ph: "/ɪˈstæblɪʃ/", cn: "建立" },
  { en: "evident", ph: "/ˈevɪdənt/", cn: "明显的" },
  { en: "fluctuate", ph: "/ˈflʌktʃueɪt/", cn: "波动" },
  { en: "fundamental", ph: "/ˌfʌndəˈmentl/", cn: "基本的；根本的" },
  { en: "generate", ph: "/ˈdʒenəreɪt/", cn: "产生；生成" },
  { en: "hypothesis", ph: "/haɪˈpɒθəsɪs/", cn: "假设" },
  { en: "illustrate", ph: "/ˈɪləstreɪt/", cn: "说明；图解" },
  { en: "impact", ph: "/ˈɪmpækt/", cn: "影响" },
  { en: "incentive", ph: "/ɪnˈsentɪv/", cn: "激励；动机" },
  { en: "indicate", ph: "/ˈɪndɪkeɪt/", cn: "表明；指出" },
  { en: "inevitable", ph: "/ɪnˈevɪtəbl/", cn: "不可避免的" },
  { en: "interpret", ph: "/ɪnˈtɜːprɪt/", cn: "解释；口译" },
  { en: "investigate", ph: "/ɪnˈvestɪɡeɪt/", cn: "调查" },
  { en: "justify", ph: "/ˈdʒʌstɪfaɪ/", cn: "证明…正当" },
  { en: "maintenance", ph: "/ˈmeɪntənəns/", cn: "维护；保养" },
  { en: "obstacle", ph: "/ˈɒbstəkl/", cn: "障碍" },
  { en: "perspective", ph: "/pəˈspektɪv/", cn: "视角；观点" },
  { en: "phenomenon", ph: "/fəˈnɒmɪnən/", cn: "现象" },
  { en: "potential", ph: "/pəˈtenʃl/", cn: "潜在的；潜力" },
  { en: "predominant", ph: "/prɪˈdɒmɪnənt/", cn: "占主导的" },
  { en: "prevail", ph: "/prɪˈveɪl/", cn: "盛行；获胜" },
  { en: "proportion", ph: "/prəˈpɔːʃn/", cn: "比例" },
  { en: "relevant", ph: "/ˈreləvənt/", cn: "相关的" },
  { en: "reluctant", ph: "/rɪˈlʌktənt/", cn: "不情愿的" },
  { en: "significant", ph: "/sɪɡˈnɪfɪkənt/", cn: "重要的；显著的" },
  { en: "subsequent", ph: "/ˈsʌbsɪkwənt/", cn: "随后的" },
  { en: "sustain", ph: "/səˈsteɪn/", cn: "维持；承受" },
  { en: "tendency", ph: "/ˈtendənsi/", cn: "倾向；趋势" },
  { en: "trigger", ph: "/ˈtrɪɡə(r)/", cn: "触发；引发" },
  { en: "valid", ph: "/ˈvælɪd/", cn: "有效的" },
  { en: "variant", ph: "/ˈveəriənt/", cn: "变体；变种" }
];

// 口语句型（含生活例句）
const speakingPool = [
  { title: "表达喜好", pattern: "I'm really into + n./v.-ing", cn: "我真的很喜欢……", example: "I'm really into hiking on weekends.", exCn: "我周末真的很喜欢去爬山。" },
  { title: "提出建议", pattern: "Why don't we + 动词原形?", cn: "我们为什么不……呢？", example: "Why don't we grab some coffee after work?", exCn: "下班后我们不去喝杯咖啡吗？" },
  { title: "表示同意", pattern: "That sounds great to me.", cn: "我觉得听起来很棒。", example: "A: Let's meet at 6. B: That sounds great to me.", exCn: "A：6点见吧。B：听起来很棒。" },
  { title: "描述计划", pattern: "I'm planning to + 动词原形", cn: "我计划……", example: "I'm planning to visit my parents this weekend.", exCn: "我计划这周末去看望父母。" },
  { title: "委婉拒绝", pattern: "I'd love to, but…", cn: "我很想，但是……", example: "I'd love to, but I have to work overtime tonight.", exCn: "我很想去，但今晚得加班。" },
  { title: "询问意见", pattern: "What do you think of…?", cn: "你觉得……怎么样？", example: "What do you think of this new restaurant?", exCn: "你觉得这家新餐厅怎么样？" },
  { title: "表达不确定", pattern: "I'm not sure if…", cn: "我不确定是否……", example: "I'm not sure if I can finish it by Friday.", exCn: "我不确定周五前能不能完成。" },
  { title: "强调重要性", pattern: "It's important to + 动词原形", cn: "……很重要", example: "It's important to take breaks during work.", exCn: "工作时适当休息很重要。" },
  { title: "表达感谢", pattern: "I really appreciate…", cn: "我真的很感激……", example: "I really appreciate your help with the report.", exCn: "真的很感谢你帮我做报告。" },
  { title: "描述变化", pattern: "…has changed a lot since…", cn: "自从……以来变化很大", example: "The city has changed a lot since I was a kid.", exCn: "这座城市从我小时候起变化很大。" }
];

const tedPool = [
  { title: "The power of vulnerability", content: "Brené Brown 探讨脆弱的力量，学会接纳不完美的自己。", en: "The power of vulnerability. Brené Brown talks about learning to accept our imperfect selves." },
  { title: "How great leaders inspire action", content: "Simon Sinek 的黄金圈法则，为什么人们会购买你做的事。", en: "How great leaders inspire action. Simon Sinek's golden circle: why people buy what you do." },
  { title: "Inside the mind of a master procrastinator", content: "Tim Urban 用幽默方式拆解拖延症患者的内心世界。", en: "Inside the mind of a master procrastinator. Tim Urban breaks down the inner world of a procrastinator." },
  { title: "Your body language may shape who you are", content: "Amy Cundy 讲述高能量姿势如何影响自信与表现。", en: "Your body language may shape who you are. Amy Cuddy on how power posing affects confidence." },
  { title: "The puzzle of motivation", content: "Dan Pink 指出外在奖励反而会削弱创造性工作的动力。", en: "The puzzle of motivation. Dan Pink shows that rewards can undermine creative work." },
  { title: "Grit: The power of passion and perseverance", content: "Angela Duckworth 论毅力比天赋更决定成功。", en: "Grit. Angela Duckworth argues that passion and perseverance matter more than talent." }
];

const translatePool = [
  { title: "中译英", content: "无论结果如何，我都为自己的努力感到骄傲。", en: "Whatever the result, I'm proud of my effort." },
  { title: "英译中", content: "The best way to predict the future is to create it.", en: "The best way to predict the future is to create it." },
  { title: "中译英", content: "真正的成长发生在舒适区之外。", en: "True growth happens outside your comfort zone." },
  { title: "英译中", content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", en: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
  { title: "中译英", content: "我习惯在早晨效率最高的时候处理最难的任务。", en: "I'm used to tackling the hardest tasks in the morning when I'm most productive." },
  { title: "英译中", content: "Small daily improvements are the key to staggering long-term results.", en: "Small daily improvements are the key to staggering long-term results." }
];

// 影子跟读：3组日常对话（每组3-10来回）
const shadowingPool = [
  {
    title: "🍽️ 在餐厅点餐",
    lines: [
      { en: "Good evening! A table for two?", cn: "晚上好！两位用餐吗？" },
      { en: "Yes, and could we sit by the window?", cn: "是的，可以坐窗边吗？" },
      { en: "Sure. Here are your menus. Can I get you something to drink first?", cn: "没问题，这是菜单。先来点喝的吗？" },
      { en: "I'll have a glass of sparkling water, please.", cn: "我要一杯气泡水。" },
      { en: "Same for me, thanks. And what do you recommend for the main course?", cn: "我也一样，谢谢。主菜有什么推荐？" },
      { en: "Our grilled salmon is very popular tonight.", cn: "今晚的烤三文鱼很受欢迎。" },
      { en: "Sounds great, I'll take that.", cn: "听起来不错，就它了。" },
      { en: "Excellent choice. I'll be right back with your drinks.", cn: "很好的选择，我马上把饮料送来。" }
    ]
  },
  {
    title: "☕ 和朋友约周末",
    lines: [
      { en: "Hey! Are you free this Saturday?", cn: "嘿！这周六有空吗？" },
      { en: "Let me check. Yeah, I don't have any plans yet. What's up?", cn: "我看看。有空，还没安排。怎么了？" },
      { en: "There's a new exhibition downtown. Want to check it out together?", cn: "市中心有个新展览，要一起去看吗？" },
      { en: "Sounds fun! What time should we meet?", cn: "听起来不错！几点见？" },
      { en: "How about 2 pm at the entrance?", cn: "下午两点在门口怎么样？" },
      { en: "Perfect. Should we grab dinner after?", cn: "完美，之后一起吃晚饭吗？" },
      { en: "Great idea, I know a nice place nearby.", cn: "好主意，我知道附近有家不错的店。" },
      { en: "Awesome, see you Saturday then!", cn: "太棒了，那周六见！" }
    ]
  },
  {
    title: "✂️ 在理发店",
    lines: [
      { en: "Hi! Welcome in. What can I do for you today?", cn: "你好！欢迎。今天想怎么剪？" },
      { en: "I'd like a trim and maybe a new style.", cn: "我想修剪一下，换个新发型。" },
      { en: "Sure. How short would you like it?", cn: "好的，想剪多短？" },
      { en: "Just a little off the sides, and keep the top longer.", cn: "两边稍微修一下，上面留长一点。" },
      { en: "Got it. Any particular look you're going for?", cn: "明白了，有想要的特定造型吗？" },
      { en: "Something easy to style in the morning, please.", cn: "早上好打理的那种就行。" },
      { en: "No problem, I'll take care of it. Just relax.", cn: "没问题，交给我吧，放松就好。" },
      { en: "Thanks! I trust your judgment.", cn: "谢谢，我相信你的判断。" }
    ]
  }
];

// 独白句子池（用于生成独白，带中文翻译）
const monologueSentences = [
  { en: "I usually wake up around seven and start my day with a cup of coffee.", cn: "我通常七点左右醒来，用一杯咖啡开启新的一天。" },
  { en: "Mornings are my favorite time because everything feels fresh and quiet.", cn: "早晨是我最喜欢的时光，因为一切都显得清新而宁静。" },
  { en: "I like to plan my tasks for the day before checking my phone.", cn: "我喜欢在刷手机之前先规划好当天的任务。" },
  { en: "Work keeps me busy, but I try to take short breaks to stay focused.", cn: "工作让我很忙碌，但我会尽量抽空小休保持专注。" },
  { en: "I believe small habits, done consistently, lead to big changes over time.", cn: "我相信坚持小习惯，时间一长就会带来大改变。" },
  { en: "After lunch, I often take a short walk to clear my mind.", cn: "午饭后我常去散散步，让大脑放松一下。" },
  { en: "Reading a few pages of a book every night helps me wind down.", cn: "每晚读几页书能帮我放松心情。" },
  { en: "I'm learning to be kinder to myself when things don't go as planned.", cn: "我在学着当事情不如预期时对自己温柔一点。" },
  { en: "Weekends are for recharging, seeing friends, and doing what I love.", cn: "周末是用来充电、见朋友和做喜欢的事的。" },
  { en: "I try to limit screen time in the evening so I can sleep better.", cn: "我尽量减少晚上的屏幕时间，这样能睡得更好。" },
  { en: "Cooking at home saves money and lets me eat more healthily.", cn: "在家做饭既省钱又能吃得更健康。" },
  { en: "I keep a small notebook for ideas that pop up during the day.", cn: "我随身带个小本子，记录白天冒出来的灵感。" },
  { en: "Exercise, even just ten minutes, makes a real difference in my mood.", cn: "即使只运动十分钟，也能明显改善我的心情。" },
  { en: "I've realized that progress matters more than perfection.", cn: "我意识到进步比完美更重要。" },
  { en: "Every evening I write down three things I'm grateful for.", cn: "每晚我都会写下三件感恩的事。" },
  { en: "I want to spend less time worrying and more time doing.", cn: "我想少花点时间焦虑，多花点时间行动。" },
  { en: "Nature walks always remind me to slow down and breathe.", cn: "走进大自然总能提醒我慢下来、深呼吸。" },
  { en: "I'm grateful for the people who support me, even from afar.", cn: "我感激那些即使远在他乡也支持我的人。" },
  { en: "Learning something new every day keeps my mind curious and young.", cn: "每天学点新东西，让我的大脑保持好奇和年轻。" },
  { en: "I try to listen more than I speak, especially when I'm upset.", cn: "我努力多听少说，尤其是在情绪不好的时候。" }
];

const knowledgePool = [
  { title: "复利效应", content: "每天进步 1%，一年后你会比现在的自己强大 37 倍。坚持小习惯，时间会给你答案。" },
  { title: "费曼学习法", content: "用简单语言把知识讲给别人听，讲不清楚的地方就是你的知识盲区。" },
  { title: "帕金森定律", content: "工作会自动膨胀，直到占满你给它的全部时间。设置更紧凑的截止时间，效率反而提升。" },
  { title: "20/80 法则", content: "80% 的结果来自 20% 的努力。把精力聚焦在最有产出的事情上。" },
  { title: "1% 法则", content: "不追求大改变，只要求每天比昨天好 1%。累积 1 年就是 37 倍的差距。" },
  { title: "刻意练习", content: "只做重复不够，要离开舒适区、获得即时反馈、针对性补足薄弱点。" },
  { title: "艾宾浩斯遗忘曲线", content: "学完后 20 分钟、1 小时、1 天、3 天、7 天重复复习，记忆留存率会大幅提升。" },
  { title: "心流理论", content: "当任务难度与技能水平完美匹配时，你会进入忘记时间、高度专注的状态。" },
  { title: "锚定效应", content: "人们对事物的判断会被第一印象深深影响。先开口的人掌握了定价权。" },
  { title: "峰终定律", content: "用户只记得体验中最强烈的部分和最后结束的感觉。开头要抓人，结尾要升华。" }
];

const topicPool = [
  "30天自律挑战：每天早起1小时", "用100元改造书桌一角", "普通人如何养成高级感气质",
  "我的一周备餐流程分享", "下班后的3小时可以做多少事", "一年读50本书，我的阅读方法"
];

const moodMap = {
  happy:   { emoji: "😊", text: "开心", tip: "今天是个好日子，把这份能量记录下来吧！" },
  calm:    { emoji: "😌", text: "平静", tip: "宁静也是创作的沃土。" },
  excited: { emoji: "🤩", text: "兴奋", tip: "趁热情高涨，赶紧产出一条内容！" },
  tired:   { emoji: "😴", text: "疲惫", tip: "适当休息，是为了更好的出发。" },
  sad:     { emoji: "😢", text: "低落", tip: "允许自己慢下来，明天会更好。" },
  angry:   { emoji: "😠", text: "生气", tip: "把情绪写成文字，也是一种释放。" }
};

const accountingCats = [
  { key: "food",  emoji: "🍜", label: "吃" }, { key: "drink", emoji: "🥤", label: "喝" },
  { key: "fun",   emoji: "🎮", label: "玩" }, { key: "cloth", emoji: "👕", label: "衣" },
  { key: "house", emoji: "🏠", label: "住" }, { key: "trip",  emoji: "🚌", label: "行" }
];

// 预设动漫头像（4女4男，不同风格）
const avatarPresets = [
  { src: 'icons/girl_sweet.jpg',      label: '甜妹', gender: '女' },
  { src: 'icons/girl_mature.jpg',     label: '御姐', gender: '女' },
  { src: 'icons/girl_energetic.jpg',  label: '元气', gender: '女' },
  { src: 'icons/girl_artistic.jpg',   label: '文艺', gender: '女' },
  { src: 'icons/boy_sunny.jpg',       label: '阳光', gender: '男' },
  { src: 'icons/boy_cool.jpg',         label: '冷酷', gender: '男' },
  { src: 'icons/boy_scholar.jpg',     label: '书生', gender: '男' },
  { src: 'icons/boy_athletic.jpg',    label: '运动', gender: '男' }
];

// ===================== DOM 元素 =====================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');
const headerDate = document.getElementById('headerDate');
const userName = document.getElementById('userName');
const userSubtitle = document.getElementById('userSubtitle');
const userAvatar = document.getElementById('userAvatar');
const avatarEdit = document.getElementById('avatarEdit');
const avatarInput = document.getElementById('avatarInput');

// ========== TTS（朗读）工具 ==========
let engSpeed = 0.9;
let lastUtterance = null;
function speak(text, btnEl, rate) {
  if (!('speechSynthesis' in window)) { showToast('当前浏览器不支持语音朗读'); return; }
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = (rate === undefined ? engSpeed : rate);
    u.pitch = 1;
    document.querySelectorAll('.speak-btn.playing').forEach(b => b.classList.remove('playing'));
    if (btnEl) btnEl.classList.add('playing');
    lastUtterance = u;
    u.onend = () => { if (btnEl) btnEl.classList.remove('playing'); };
    u.onerror = () => { if (btnEl) btnEl.classList.remove('playing'); };
    window.speechSynthesis.speak(u);
  } catch (e) { console.error(e); }
}

// ===================== 初始化 =====================
document.addEventListener('DOMContentLoaded', () => {
  initDate();
  initNavigation();
  initSidebar();
  initRecreation();
  initKnowledge();
  initEnglish();
  initAccounting();
  initDailyRecord();
  initTodo();
  initTopicGenerator();
  initProfile();
  initServiceWorker();
  updateHomeStats();
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.stat-card.clickable');
    if (card && card.dataset.jump) {
      e.preventDefault();
      switchPage(card.dataset.jump);
      history.pushState(null, '', `#${card.dataset.jump}`);
    }
  });
});

function initDate() {
  const now = new Date();
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  headerDate.textContent = `${now.getMonth() + 1}/${now.getDate()} ${days[now.getDay()]}`;
}

// ===================== 首页统计 =====================
function updateHomeStats() {
  // 待办：今日数量
  const todayKey = 'cc_todo_' + fmtDate(new Date());
  const todos = JSON.parse(localStorage.getItem(todayKey) || '[]');
  const stTodo = document.getElementById('statTodo');
  if (stTodo) stTodo.textContent = todos.length;

  // 灵感
  const insps = JSON.parse(localStorage.getItem('cc_inspirations') || '[]');
  const stInsp = document.getElementById('statInsp');
  if (stInsp) stInsp.textContent = insps.length;

  // 单词：今日学习
  const eng = JSON.parse(localStorage.getItem('cc_eng_' + fmtDate(new Date())) || 'null');
  const stWord = document.getElementById('statWord');
  if (stWord) stWord.textContent = (eng && eng.words) ? eng.words.length : 0;
}

// ===================== 路由/导航 =====================
function initNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      switchPage(page);
      closeSidebar();
      history.pushState(null, '', `#${page}`);
    });
  });
  window.addEventListener('popstate', () => {
    switchPage(location.hash.slice(1) || 'home');
  });
  switchPage(location.hash.slice(1) || 'home');
}

function switchPage(pageId) {
  if (!document.getElementById(`page-${pageId}`)) return;
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${pageId}`).classList.add('active');
  navItems.forEach(item => item.classList.toggle('active', item.dataset.page === pageId));
  const activeNav = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  pageTitle.textContent = activeNav ? activeNav.textContent.trim() : '首页概览';
  if (pageId === 'home') updateHomeStats();
  document.getElementById('mainContent').scrollTop = 0;
}

function initSidebar() {
  menuToggle.addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);
}
function openSidebar() { sidebar.classList.add('open'); overlay.classList.add('show'); }
function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('show'); }

// ===================== 个人资料 =====================
function initProfile() {
  const savedName = localStorage.getItem('cc_name');
  const savedSubtitle = localStorage.getItem('cc_subtitle');
  const savedAvatar = localStorage.getItem('cc_avatar');
  if (savedName) userName.textContent = savedName;
  if (savedSubtitle) userSubtitle.textContent = savedSubtitle;
  if (savedAvatar) userAvatar.src = savedAvatar;
  userName.addEventListener('blur', () => {
    localStorage.setItem('cc_name', userName.textContent.trim());
    updateWelcomeName();
  });
  userSubtitle.addEventListener('blur', () => localStorage.setItem('cc_subtitle', userSubtitle.textContent.trim()));

  // 头像编辑：打开选择弹窗（不再直接触发文件选择）
  avatarEdit.addEventListener('click', openAvatarPicker);
  userAvatar.addEventListener('click', openAvatarPicker);

  // 渲染预设头像网格
  const grid = document.getElementById('avatarGrid');
  if (grid) {
    grid.innerHTML = avatarPresets.map((a, i) => `
      <div class="avatar-pick" data-index="${i}" title="${a.gender}·${a.label}">
        <img src="${a.src}" alt="${a.label}" />
        <span class="avatar-pick-label">${a.gender}·${a.label}</span>
      </div>`).join('');
    grid.querySelectorAll('.avatar-pick').forEach(item => {
      item.addEventListener('click', () => {
        const a = avatarPresets[parseInt(item.dataset.index)];
        userAvatar.src = a.src;
        localStorage.setItem('cc_avatar', a.src);
        closeAvatarPicker();
        showToast('头像已更换为：' + a.gender + '·' + a.label);
      });
    });
  }

  // 弹窗交互
  const picker = document.getElementById('avatarPicker');
  const pickerClose = document.getElementById('avatarPickerClose');
  const pickerUpload = document.getElementById('avatarPickerUpload');
  if (pickerClose) pickerClose.addEventListener('click', closeAvatarPicker);
  if (picker) picker.addEventListener('click', (e) => { if (e.target === picker) closeAvatarPicker(); });
  if (pickerUpload) pickerUpload.addEventListener('click', () => avatarInput.click());

  // 自定义上传
  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      userAvatar.src = event.target.result;
      localStorage.setItem('cc_avatar', event.target.result);
      closeAvatarPicker();
      showToast('头像已上传');
    };
    reader.readAsDataURL(file);
  });
  updateWelcomeName();
}
function openAvatarPicker() {
  const p = document.getElementById('avatarPicker');
  if (p) p.classList.add('show');
}
function closeAvatarPicker() {
  const p = document.getElementById('avatarPicker');
  if (p) p.classList.remove('show');
}
function updateWelcomeName() {
  const wn = document.querySelector('.welcome-name');
  if (wn) wn.textContent = userName.textContent.trim() || '创作者';
}

// ===================== 爆款二创 + 灵感存储 =====================
function initRecreation() {
  const list = document.getElementById('recreationList');
  function render() {
    const insps = JSON.parse(localStorage.getItem('cc_inspirations') || '[]');
    const inspCard = insps.length
      ? `<div class="section-card" style="background:linear-gradient(135deg,#FFF0F3,#fff);margin-bottom:16px">
           <h3 style="margin-bottom:8px">💡 我的灵感库（${insps.length}）</h3>
           <div style="display:flex;flex-direction:column;gap:6px">
             ${insps.map((t, i) => `<div style="font-size:13px;color:var(--text);padding:6px 10px;background:#fff;border-radius:8px">${i + 1}. ${t}</div>`).join('')}
           </div>
         </div>` : '';
    list.innerHTML = inspCard + recreationData.map((item, idx) => `
      <article class="recreation-card" data-index="${idx}">
        <h3>${item.title}</h3>
        <div class="platform-tags">${item.tags.map(t => `<span class="tag ${t.cls}">${t.text}</span>`).join('')}</div>
        <p class="card-field"><span class="card-field-label">为什么适合你二创：</span>${item.idea}</p>
        <p class="card-field"><span class="card-field-label">改编后标题-抖音：</span>${item.adaptedTitle}</p>
        <p class="card-field"><span class="card-field-label">改编后标题-小红书：</span>${item.xhsTitle}</p>
        <p class="card-field"><span class="card-field-label">拍摄方案：</span>${item.plan}</p>
        <div class="card-actions">
          <button class="btn btn-primary btn-add-task">加入任务</button>
          <button class="btn btn-secondary btn-save-idea" data-title="${item.title}">存为灵感</button>
          <button class="btn btn-ghost btn-view-script">查看脚本</button>
        </div>
        <button class="btn-refresh btn-change-one" data-index="${idx}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 5.5A10 10 0 1 1 11.26 2.67"/></svg>换一条
        </button>
      </article>`).join('');
    bindActions();
  }
  function bindActions() {
    document.querySelectorAll('.btn-add-task').forEach(btn => btn.addEventListener('click', () => {
      const title = btn.closest('.recreation-card').querySelector('h3').textContent;
      addTodoToToday(title);
      showToast('已加入今日待办');
    }));
    document.querySelectorAll('.btn-save-idea').forEach(btn => btn.addEventListener('click', () => {
      const insps = JSON.parse(localStorage.getItem('cc_inspirations') || '[]');
      insps.push(btn.dataset.title);
      localStorage.setItem('cc_inspirations', JSON.stringify(insps));
      updateHomeStats();
      render();
      showToast('已保存到灵感库');
    }));
    document.querySelectorAll('.btn-view-script').forEach(btn => btn.addEventListener('click', () => showToast('脚本详情开发中')));
    document.querySelectorAll('.btn-change-one').forEach(btn => btn.addEventListener('click', () => {
      const card = btn.closest('.recreation-card');
      card.style.opacity = '0.5';
      setTimeout(() => {
        recreationData[card.dataset.index] = { ...recreationData[Math.floor(Math.random() * recreationData.length)] };
        render();
      }, 200);
    }));
  }
  render();
}

function addTodoToToday(text) {
  const k = 'cc_todo_' + fmtDate(new Date());
  const arr = JSON.parse(localStorage.getItem(k) || getInheritedTodos(new Date()));
  arr.push({ text, done: false, reflection: '' });
  localStorage.setItem(k, JSON.stringify(arr));
  updateHomeStats();
}

// ===================== 知识喂养站 =====================
function initKnowledge() {
  const wrap = document.getElementById('knowledgeCardWrap');
  const btn = document.getElementById('knowledgeRefresh');
  let idx = 0;
  function render() {
    const k = knowledgePool[idx];
    wrap.innerHTML = `<div class="knowledge-card"><h3 style="margin-bottom:10px">${k.title}</h3><p style="font-size:14px;line-height:1.75;color:var(--text)">${k.content}</p></div>`;
  }
  render();
  btn.addEventListener('click', () => {
    idx = (idx + 1 + Math.floor(Math.random() * (knowledgePool.length - 1))) % knowledgePool.length;
    wrap.style.opacity = '0.3';
    setTimeout(() => { render(); wrap.style.opacity = '1'; }, 150);
  });
}

// ===================== 英语每日喂养（日历 + 雅思翻卡 + 影子跟读 + 独白） =====================
function initEnglish() {
  const state = { currentDate: new Date(), calendarMonth: new Date() };
  const titleEl = document.getElementById('engDateTitle');
  const modeHint = document.getElementById('engModeHint');
  const prevBtn = document.getElementById('engPrevDay');
  const nextBtn = document.getElementById('engNextDay');
  const todayBtn = document.getElementById('engToday');
  const calEl = document.getElementById('engCalendar');
  const historyList = document.getElementById('engHistoryList');
  const speedInput = document.getElementById('engSpeed');
  const speedVal = document.getElementById('engSpeedVal');

  speedInput.addEventListener('input', () => {
    engSpeed = parseFloat(speedInput.value);
    speedVal.textContent = engSpeed.toFixed(1) + 'x';
  });

  // 生成器
  function genWords() { return pickN(ieltsPool, 16); }
  function genSpeaking() { return pickN(speakingPool, 4); }
  function genTed() { return pickN(tedPool, 3); }
  function genTranslate() { return pickN(translatePool, 3); }
  function genShadowing() { return shadowingPool.slice(); }
  function genMonologue(targetWords) {
    const sentences = shuffle(monologueSentences);
    let enText = '', cnText = '', count = 0;
    for (const s of sentences) {
      if (count >= targetWords) break;
      enText += (enText ? ' ' : '') + s.en;
      cnText += (cnText ? ' ' : '') + s.cn;
      count += s.en.split(/\s+/).length;
    }
    return { en: enText, cn: cnText };
  }

  function ensureContent(date) {
    const k = 'cc_eng_' + fmtDate(date);
    let data = JSON.parse(localStorage.getItem(k) || 'null');
    if (!data) {
      data = { words: genWords(), speaking: genSpeaking(), ted: genTed(), translate: genTranslate(), shadowing: genShadowing(), monologue: '' };
      localStorage.setItem(k, JSON.stringify(data));
    }
    return data;
  }

  function renderWords(words) {
    document.getElementById('wordGrid').innerHTML = words.map(w => `
      <div class="wcard" data-revealed="false" data-en="${encodeURIComponent(w.en)}">
        <div class="wcard-en">${w.en}</div>
        <div class="wcard-ph">${w.ph}</div>
        <div class="wcard-cn-wrap">
          <div class="wcard-cn">${w.cn}</div>
          <div class="wcard-cn-cover">点击查看释义</div>
        </div>
        <button class="speak-btn" data-spe="${encodeURIComponent(w.en)}">🔊</button>
      </div>`).join('');
    document.querySelectorAll('#wordGrid .wcard').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.speak-btn')) return;
        card.dataset.revealed = card.dataset.revealed === 'true' ? 'false' : 'true';
      });
    });
  }

  function renderSpeaking(items) {
    document.getElementById('speakingList').innerHTML = items.map(s => `
      <div class="speaking-card">
        <div class="card-head"><h4>${s.title}</h4><button class="speak-btn speak-btn-head" data-spe="${encodeURIComponent(s.example)}">🔊</button></div>
        <p style="font-size:14px;color:var(--primary-dark);font-weight:600;margin-bottom:6px">${s.pattern}</p>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">${s.cn}</p>
        <div style="background:var(--bg);border-radius:10px;padding:10px 12px">
          <p style="font-size:14px;color:var(--text);font-weight:500">${s.example}</p>
          <p style="font-size:12px;color:var(--text-secondary);margin-top:4px">💬 ${s.exCn}</p>
        </div>
      </div>`).join('');
  }

  function renderTed(items) {
    document.getElementById('tedList').innerHTML = items.map(s => `
      <div class="speaking-card">
        <div class="card-head"><h4>${s.title}</h4><button class="speak-btn speak-btn-head" data-spe="${encodeURIComponent(s.en)}">🔊</button></div>
        <p style="font-size:14px;color:var(--text-secondary);line-height:1.7">${s.content}</p>
      </div>`).join('');
  }

  function renderTranslate(items) {
    document.getElementById('translateList').innerHTML = items.map(s => `
      <div class="speaking-card">
        <div class="card-head"><h4>${s.title}</h4><button class="speak-btn speak-btn-head" data-spe="${encodeURIComponent(s.en)}">🔊</button></div>
        <p style="font-size:14px;color:var(--text);line-height:1.7">${s.content}</p>
        <p style="margin-top:8px;padding:8px 12px;background:var(--bg);border-radius:10px;font-size:13px;color:var(--primary-dark);font-style:italic">🔖 参考英文：${s.en}</p>
      </div>`).join('');
  }

  function renderShadowing(dialogues) {
    document.getElementById('shadowingList').innerHTML = dialogues.map((d, i) => `
      <div class="shadow-card">
        <div class="shadow-index">${i + 1}</div>
        <div class="shadow-title">${d.title}</div>
        <div class="shadow-lines">
          ${d.lines.map((line, li) => `
            <div class="shadow-line"><button class="speak-btn" data-spe="${encodeURIComponent(line.en)}">🔊</button>${line.en}</div>
            <div class="shadow-line cn">${line.cn}</div>`).join('')}
        </div>
        <button class="shadow-playall" data-playall="${i}">▶️ 整段播放</button>
      </div>`).join('');
  }

  function renderMonologue(monoData) {
    const mono = document.getElementById('monoText');
    // 兼容旧数据（纯字符串）
    const enText = (typeof monoData === 'string') ? monoData : (monoData && monoData.en);
    const cnText = (monoData && typeof monoData === 'object') ? monoData.cn : '';
    if (!enText) {
      mono.innerHTML = '<span style="color:var(--text-secondary);font-size:13px">点击上方按钮生成独白文本</span>';
      return;
    }
    mono.innerHTML = `
      <div class="mono-en">${enText}<button class="speak-btn mono-speak" data-spe="${encodeURIComponent(enText)}">🔊</button></div>
      ${cnText ? `<div class="mono-cn">📝 中文翻译：${cnText}</div>` : ''}
    `;
  }

  function renderAll() {
    const data = ensureContent(state.currentDate);
    titleEl.textContent = fmtDateCN(state.currentDate);
    const isToday = fmtDate(state.currentDate) === fmtDate(new Date());
    modeHint.textContent = isToday ? '今日学习 · 点击「换一换」更新素材' : '历史复习模式 · 可查看当天学习内容';
    renderWords(data.words);
    renderSpeaking(data.speaking);
    renderTed(data.ted);
    renderTranslate(data.translate);
    renderShadowing(data.shadowing);
    renderMonologue(data.monologue || '');
    renderCalendar();
    renderHistory();
    updateHomeStats();
  }

  prevBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, -1); state.calendarMonth = new Date(state.currentDate); renderAll(); });
  nextBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, 1); state.calendarMonth = new Date(state.currentDate); renderAll(); });
  todayBtn.addEventListener('click', () => { state.currentDate = new Date(); state.calendarMonth = new Date(); renderAll(); });

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.english-section').forEach(s => s.classList.toggle('active', s.dataset.section === target));
    });
  });

  // 各模块换一换
  document.getElementById('wordsRefresh').addEventListener('click', () => { refreshSection('words'); });
  document.getElementById('speakingRefresh').addEventListener('click', () => { refreshSection('speaking'); });
  document.getElementById('tedRefresh').addEventListener('click', () => { refreshSection('ted'); });
  document.getElementById('translateRefresh').addEventListener('click', () => { refreshSection('translate'); });
  document.getElementById('shadowingRefresh').addEventListener('click', () => { refreshSection('shadowing'); });

  function refreshSection(section) {
    const k = 'cc_eng_' + fmtDate(state.currentDate);
    const data = JSON.parse(localStorage.getItem(k) || '{}');
    if (section === 'words') data.words = genWords();
    if (section === 'speaking') data.speaking = genSpeaking();
    if (section === 'ted') data.ted = genTed();
    if (section === 'translate') data.translate = genTranslate();
    if (section === 'shadowing') data.shadowing = genShadowing();
    data.updatedAt = Date.now();
    localStorage.setItem(k, JSON.stringify(data));
    renderAll();
    showToast('已更新素材');
  }

  // 独白生成
  document.getElementById('monoGenerate').addEventListener('click', () => {
    const n = Math.max(20, Math.min(300, parseInt(document.getElementById('monoWordCount').value) || 60));
    const monoData = genMonologue(n);
    saveMonologue(monoData);
    renderMonologue(monoData);
    showToast('已生成独白（约' + monoData.en.split(/\s+/).length + '词）');
  });
  document.getElementById('monoRandom').addEventListener('click', () => {
    const n = Math.floor(Math.random() * 51) + 50;
    document.getElementById('monoWordCount').value = n;
    const monoData = genMonologue(n);
    saveMonologue(monoData);
    renderMonologue(monoData);
    showToast('已随机生成（约' + n + '词）');
  });
  function saveMonologue(text) {
    const k = 'cc_eng_' + fmtDate(state.currentDate);
    const data = JSON.parse(localStorage.getItem(k) || '{}');
    data.monologue = text;
    localStorage.setItem(k, JSON.stringify(data));
  }

  // 朗读按钮 & 整段播放（事件委托）
  document.getElementById('page-english').addEventListener('click', (e) => {
    const btn = e.target.closest('.speak-btn');
    if (btn) {
      const text = decodeURIComponent(btn.dataset.spe || '');
      if (text) speak(text, btn);
      return;
    }
    const playAllBtn = e.target.closest('[data-playall]');
    if (playAllBtn) {
      const i = parseInt(playAllBtn.dataset.playall);
      playAllShadowing(i);
    }
  });

  function playAllShadowing(i) {
    const data = ensureContent(state.currentDate);
    const lines = data.shadowing[i].lines;
    let idx = 0;
    function next() {
      if (idx >= lines.length) return;
      const card = document.querySelectorAll('.shadow-card')[i];
      if (!card) return;
      const btns = card.querySelectorAll('.speak-btn');
      const targetBtn = btns[idx];
      const lineEn = lines[idx].en;
      speak(lineEn, targetBtn);
      const checkEnd = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          clearInterval(checkEnd);
          idx++;
          setTimeout(next, 600);
        }
      }, 300);
    }
    next();
  }

  function renderCalendar() {
    renderMiniCalendar(calEl, state.calendarMonth, state.currentDate, 'eng', (d) => {
      state.currentDate = d; state.calendarMonth = d; renderAll();
    });
  }
  function renderHistory() {
    const list = [];
    for (let i = 0; i < 30; i++) {
      const d = addDays(new Date(), -i);
      const data = JSON.parse(localStorage.getItem('cc_eng_' + fmtDate(d)) || 'null');
      if (data) list.push({ d, data });
    }
    if (!list.length) {
      historyList.innerHTML = `<li style="text-align:center;color:var(--text-secondary);background:transparent;cursor:default">暂无学习记录</li>`;
      return;
    }
    historyList.innerHTML = list.map(item => `
      <li data-date="${fmtDate(item.d)}">
        <div class="history-date">${fmtDateCN(item.d)}</div>
        <div class="history-text">单词${item.data.words ? item.data.words.length : 0} · 口语${item.data.speaking ? item.data.speaking.length : 0} · 跟读${item.data.shadowing ? item.data.shadowing.length : 0}组</div>
      </li>`).join('');
    historyList.querySelectorAll('li[data-date]').forEach(li => {
      li.addEventListener('click', () => {
        const [y, m, d] = li.dataset.date.split('-').map(Number);
        state.currentDate = new Date(y, m - 1, d);
        state.calendarMonth = new Date(y, m - 1, d);
        renderAll();
      });
    });
  }

  renderAll();
}

// ===================== 每日记录 =====================
function initDailyRecord() {
  const state = { currentDate: new Date(), calendarMonth: new Date() };
  const titleEl = document.getElementById('recordDateTitle');
  const prevBtn = document.getElementById('recordPrevDay');
  const nextBtn = document.getElementById('recordNextDay');
  const todayBtn = document.getElementById('recordToday');
  const moodGrid = document.getElementById('moodGrid');
  const moodResult = document.getElementById('moodResult');
  const noteEl = document.getElementById('recordNote');
  const saveBtn = document.getElementById('saveRecord');
  const saveHint = document.getElementById('recordSaveHint');
  const calEl = document.getElementById('recordCalendar');
  const historyList = document.getElementById('recordHistoryList');

  function key(d) { return 'cc_record_' + fmtDate(d); }
  function renderDate() {
    titleEl.textContent = fmtDateCN(state.currentDate);
    const rec = JSON.parse(localStorage.getItem(key(state.currentDate)) || '{}');
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.toggle('selected', b.dataset.mood === rec.mood));
    moodResult.textContent = rec.mood ? moodMap[rec.mood].tip : '点击表情记录心情';
    noteEl.value = rec.note || '';
    saveHint.classList.remove('show');
  }
  function save() {
    const rec = JSON.parse(localStorage.getItem(key(state.currentDate)) || '{}');
    rec.mood = rec.mood || null;
    rec.note = noteEl.value || '';
    rec.updatedAt = Date.now();
    localStorage.setItem(key(state.currentDate), JSON.stringify(rec));
    saveHint.textContent = '✓ 已保存';
    saveHint.classList.add('show');
    setTimeout(() => saveHint.classList.remove('show'), 1500);
    renderCalendar(); renderHistory();
  }
  prevBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, -1); renderAll(); });
  nextBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, 1); renderAll(); });
  todayBtn.addEventListener('click', () => { state.currentDate = new Date(); state.calendarMonth = new Date(); renderAll(); });
  moodGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.mood-btn');
    if (!btn) return;
    const m = btn.dataset.mood;
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.toggle('selected', b.dataset.mood === m));
    moodResult.textContent = moodMap[m].tip;
    const rec = JSON.parse(localStorage.getItem(key(state.currentDate)) || '{}');
    rec.mood = m;
    localStorage.setItem(key(state.currentDate), JSON.stringify(rec));
    renderCalendar(); renderHistory();
  });
  saveBtn.addEventListener('click', save);
  noteEl.addEventListener('input', () => { clearTimeout(noteEl._t); noteEl._t = setTimeout(save, 500); });
  function renderCalendar() {
    renderMiniCalendar(calEl, state.calendarMonth, state.currentDate, 'record', (d) => { state.currentDate = d; state.calendarMonth = d; renderAll(); });
  }
  function renderHistory() {
    const list = [];
    for (let i = 0; i < 30; i++) {
      const d = addDays(new Date(), -i);
      const rec = JSON.parse(localStorage.getItem(key(d)) || '{}');
      if (rec.mood || rec.note) list.push({ d, rec });
    }
    if (!list.length) { historyList.innerHTML = `<li style="text-align:center;color:var(--text-secondary);background:transparent;cursor:default">暂无历史记录，先记一笔今天吧～</li>`; return; }
    historyList.innerHTML = list.map(item => {
      const me = item.rec.mood ? moodMap[item.rec.mood].emoji : '';
      const mt = item.rec.mood ? moodMap[item.rec.mood].text : '';
      return `<li data-date="${fmtDate(item.d)}"><div class="history-date">${fmtDateCN(item.d)}</div><div><span class="history-mood">${me}</span><strong style="color:var(--text)">${mt || '未记录心情'}</strong></div><div class="history-text">${item.rec.note ? item.rec.note : '（暂无文字记录）'}</div></li>`;
    }).join('');
    historyList.querySelectorAll('li[data-date]').forEach(li => {
      li.addEventListener('click', () => {
        const [y, m, d] = li.dataset.date.split('-').map(Number);
        state.currentDate = new Date(y, m - 1, d); state.calendarMonth = new Date(y, m - 1, d); renderAll();
      });
    });
  }
  function renderAll() { renderDate(); renderCalendar(); renderHistory(); }
  renderAll();
}

// 迷你日历渲染器（通用）
function renderMiniCalendar(container, viewMonth, selectedDate, type, onClick) {
  const y = viewMonth.getFullYear();
  const m = viewMonth.getMonth();
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);
  const daysInMonth = last.getDate();
  const firstWeekday = first.getDay();
  const todayKey = fmtDate(new Date());
  const selectedKey = fmtDate(selectedDate);
  let html = `<div class="cal-head"><button class="cal-prev" title="上个月">‹</button><span class="cal-title">${y}年 ${m+1}月</span><button class="cal-next" title="下个月">›</button></div>`;
  html += `<div class="cal-grid">${['日','一','二','三','四','五','六'].map(w => `<div class="cal-week">${w}</div>`).join('')}`;
  for (let i = 0; i < firstWeekday; i++) html += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const cur = new Date(y, m, d);
    const k = fmtDate(cur);
    const raw = localStorage.getItem(`cc_${type}_${k}`);
    const rec = raw ? JSON.parse(raw) : null;
    let has = false;
    if (rec) {
      if (type === 'record') has = !!rec.mood || !!rec.note;
      else if (type === 'account') { has = accountingCats.some(c => rec[c.key]) || rec.otherOut || rec.income; }
      else if (type === 'todo') has = Array.isArray(rec) && rec.length > 0;
      else if (type === 'eng') has = !!rec.words || !!rec.speaking;
    }
    const cls = ['cal-day', k === todayKey ? 'today' : '', has ? 'has-record' : '', k === selectedKey ? 'selected' : ''].join(' ').trim();
    html += `<div class="${cls}" data-day="${d}">${d}</div>`;
  }
  html += `</div>`;
  container.innerHTML = html;
  container.querySelector('.cal-prev').addEventListener('click', () => { viewMonth.setMonth(viewMonth.getMonth() - 1); renderMiniCalendar(container, viewMonth, selectedDate, type, onClick); });
  container.querySelector('.cal-next').addEventListener('click', () => { viewMonth.setMonth(viewMonth.getMonth() + 1); renderMiniCalendar(container, viewMonth, selectedDate, type, onClick); });
  container.querySelectorAll('.cal-day[data-day]').forEach(div => {
    div.addEventListener('click', () => onClick(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), parseInt(div.dataset.day))));
  });
}

// ===================== 极简记账 =====================
function initAccounting() {
  const state = { currentDate: new Date(), calendarMonth: new Date() };
  const titleEl = document.getElementById('accDateTitle');
  const prevBtn = document.getElementById('accPrevDay');
  const nextBtn = document.getElementById('accNextDay');
  const todayBtn = document.getElementById('accToday');
  const catsWrap = document.getElementById('accountCategoryList');
  const outEl = document.getElementById('accTotalOut');
  const inEl = document.getElementById('accTotalIn');
  const balEl = document.getElementById('accTotalBalance');
  const saveBtn = document.getElementById('saveAccount');
  const saveHint = document.getElementById('accSaveHint');
  const calEl = document.getElementById('accountCalendar');
  const historyList = document.getElementById('accountHistoryList');

  function key(d) { return 'cc_account_' + fmtDate(d); }
  catsWrap.innerHTML = accountingCats.map(c => `
    <div class="cat-item"><span class="cat-emoji">${c.emoji}</span><span class="cat-label">${c.label}</span><input type="number" class="cat-money" data-key="${c.key}" min="0" step="0.01" placeholder="0.00" /></div>`).join('');

  function recalc() {
    let outSum = 0, inSum = 0;
    document.querySelectorAll('.cat-money').forEach(inp => outSum += parseFloat(inp.value) || 0);
    const otherOut = parseFloat(document.querySelector('.out-input[data-key="otherOut"]').value) || 0;
    const income = parseFloat(document.querySelector('.in-input[data-key="income"]').value) || 0;
    outSum += otherOut; inSum = income;
    outEl.textContent = money(outSum); inEl.textContent = money(inSum); balEl.textContent = money(inSum - outSum);
  }
  function loadData() {
    titleEl.textContent = fmtDateCN(state.currentDate);
    const rec = JSON.parse(localStorage.getItem(key(state.currentDate)) || '{}');
    document.querySelectorAll('.cat-money').forEach(inp => inp.value = rec[inp.dataset.key] ? rec[inp.dataset.key] : '');
    document.querySelectorAll('.money-input').forEach(inp => inp.value = rec[inp.dataset.key] ? rec[inp.dataset.key] : '');
    recalc(); saveHint.classList.remove('show');
  }
  function save(auto) {
    const rec = {};
    document.querySelectorAll('.cat-money').forEach(inp => { const v = parseFloat(inp.value); if (v) rec[inp.dataset.key] = v; });
    document.querySelectorAll('.money-input').forEach(inp => { const v = parseFloat(inp.value); if (v) rec[inp.dataset.key] = v; });
    rec.updatedAt = Date.now();
    localStorage.setItem(key(state.currentDate), JSON.stringify(rec));
    if (!auto) { saveHint.textContent = '✓ 已保存'; saveHint.classList.add('show'); setTimeout(() => saveHint.classList.remove('show'), 1500); }
    renderCalendar(); renderHistory();
  }
  prevBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, -1); renderAll(); });
  nextBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, 1); renderAll(); });
  todayBtn.addEventListener('click', () => { state.currentDate = new Date(); state.calendarMonth = new Date(); renderAll(); });
  saveBtn.addEventListener('click', () => save(false));
  document.querySelectorAll('.cat-money, .money-input').forEach(inp => inp.addEventListener('input', () => { recalc(); clearTimeout(inp._t); inp._t = setTimeout(() => save(true), 500); }));
  function renderCalendar() { renderMiniCalendar(calEl, state.calendarMonth, state.currentDate, 'account', (d) => { state.currentDate = d; state.calendarMonth = d; renderAll(); }); }
  function renderHistory() {
    const list = [];
    for (let i = 0; i < 30; i++) {
      const d = addDays(new Date(), -i);
      const rec = JSON.parse(localStorage.getItem(key(d)) || '{}');
      let out = 0, inc = 0;
      accountingCats.forEach(c => { if (rec[c.key]) out += rec[c.key]; });
      if (rec.otherOut) out += rec.otherOut;
      if (rec.income) inc += rec.income;
      if (out || inc) list.push({ d, out, inc, bal: inc - out });
    }
    if (!list.length) { historyList.innerHTML = `<li style="text-align:center;color:var(--text-secondary);background:transparent;cursor:default">暂无记录，开始记一笔吧 💰</li>`; return; }
    historyList.innerHTML = list.map(item => `<li data-date="${fmtDate(item.d)}"><div class="history-date">${fmtDateCN(item.d)}</div><div class="acc-summary-line"><span class="acc-out">支出 ${money(item.out)}</span><span class="acc-in">收入 ${money(item.inc)}</span><span class="acc-bal">结余 ${money(item.bal)}</span></div></li>`).join('');
    historyList.querySelectorAll('li[data-date]').forEach(li => li.addEventListener('click', () => { const [y, m, d] = li.dataset.date.split('-').map(Number); state.currentDate = new Date(y, m - 1, d); state.calendarMonth = new Date(y, m - 1, d); renderAll(); }));
  }
  function renderAll() { loadData(); renderCalendar(); renderHistory(); }
  renderAll();
}

// ===================== 今日待办（按日独立 + 感悟框 + 日历） =====================
function getInheritedTodos(date) {
  for (let i = 1; i <= 400; i++) {
    const prev = addDays(date, -i);
    const prevArr = JSON.parse(localStorage.getItem('cc_todo_' + fmtDate(prev)) || 'null');
    if (prevArr && prevArr.length) {
      return JSON.stringify(prevArr.map(t => ({ text: t.text, done: false, reflection: '' })));
    }
  }
  return '[]';
}
function getTodosForDate(date) {
  const k = 'cc_todo_' + fmtDate(date);
  let arr = JSON.parse(localStorage.getItem(k) || 'null');
  if (!arr) {
    arr = JSON.parse(getInheritedTodos(date));
    localStorage.setItem(k, JSON.stringify(arr));
  }
  return arr;
}

function initTodo() {
  const state = { currentDate: new Date(), calendarMonth: new Date() };
  const titleEl = document.getElementById('todoDateTitle');
  const modeHint = document.getElementById('todoModeHint');
  const prevBtn = document.getElementById('todoPrevDay');
  const nextBtn = document.getElementById('todoNextDay');
  const todayBtn = document.getElementById('todoToday');
  const input = document.getElementById('todoInput');
  const addBtn = document.getElementById('addTodo');
  const list = document.getElementById('todoList');
  const calEl = document.getElementById('todoCalendar');
  const historyList = document.getElementById('todoHistoryList');

  function key(d) { return 'cc_todo_' + fmtDate(d); }

  function save(arr) { localStorage.setItem(key(state.currentDate), JSON.stringify(arr)); updateHomeStats(); renderCalendar(); renderHistory(); }

  function renderList() {
    const todos = getTodosForDate(state.currentDate);
    const isToday = fmtDate(state.currentDate) === fmtDate(new Date());
    if (!todos.length) {
      list.innerHTML = `<li style="text-align:center;color:var(--text-secondary);padding:20px 0;background:transparent">这一天还没有待办，添加一个吧～</li>`;
      return;
    }
    list.innerHTML = todos.map((todo, idx) => `
      <li class="todo-item-block ${todo.done ? 'done' : ''}" data-index="${idx}">
        <div class="todo-item-row">
          <input type="checkbox" ${todo.done ? 'checked' : ''} data-index="${idx}" ${!isToday ? 'disabled' : ''} />
          <span class="todo-item-text">${todo.text}</span>
          ${isToday ? `<button class="todo-delete" data-index="${idx}">×</button>` : ''}
        </div>
        <textarea class="todo-reflection" data-index="${idx}" placeholder="写下这条的总结和感受…" ${!isToday ? 'disabled' : ''}>${todo.reflection || ''}</textarea>
      </li>`).join('');

    list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const todos = getTodosForDate(state.currentDate);
        todos[cb.dataset.index].done = cb.checked;
        save(todos);
        renderList();
      });
    });
    list.querySelectorAll('.todo-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const todos = getTodosForDate(state.currentDate);
        todos.splice(btn.dataset.index, 1);
        save(todos);
        renderList();
      });
    });
    list.querySelectorAll('.todo-reflection').forEach(ta => {
      ta.addEventListener('input', () => {
        const todos = getTodosForDate(state.currentDate);
        todos[ta.dataset.index].reflection = ta.value;
        clearTimeout(ta._t);
        ta._t = setTimeout(() => save(todos), 500);
      });
    });
  }

  function add() {
    const text = input.value.trim();
    if (!text) return;
    const todos = getTodosForDate(state.currentDate);
    todos.push({ text, done: false, reflection: '' });
    save(todos);
    input.value = '';
    renderList();
  }
  addBtn.addEventListener('click', add);
  input.addEventListener('keypress', (e) => { if (e.key === 'Enter') add(); });

  prevBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, -1); state.calendarMonth = new Date(state.currentDate); renderAll(); });
  nextBtn.addEventListener('click', () => { state.currentDate = addDays(state.currentDate, 1); state.calendarMonth = new Date(state.currentDate); renderAll(); });
  todayBtn.addEventListener('click', () => { state.currentDate = new Date(); state.calendarMonth = new Date(); renderAll(); });

  function renderCalendar() { renderMiniCalendar(calEl, state.calendarMonth, state.currentDate, 'todo', (d) => { state.currentDate = d; state.calendarMonth = d; renderAll(); }); }
  function renderHistory() {
    const list = [];
    for (let i = 0; i < 30; i++) {
      const d = addDays(new Date(), -i);
      const todos = JSON.parse(localStorage.getItem(key(d)) || 'null');
      if (todos && todos.length) {
        const done = todos.filter(t => t.done).length;
        list.push({ d, total: todos.length, done });
      }
    }
    if (!list.length) { historyList.innerHTML = `<li style="text-align:center;color:var(--text-secondary);background:transparent;cursor:default">暂无待办记录</li>`; return; }
    historyList.innerHTML = list.map(item => `
      <li data-date="${fmtDate(item.d)}">
        <div class="history-date">${fmtDateCN(item.d)}</div>
        <div class="history-text">完成 ${item.done}/${item.total} 项待办</div>
      </li>`).join('');
    historyList.querySelectorAll('li[data-date]').forEach(li => li.addEventListener('click', () => { const [y, m, d] = li.dataset.date.split('-').map(Number); state.currentDate = new Date(y, m - 1, d); state.calendarMonth = new Date(y, m - 1, d); renderAll(); }));
  }

  function renderAll() {
    titleEl.textContent = fmtDateCN(state.currentDate);
    const isToday = fmtDate(state.currentDate) === fmtDate(new Date());
    modeHint.textContent = isToday ? '今日待办会自动延续到明天，每天独立互不影响' : '历史查看模式 · 当天待办只读';
    // 输入框仅今天可用
    input.disabled = !isToday;
    addBtn.disabled = !isToday;
    renderList(); renderCalendar(); renderHistory();
  }
  renderAll();
}

// ===================== 选题生成器 =====================
function initTopicGenerator() {
  const box = document.getElementById('topicBox');
  const btn = document.getElementById('generateTopic');
  btn.addEventListener('click', () => { box.textContent = topicPool[Math.floor(Math.random() * topicPool.length)]; });
}

// ===================== Toast =====================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'update-toast show';
  toast.style.bottom = '80px';
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(100px)'; toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 1800);
}

// ===================== PWA Service Worker =====================
function initServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('sw.js')
    .then(reg => {
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateToast();
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });
      setInterval(() => { reg.update(); }, 60 * 60 * 1000);
    })
    .catch(err => console.error('SW registration failed', err));
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (refreshing) return; refreshing = true; window.location.reload(); });
}
function showUpdateToast() { const toast = document.getElementById('updateToast'); if (toast) { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000); } }
