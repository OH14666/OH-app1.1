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
  { title: "源头厂探店：一副耳环的诞生", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "饰品", cls: "" }], idea: "你家里就是饰品源头厂，生产全过程是别人没有的信任背书。", adaptedTitle: "一副耳环从我家作坊到你手上", xhsTitle: "1688源头厂探访｜耳环制作全过程", plan: "机位：手持跟拍工作台；场景：家里作坊；节奏：中速，突出手工细节特写。" },
  { title: "戴夸张耳环的妆容搭配", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "化妆", cls: "" }], idea: "你是饰品源头，耳环+妆容联动正好种草自家货。", adaptedTitle: "夸张耳环配什么妆不翻车", xhsTitle: "耳环×妆容搭配｜源头厂女孩的私藏", plan: "机位：镜子前；场景：家里；节奏：对比式，每款耳环+妆容8秒。" },
  { title: "车模收藏玩家的开箱日常", tags: [{ text: "B站", cls: "bilibili" }, { text: "中爆", cls: "hot" }, { text: "开箱", cls: "" }], idea: "小众收藏垂类粉丝粘性高，可结合故事+展示打造系列内容。", adaptedTitle: "花一个月工资买的车模，到底值不值？", xhsTitle: "男友的车模墙｜男生快乐原来这么简单", plan: "机位：桌面俯拍+侧面；场景：收藏柜前；节奏：开场悬念，中段细节，结尾金句。" },
  { title: "职场妈妈的清晨routine", tags: [{ text: "小红书", cls: "xhs" }, { text: "大爆", cls: "hot" }, { text: "vlog", cls: "" }], idea: "真实、有共鸣的职场妈妈日常容易引发评论区互动。", adaptedTitle: "6点起床的职场妈妈，早上到底在忙什么", xhsTitle: "30+职场妈妈晨间routine｜自律但不焦虑", plan: "机位：固定机位+手持；场景：卧室、厨房、卫生间；节奏：轻快节奏，配治愈音乐。" },
  { title: "普通人如何穿出高级感", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "穿搭", cls: "" }], idea: "穿搭干货+前后对比，易获得收藏和转发。", adaptedTitle: "3个技巧，让便宜衣服看起来很贵", xhsTitle: "低成本高级感穿搭｜这3点很重要", plan: "机位：全身镜前；场景：卧室；节奏：前后对比，重点突出配色和版型。" },
  { title: "出租屋改造日记：花500元焕新卧室", tags: [{ text: "小红书", cls: "xhs" }, { text: "大爆", cls: "hot" }, { text: "家居", cls: "" }], idea: "低成本改造类内容自带流量属性，过程感强易出爆款。", adaptedTitle: "500元改造出租屋卧室，房东看了都惊了", xhsTitle: "出租屋改造｜500元卧室大变身", plan: "机位：固定延时+手持特写；场景：卧室；节奏：改造前→过程→成果三段式。" },
  { title: "一个人吃遍整条小吃街", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "美食", cls: "" }], idea: "探店吃播结合街头烟火气，完播率高。", adaptedTitle: "挑战一个人吃完整条小吃街，结局撑哭了", xhsTitle: "小吃街探店｜一个人能吃多少家", plan: "机位：手持+桌面；场景：街头；节奏：快剪辑，每家店10-15秒。" },
  { title: "100天自律打卡变美全过程", tags: [{ text: "小红书", cls: "xhs" }, { text: "大爆", cls: "hot" }, { text: "自律", cls: "" }], idea: "长期打卡系列内容粉丝粘性极高，容易形成追更习惯。", adaptedTitle: "坚持100天自律，我变成了另一个人", xhsTitle: "100天自律变美打卡｜第1天vs第100天", plan: "机位：固定机位对比；场景：家里；节奏：每周1期，对比+感悟。" },
  { title: "手账排版教程：让笔记变好看", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "手账", cls: "" }], idea: "手账类内容受众精准，教程干货易获收藏。", adaptedTitle: "让你的手账变好看的5个排版技巧", xhsTitle: "手账排版教程｜新手也能画出高级感", plan: "机位：俯拍桌面；场景：书桌；节奏：慢速特写，配轻音乐。" },
  { title: "用100元挑战做一桌年夜饭", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "美食", cls: "" }], idea: "挑战类美食内容自带悬念，完播率和互动率极高。", adaptedTitle: "100元做了一桌年夜饭，全家都说好吃", xhsTitle: "100元挑战年夜饭｜6菜1汤全搞定", plan: "机位：厨房手持+餐桌俯拍；场景：厨房；节奏：采购→做菜→成品三段式。" },
  { title: "公司通勤OOTD一周不重样", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "穿搭", cls: "" }], idea: "通勤穿搭是高频搜索词，系列内容容易涨粉。", adaptedTitle: "打工人通勤穿搭7天不重样", xhsTitle: "一周通勤OOTD｜简约又高级", plan: "机位：全身镜；场景：玄关/卧室；节奏：每天1套，每套15秒。" },
  { title: "自制饮品：复刻网红奶茶", tags: [{ text: "抖音", cls: "douyin" }, { text: "中爆", cls: "hot" }, { text: "美食", cls: "" }], idea: "复刻网红饮品成本低、操作简单，易引发互动。", adaptedTitle: "在家复刻网红奶茶，3块钱成本比店里的好喝", xhsTitle: "自制奶茶｜复刻网红配方太好喝了", plan: "机位：厨房桌面；场景：家里；节奏：材料→制作→试喝三段。" },
  { title: "断舍离100天：我扔了多少东西", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "生活", cls: "" }], idea: "断舍离话题自带情绪共鸣，容易引发评论讨论。", adaptedTitle: "断舍离100天，我扔了200件东西", xhsTitle: "极简生活｜断舍离让我轻松了", plan: "机位：手持；场景：家里各房间；节奏：分类展示，每类10秒。" },
  { title: "新手养猫第一周全记录", tags: [{ text: "B站", cls: "bilibili" }, { text: "中爆", cls: "hot" }, { text: "宠物", cls: "" }], idea: "宠物内容天然吸粉，新手视角代入感强。", adaptedTitle: "新手养猫第一周，我崩溃了3次", xhsTitle: "新手养猫日记｜第一周翻车实录", plan: "机位：固定+手持；场景：家里；节奏：按天记录，每条2-3个片段。" },
  { title: "用手机拍出电影感日常vlog", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "教程", cls: "" }], idea: "手机摄影教程类内容收藏率高，实用性强。", adaptedTitle: "手机拍日常vlog，3招拍出电影感", xhsTitle: "手机vlog教程｜电影感调色+运镜", plan: "机位：手持演示；场景：户外+家里；节奏：技巧拆解，每招30秒。" },
  { title: "周末郊游野餐布置分享", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "生活", cls: "" }], idea: "野餐是季节性爆款话题，场景美易出图。", adaptedTitle: "周末野餐布置大公开，朋友圈都在问", xhsTitle: "野餐布置分享｜出片率100%", plan: "机位：手持+延时；场景：公园草地；节奏：布置→成品→美食三段。" },
  { title: "30天马甲线挑战实录", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "健身", cls: "" }], idea: "健身打卡类内容粉丝粘性高，前后对比是天然爆点。", adaptedTitle: "30天马甲线挑战，第15天就有效果了", xhsTitle: "30天马甲线｜居家跟练打卡", plan: "机位：固定全身；场景：家里；节奏：按天对比，重点突出变化。" },
  { title: "把旧衣服改造成新款", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "手工", cls: "" }], idea: "旧衣改造话题自带环保属性和创意感，易获推荐。", adaptedTitle: "把旧T恤改成新款，省了300块", xhsTitle: "旧衣改造｜让旧衣服起死回生", plan: "机位：桌面俯拍；场景：家里；节奏：旧衣→裁剪→成品→试穿。" },
  { title: "一人食晚餐vlog", tags: [{ text: "抖音", cls: "douyin" }, { text: "中爆", cls: "hot" }, { text: "vlog", cls: "" }], idea: "一人食话题精准触达独居人群，治愈感强。", adaptedTitle: "一个人的晚餐也可以很认真", xhsTitle: "一人食vlog｜今天也好好吃饭", plan: "机位：厨房手持+餐桌；场景：家里；节奏：做菜→摆盘→吃饭，慢节奏。" },
  { title: "整理衣柜大改造", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "收纳", cls: "" }], idea: "收纳整理类内容完播率高，前后对比是天然爽点。", adaptedTitle: "整理衣柜后，我发现多了这么多空间", xhsTitle: "衣柜整理｜从混乱到治愈", plan: "机位：固定+延时；场景：卧室衣柜；节奏：整理前→分类→折叠→成果。" },
  { title: "新手第一次做面包翻车了吗", tags: [{ text: "B站", cls: "bilibili" }, { text: "中爆", cls: "hot" }, { text: "美食", cls: "" }], idea: "新手烘焙翻车内容自带真实感和话题性。", adaptedTitle: "第一次做面包，结果竟然出乎意料", xhsTitle: "烘焙新手｜第一次做面包全记录", plan: "机位：厨房桌面+手持；场景：厨房；节奏：和面→发酵→烘烤→试吃。" },
  { title: "养花日记：从种子到开花", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "植物", cls: "" }], idea: "养花类内容受众精准，延时拍摄开花瞬间是天然爆点。", adaptedTitle: "从种子到开花，我等了60天", xhsTitle: "养花日记｜从播种到开花全记录", plan: "机位：固定延时；场景：阳台；节奏：按周更新，开花瞬间是高潮。" },
  { title: "下班后3小时如何利用", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "自律", cls: "" }], idea: "时间管理话题精准切中上班族痛点，互动率高。", adaptedTitle: "下班后3小时，我做了这些事", xhsTitle: "下班后的3小时｜普通人也能逆袭", plan: "机位：手持+固定；场景：家里各处；节奏：时间轴式，每小时一段。" },
  { title: "沉浸式护肤ASMR", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "护肤", cls: "" }], idea: "ASMR护肤内容沉浸感强，完播率和收藏率极高。", adaptedTitle: "沉浸式护肤，看完想马上睡觉", xhsTitle: "ASMR护肤｜沉浸式晚间护肤routine", plan: "机位：近距特写；场景：卫生间；节奏：慢节奏，无BGM，突出声音。" },
  { title: "翻新二手淘来的旧家具", tags: [{ text: "B站", cls: "bilibili" }, { text: "中爆", cls: "hot" }, { text: "手工", cls: "" }], idea: "旧物翻新有过程感和成就感，容易引发收藏。", adaptedTitle: "二手市场50块淘的柜子，翻新后值500", xhsTitle: "旧家具翻新｜50元淘到宝改造全过程", plan: "机位：手持+延时；场景：阳台/车库；节奏：淘货→打磨→上漆→成品。" },
  { title: "一周穿搭不重样挑战", tags: [{ text: "抖音", cls: "douyin" }, { text: "中爆", cls: "hot" }, { text: "穿搭", cls: "" }], idea: "穿搭挑战系列内容粉丝粘性高，容易形成追更。", adaptedTitle: "7天穿搭不重样，第5套最受欢迎", xhsTitle: "一周穿搭挑战｜胶囊衣橱搭配法", plan: "机位：全身镜；场景：卧室；节奏：每天1套+搭配思路。" },
  { title: "记录宠物的一天", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "宠物", cls: "" }], idea: "宠物视角内容天然有趣，完播率极高。", adaptedTitle: "我家的猫一天都在干什么", xhsTitle: "猫咪的一天｜铲屎官偷窥日记", plan: "机位：固定+跟拍；场景：家里各处；节奏：按时间线，配字幕和音效。" },
  { title: "自制手机壳教程", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "手工", cls: "" }], idea: "手工DIY类内容教程属性强，易获收藏。", adaptedTitle: "自制手机壳，成本5块比买的还好看", xhsTitle: "DIY手机壳｜手残党也能做", plan: "机位：桌面俯拍；场景：书桌；节奏：材料→制作→成品展示。" },
  { title: "100元逛超市能买多少东西", tags: [{ text: "抖音", cls: "douyin" }, { text: "大爆", cls: "hot" }, { text: "生活", cls: "" }], idea: "超市挑战类内容自带悬念和话题性，完播率高。", adaptedTitle: "100元在超市能买多少东西？结局没想到", xhsTitle: "100元超市大挑战｜物价涨了多少", plan: "机位：手持购物车视角；场景：超市；节奏：边逛边算，结尾揭晓。" },
  { title: "居家咖啡拉花教程", tags: [{ text: "小红书", cls: "xhs" }, { text: "中爆", cls: "hot" }, { text: "咖啡", cls: "" }], idea: "咖啡拉花教程受众精准，视觉美感强易出图。", adaptedTitle: "在家也能拉出漂亮的拉花，3步就学会", xhsTitle: "居家咖啡拉花｜新手入门教程", plan: "机位：桌面近拍；场景：厨房；节奏：打奶泡→倒入→拉花特写。" }
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

// 本地双语名言库（20条，离线兜底）
const localBilingualQuotes = [
  { en: "The only way to do great work is to love what you do.", cn: "成就伟大事业的唯一途径是热爱你所做的事。", author: "Steve Jobs" },
  { en: "Life is what happens when you're busy making other plans.", cn: "生活就是当你忙于制定其他计划时所发生的事。", author: "John Lennon" },
  { en: "The future belongs to those who believe in the beauty of their dreams.", cn: "未来属于那些相信自己梦想之美的人。", author: "Eleanor Roosevelt" },
  { en: "It does not matter how slowly you go as long as you do not stop.", cn: "前进的速度有多慢并不重要，重要的是你不要停下来。", author: "Confucius" },
  { en: "Success is not final, failure is not fatal: it is the courage to continue that counts.", cn: "成功不是终点，失败也非末日：重要的是继续前进的勇气。", author: "Winston Churchill" },
  { en: "The best way to predict the future is to create it.", cn: "预测未来的最好方法就是亲手创造未来。", author: "Peter Drucker" },
  { en: "In the middle of every difficulty lies opportunity.", cn: "每一个困难之中都蕴含着机遇。", author: "Albert Einstein" },
  { en: "Don't watch the clock; do what it does. Keep going.", cn: "不要盯着时钟看，要像它一样不停地前进。", author: "Sam Levenson" },
  { en: "Whether you think you can or you think you can't, you're right.", cn: "无论你认为自己能做到还是做不到，你都是对的。", author: "Henry Ford" },
  { en: "The journey of a thousand miles begins with a single step.", cn: "千里之行，始于足下。", author: "Lao Tzu" },
  { en: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", cn: "在一个不断试图改变你的世界里做自己，是最了不起的成就。", author: "Ralph Waldo Emerson" },
  { en: "What we think, we become.", cn: "我们想什么，我们就会变成什么。", author: "Buddha" },
  { en: "The mind is everything. What you think you become.", cn: "思想决定一切。你想什么，你就成为什么。", author: "Buddha" },
  { en: "An unexamined life is not worth living.", cn: "未经审视的生活不值得过。", author: "Socrates" },
  { en: "Strive not to be a success, but rather to be of value.", cn: "努力成为有价值的人，而不是成功的人。", author: "Albert Einstein" },
  { en: "The best revenge is massive success.", cn: "最好的报复就是巨大的成功。", author: "Frank Sinatra" },
  { en: "I have not failed. I've just found 10,000 ways that won't work.", cn: "我没有失败，我只是发现了一万种行不通的方法。", author: "Thomas Edison" },
  { en: "A person who never made a mistake never tried anything new.", cn: "从未犯过错误的人，从未尝试过新事物。", author: "Albert Einstein" },
  { en: "The two most important days in your life are the day you are born and the day you find out why.", cn: "你生命中最重要的两天是你出生的那天和你找到人生目标的那天。", author: "Mark Twain" },
  { en: "Don't count the days, make the days count.", cn: "不要数日子，要让每一天都有意义。", author: "Muhammad Ali" }
];

// 单词本地例句兜底（高频雅思词汇）
const localWordExamples = {
  "accommodate": "The hotel can accommodate up to 500 guests comfortably.",
  "ambiguous": "His answer was ambiguous, leaving everyone unsure of his true intentions.",
  "analyze": "We need to analyze the data carefully before drawing any conclusions.",
  "approach": "A new approach to the problem is needed to break the deadlock.",
  "assemble": "The team will assemble at the meeting point at 8 a.m.",
  "beneficial": "Regular exercise is beneficial for both physical and mental health.",
  "category": "Books are divided into several categories in the library.",
  "circumstance": "Under the circumstances, we decided to cancel the outdoor event.",
  "comprehensive": "The report provides a comprehensive analysis of the market trends.",
  "concept": "The concept of artificial intelligence has evolved significantly over the years.",
  "consequence": "The decision could have serious consequences for the company.",
  "consistent": "She has been consistent in her efforts to improve the process.",
  "contrast": "In contrast to last year, sales have increased by 20 percent.",
  "contribute": "Everyone should contribute to protecting the environment.",
  "criteria": "The selection criteria are clearly outlined in the guidelines.",
  "demonstrate": "The experiment demonstrates the principle of conservation of energy.",
  "derive": "The word 'science' derives from the Latin word 'scientia'.",
  "deteriorate": "His health began to deteriorate rapidly after the accident.",
  "emphasis": "The report places great emphasis on the importance of teamwork.",
  "establish": "The company was established in 1985 and has grown steadily since.",
  "evident": "It is evident that the new policy has had a positive impact.",
  "fluctuate": "Stock prices fluctuate daily based on market conditions.",
  "fundamental": "Freedom of speech is a fundamental human right.",
  "generate": "The factory generates electricity using renewable energy sources.",
  "hypothesis": "The scientist tested her hypothesis through a series of experiments.",
  "illustrate": "The graph illustrates the relationship between temperature and pressure.",
  "impact": "The new law will have a significant impact on small businesses.",
  "incentive": "The company offers incentives to employees who meet their targets.",
  "indicate": "The latest figures indicate a strong recovery in the economy.",
  "inevitable": "Change is inevitable; the only question is how we respond to it.",
  "interpret": "How we interpret events depends largely on our past experiences.",
  "investigate": "The police are investigating the cause of the accident.",
  "justify": "Nothing can justify such cruel treatment of innocent people.",
  "maintenance": "Regular maintenance is essential to keep the equipment in good condition.",
  "obstacle": "Lack of funding is the main obstacle to the project's success.",
  "perspective": "Try to see it from a different perspective.",
  "phenomenon": "This natural phenomenon occurs only once every few years.",
  "potential": "The product has enormous potential in the international market.",
  "predominant": "English is the predominant language in international business.",
  "prevail": "Justice will prevail in the end, despite temporary setbacks.",
  "proportion": "A large proportion of the population lives in urban areas.",
  "relevant": "Please provide all relevant documents with your application.",
  "reluctant": "He was reluctant to admit that he had made a mistake.",
  "significant": "There has been a significant change in public opinion on this issue.",
  "subsequent": "Subsequent events proved his earlier predictions to be correct.",
  "sustain": "We need to develop sustainable energy sources for the future.",
  "tendency": "There is a growing tendency for people to work from home.",
  "trigger": "The announcement triggered a wave of protests across the country.",
  "valid": "Your passport must be valid for at least six more months.",
  "variant": "This variant of the virus is more contagious than the original."
};

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
  { title: "峰终定律", content: "用户只记得体验中最强烈的部分和最后结束的感觉。开头要抓人，结尾要升华。" },
  { title: "奥卡姆剃刀", content: "如无必要，勿增实体。简单的方案往往比复杂的方案更有效。" },
  { title: "逆向思维", content: "反过来想，总是反过来想。查理·芒格说：告诉我我会死在哪里，我就永远不去那个地方。" },
  { title: "第一性原理", content: "回到事物最基本的事实和假设，从零开始推理，而不是依赖类比和经验。" },
  { title: "系统思维", content: "不孤立地看问题，而是把它放在整个系统中思考，关注各要素之间的联系和反馈回路。" },
  { title: "机会成本", content: "选择一个选项的同时，你放弃了其他所有选项。最贵的成本是你为某事花费的时间。" },
  { title: "沉没成本谬误", content: "过去投入的成本不应该影响现在的决策。重要的是未来的收益，而不是过去的付出。" },
  { title: "边际效应递减", content: "当你已经拥有很多某样东西时，再多增加一单位所带来的满足感会越来越少。" },
  { title: "幸存者偏差", content: "你只看到了幸存下来的案例，而忽略了那些没有幸存的，从而得出错误结论。" },
  { title: "霍桑效应", content: "当人们知道自己被观察时，会改变自己的行为。注意到这一点可以让你更客观地看待事物。" },
  { title: " placebo 效应", content: "信念本身就能产生实际的效果。相信自己能做到，往往就真的能做到。" },
  { title: "二八定律的应用", content: "在任何领域，顶尖 20% 的人创造了 80% 的价值。找到你领域里那最关键的 20%。" },
  { title: "能力圈", content: "巴菲特说：只在你理解的领域内投资。了解自己的能力范围比扩展能力范围更重要。" },
  { title: "黑天鹅事件", content: "那些罕见但影响巨大的事件。不要试图预测它们，而是要让自己变得更有韧性。" },
  { title: "反脆弱", content: "塔勒布提出：有些事物不仅能从冲击中存活，还能从冲击中获益。成为反脆弱的系统。" },
  { title: "极简主义", content: "少即是多。去掉一切不必要的东西，剩下的才是真正重要的。" },
  { title: "成长型思维", content: "能力不是天生的，而是可以通过努力培养的。拥抱挑战，从失败中学习。" },
  { title: "认知失调", content: "当信念与行为不一致时，人们会感到不舒服，并试图改变行为或信念来减少这种不协调。" },
  { title: "确认偏误", content: "人们倾向于寻找、解释和记住能够证实自己已有信念的信息。要主动寻找反例。" },
  { title: "可得性启发法", content: "容易想到的案例会被高估其发生概率。不要用身边的例子来判断整体情况。" },
  { title: "邓巴数字", content: "人类能够维持稳定社交关系的人数上限大约是 150 人。超过这个数量，关系就会变得表面。" },
  { title: "拖延症的本质", content: "拖延不是时间管理问题，而是情绪管理问题。你拖延的不是任务，而是任务带来的负面情绪。" },
  { title: "两分钟法则", content: "如果一件事能在两分钟内完成，就立刻去做。不要放进待办清单。" },
  { title: "番茄工作法", content: "25 分钟专注 + 5 分钟休息为一个循环。四个番茄后长休一次。保持高质量专注。" },
  { title: "GTD 方法", content: "收集-澄清-组织-回顾-执行。把所有待办从脑中清空，放到一个可靠的系统里。" },
  { title: "晨间仪式", content: "每天早起后的第一个小时决定了你一整天的状态。用它来做最重要的事。" },
  { title: "深度学习", content: "霍华德·加德纳提出：真正的学习需要超越表面信息，理解底层原理并能迁移应用。" },
  { title: "创造性破坏", content: "熊彼特提出：创新会摧毁旧产业的同时创造新产业。拥抱变化才能不被淘汰。" },
  { title: "长板理论", content: "在资源稀缺时，把所有资源集中在你的最长板上，而不是努力补短板。" },
  { title: "临界点效应", content: "在达到临界点之前，一切都是白费功夫。但只要再坚持一点，就会发生质的飞跃。" },
  { title: "飞轮效应", content: "飞轮转动需要一开始用很大的力气，但一旦转起来，就会自己持续转动。开始最难。" },
  { title: "蝴蝶效应", content: "一个微小的初始变化可能导致巨大的连锁反应。你的每一个小选择都很重要。" },
  { title: "破窗效应", content: "如果一幢建筑物的窗户玻璃被打破后没有及时维修，别人就可能受到暗示性纵容去打烂更多的窗户。" },
  { title: "华盛顿合作定律", content: "一个人敷衍了事，两个人互相推诿，三个人则永无成事之日。明确分工才能避免内耗。" },
  { title: "木桶定律", content: "一只水桶能装多少水取决于它最短的那块木板。找出你的短板，但也要注意长板优势。" },
  { title: "刺猬法则", content: "两只刺猬想取暖，靠太近会扎到对方，离太远又会冷。人际关系中的心理距离也是如此。" },
  { title: "手表定律", content: "只有一块手表时你可以知道准确时间，但有两块时你就无法确定了。选择太多反而迷茫。" },
  { title: "不值得定律", content: "不值得做的事情，就不值得做好。先判断值不值得，再投入精力。" },
  { title: "墨菲定律", content: "凡事可能出错就一定会出错。但这不代表悲观，而是要做最坏的打算，最好的准备。" },
  { title: "二八法则的反向应用", content: "20% 的时间投入带来 80% 的成果。找到那关键的 20%，把更多时间投入进去。" },
  { title: "知识的诅咒", content: "当你非常熟悉某个领域时，你会发现很难向不熟悉的人解释，因为你已经忘记了不懂得是什么感觉。" }
];

const topicPool = [
  "30天自律挑战：每天早起1小时", "用100元改造书桌一角", "普通人如何养成高级感气质",
  "我的一周备餐流程分享", "下班后的3小时可以做多少事", "一年读50本书，我的阅读方法",
  "极简衣柜整理：胶囊衣橱打造计划", "居家健身30天打卡：从零开始", "手账入门：让记录变成习惯",
  "一个人住的100个幸福瞬间", "早起21天实验：我真的变了吗", "100元挑战做一周三餐",
  "数字断舍离：一周不看短视频", "学会拒绝：我的边界感练习", "城市漫步：发现身边的隐藏风景",
  "从零开始学理财：记账100天", "独居女孩的安全指南", "用碎片时间学一门新技能",
  "整理手机相册：回忆杀与断舍离", "一杯咖啡的钱能做什么投资", "周末市集淘货分享",
  "沉浸式学习vlog：图书馆一天", "普通人如何拍出好看的自拍", "从社恐到社牛的心路历程",
  "秋冬护肤攻略：干皮逆袭记", "用AI工具提升工作效率的5种方式", "第一次养多肉植物翻车记",
  "上班族带饭日记：一周不重样", "深夜厨房：一个人的治愈美食", "穿搭色系搭配指南",
  "断舍离第7天：扔掉了什么意想不到的东西", "手写信计划：给未来的自己", "公园20分钟效应实测",
  "自制节日装饰：氛围感拉满", "学一项乐器30天：尤克里里入门", "旧物改造：让闲置起死回生",
  "城市探索：我发现了10个宝藏小店", "一周不看外卖自己做饭", "养成晨跑习惯的真实感受",
  "沉浸式护肤：晚间治愈routine", "第一次摆摊卖手工：真实收入大公开", "用Notion搭建个人管理系统"
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
  { src: 'girl_sweet.jpg',      label: '甜妹', gender: '女' },
  { src: 'girl_mature.jpg',     label: '御姐', gender: '女' },
  { src: 'girl_energetic.jpg',  label: '元气', gender: '女' },
  { src: 'girl_artistic.jpg',   label: '文艺', gender: '女' },
  { src: 'boy_sunny.jpg',       label: '阳光', gender: '男' },
  { src: 'boy_cool.jpg',         label: '冷酷', gender: '男' },
  { src: 'boy_scholar.jpg',     label: '书生', gender: '男' },
  { src: 'boy_athletic.jpg',    label: '运动', gender: '男' }
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

// ========== 音频播放器（带进度条+暂停+多路降级）==========
let engSpeed = 0.9;
let currentAudio = null;
let currentUtterance = null;
let progressTimer = null;

// 多个 TTS 端点，自动切换（国内可用优先）
const TTS_ENDPOINTS = [
  // 有道TTS（国内可直接访问，最稳定）
  (text) => `https://dict.youdao.com/dictvoice?type=2&audio=${encodeURIComponent(text)}`,
  // Google TTS（国内可能被墙，作为备选）
  (text, lang) => `https://translate.google.cn/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`,
  (text, lang) => `https://translate.google.com.hk/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`,
  (text, lang) => `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`,
  (text, lang) => `https://translate.google.com.tw/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`
];

function fmtAudioTime(sec) {
  if (!isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function showAudioBar() {
  const bar = document.getElementById('audioPlayerBar');
  if (bar) bar.style.display = 'flex';
}
function hideAudioBar() {
  const bar = document.getElementById('audioPlayerBar');
  if (bar) bar.style.display = 'none';
  if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
}
function updateAudioBar(audio) {
  const prog = document.getElementById('audioProgress');
  const time = document.getElementById('audioTime');
  const btn = document.getElementById('audioPlayPause');
  if (audio.duration && audio.currentTime > 0) {
    const pct = (audio.currentTime / audio.duration) * 100;
    if (prog) prog.style.width = Math.min(100, pct) + '%';
    if (time) time.textContent = fmtAudioTime(audio.currentTime) + '/' + fmtAudioTime(audio.duration);
  } else if (audio.estimatedDuration) {
    const pct = (audio.currentTime / audio.estimatedDuration) * 100;
    if (prog) prog.style.width = Math.min(95, pct) + '%';
    if (time) time.textContent = fmtAudioTime(audio.currentTime);
  } else {
    if (time) time.textContent = '加载中...';
  }
  if (btn) btn.textContent = audio.paused ? '▶️' : '⏸️';
}

// 核心播放函数 - 智能分流：单词走TTS（音质好），句子走Web Speech（零延迟流畅）
function playAudio(text, btnEl, rate, onEndedCb) {
  if (!text) return;
  stopAudio();

  const speed = rate === undefined ? engSpeed : rate;
  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const isWord = wordCount <= 1;

  // 给用户即时反馈
  document.querySelectorAll('.speak-btn.playing').forEach(b => b.classList.remove('playing'));
  if (btnEl) btnEl.classList.add('playing');
  showAudioBar();
  updateAudioBar({ duration: null, currentTime: 0, paused: false });

  if (isWord) {
    // 单词：TTS优先（有道音质好），失败→Web Speech兜底
    tryPlayTTS(text, speed, btnEl, () => {
      tryPlayWebSpeech(text, btnEl, speed, onEndedCb, undefined, () => {
        hideAudioBar();
        if (btnEl) btnEl.classList.remove('playing');
        showToast('播放失败，请检查网络或更新浏览器');
      });
    }, onEndedCb);
  } else {
    // 句子：Web Speech优先（本地合成，零延迟，最流畅）
    tryPlayWebSpeech(text, btnEl, speed, onEndedCb, undefined, () => {
      // Web Speech失败 → TTS兜底（完整文本）
      tryPlayTTS(text, speed, btnEl, () => {
        // 完整TTS也失败 → 拆块播放
        if (wordCount > 1) {
          playAudioChunked(text, speed, btnEl, onEndedCb, () => {
            hideAudioBar();
            if (btnEl) btnEl.classList.remove('playing');
            showToast('播放失败，请检查网络或更新浏览器');
          });
        } else {
          hideAudioBar();
          if (btnEl) btnEl.classList.remove('playing');
          showToast('播放失败，请检查网络或更新浏览器');
        }
      }, onEndedCb);
    });
  }
}

// 拆分长文本为2-3词短块，逐块用有道TTS播放（绕过ORB对长文本的拦截）
function playAudioChunked(text, speed, btnEl, onAllDone, onAllFail) {
  const words = text.trim().split(/\s+/).filter(w => w.length > 0);
  if (words.length === 0) { onAllFail && onAllFail(); return; }

  // 每块最多3个词，避免有道对长文本返回非音频内容被ORB拦截
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(' '));
  }

  let chunkIdx = 0;
  let successCount = 0;

  // 模拟进度条
  const totalChunks = chunks.length;
  const estWordRate = 3 * speed; // 每秒约3词
  const totalDuration = words.length / estWordRate;
  const startTime = Date.now();
  updateAudioBar({ duration: totalDuration, currentTime: 0, paused: false });
  if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
  progressTimer = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    updateAudioBar({ duration: totalDuration, currentTime: Math.min(elapsed, totalDuration), paused: false });
    if (elapsed >= totalDuration) { clearInterval(progressTimer); progressTimer = null; }
  }, 200);

  function playNextChunk() {
    // 如果播放被停止了（用户点了其他按钮或stopAudio），不再继续
    if (btnEl && !btnEl.classList.contains('playing')) {
      if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
      return;
    }
    if (chunkIdx >= totalChunks) {
      // 所有块播放完毕
      if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
      if (btnEl) btnEl.classList.remove('playing');
      if (successCount > 0) {
        if (onAllDone) { onAllDone(); }
        else { hideAudioBar(); }
      } else {
        onAllFail && onAllFail();
      }
      return;
    }

    const chunk = chunks[chunkIdx];
    // maxAttempts=1: 块播放只试有道端点（2s超时快速失败，不浪费时间试Google被墙端点）
    tryPlayTTS(chunk, speed, btnEl, () => {
      // 当前块TTS失败，跳到下一块继续
      chunkIdx++;
      setTimeout(playNextChunk, 100);
    }, () => {
      // 当前块播放成功
      successCount++;
      chunkIdx++;
      if (chunkIdx < totalChunks) {
        setTimeout(playNextChunk, 120);
      } else {
        // 全部播放完
        if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
        if (btnEl) btnEl.classList.remove('playing');
        if (onAllDone) { onAllDone(); }
        else { hideAudioBar(); }
      }
    }, 0, 1);
  }

  playNextChunk();
}

function tryPlayTTS(text, speed, btnEl, onAllFail, onEndedCb, attempt = 0, maxAttempts) {
  const limit = maxAttempts || TTS_ENDPOINTS.length;
  if (attempt >= limit) {
    onAllFail && onAllFail();
    return;
  }

  const url = TTS_ENDPOINTS[attempt](text, 'en');
  const audio = new Audio();
  audio.src = url;
  audio.playbackRate = speed;
  audio.volume = 1;
  audio.preload = 'auto';
  audio.timeoutId = null;
  audio.hasStarted = false;

  currentAudio = audio;
  updateAudioBar({ duration: null, currentTime: 0, paused: false });

  // 首端点超时短（2秒），快速降级；后续端点放宽到4秒
  const timeoutMs = attempt === 0 ? 2000 : 4000;
  audio.timeoutId = setTimeout(() => {
    if (audio === currentAudio && !audio.hasStarted) {
      audio.pause();
      audio.src = '';
      tryPlayTTS(text, speed, btnEl, onAllFail, onEndedCb, attempt + 1, maxAttempts);
    }
  }, timeoutMs);

  const onPlay = () => {
    audio.hasStarted = true;
    clearTimeout(audio.timeoutId);
  };

  const onEnd = () => {
    clearTimeout(audio.timeoutId);
    if (btnEl) btnEl.classList.remove('playing');
    if (onEndedCb) { onEndedCb(); }
    else { hideAudioBar(); }
  };

  const onError = () => {
    clearTimeout(audio.timeoutId);
    if (audio === currentAudio) {
      audio.pause();
      audio.src = '';
      tryPlayTTS(text, speed, btnEl, onAllFail, onEndedCb, attempt + 1, maxAttempts);
    }
  };

  audio.addEventListener('playing', onPlay);
  audio.addEventListener('canplaythrough', onPlay);
  audio.addEventListener('timeupdate', () => updateAudioBar(audio));
  audio.addEventListener('ended', onEnd);
  audio.addEventListener('error', onError);

  audio.play().catch(() => {
    onError();
  });
}

// 降级方案：使用浏览器 Web Speech API（增加 onFailCb 兜底，失败时可回退）
function tryPlayWebSpeech(text, btnEl, speed, onEndedCb, retryCount, onFailCb) {
  if (!('speechSynthesis' in window)) {
    onFailCb && onFailCb();
    return;
  }

  // 语音列表未加载 → 最多等3次（600ms），超过就判失败走兜底
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0 && (retryCount === undefined || retryCount < 3)) {
    const retry = (retryCount || 0) + 1;
    setTimeout(() => tryPlayWebSpeech(text, btnEl, speed, onEndedCb, retry, onFailCb), 200);
    return;
  }

  // 3次重试后仍空 → 判定Web Speech不可用，走fallback
  if (voices.length === 0) {
    onFailCb && onFailCb();
    return;
  }

  // 保护：如果speaking但没在说，先彻底cancel
  try { window.speechSynthesis.cancel(); } catch (e) {}
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = speed;
  u.volume = 1;

  // 根据句子类型动态调整 pitch，让语音更有感情
  const trimText = text.trim();
  if (/[!?]$/.test(trimText) || /^(what|why|how|who|where|when|do you|can you|could you|would you|is it|are you)/i.test(trimText)) {
    u.pitch = 1.15;  // 疑问句/感叹句：略升调，表现情绪
  } else if (/^(i think|i believe|i feel|i hope|i wish)/i.test(trimText)) {
    u.pitch = 0.9;   // 表达个人感受：略低沉，更真诚
  } else {
    u.pitch = 1.0 + (Math.random() - 0.5) * 0.1;  // 陈述句：轻微随机变化，避免机械感
  }

  // 语音选择：严格按优先顺序匹配，优先选有感情的高质量女声
  const enVoices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
  if (enVoices.length > 0) {
    const preferredNames = [
      'Samantha',        // macOS 最好的女声，有感情
      'Google UK English Female',  // Chrome 高质量女声
      'Google US English',
      'Microsoft Aria',  // Edge 自然语音
      'Microsoft Jenny',
      'Microsoft Zira',
      'Google UK English Male',
      'Female', 'Natural', 'Aria'
    ];
    let bestVoice = null;
    for (const name of preferredNames) {
      bestVoice = enVoices.find(v => v.name.includes(name));
      if (bestVoice) break;
    }
    if (!bestVoice) {
      // 优先选女声（通常更自然）
      bestVoice = enVoices.find(v => /female|aria|jenny|zira|samantha/i.test(v.name)) || enVoices[0];
    }
    u.voice = bestVoice;
  }

  // 估算播放时长（英文约每秒3-4个词）
  const wordCount = text.split(/\s+/).length;
  const estimatedDuration = Math.max(3, wordCount / (3 * speed));
  const fakeAudio = { duration: estimatedDuration, currentTime: 0, paused: false, estimatedDuration };
  updateAudioBar(fakeAudio);

  const startTime = Date.now();
  progressTimer = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    fakeAudio.currentTime = Math.min(elapsed, estimatedDuration);
    updateAudioBar(fakeAudio);
    if (fakeAudio.currentTime >= estimatedDuration) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  }, 100);

  // 看门狗：超过预估时长+5秒仍未触发onend/onstart，判定卡死 → fallback
  const watchdog = setTimeout(() => {
    if (currentUtterance === u) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
  }, (estimatedDuration + 5) * 1000);

  let failed = false;
  const triggerFail = () => {
    if (failed) return;
    failed = true;
    clearTimeout(watchdog);
    if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
    onFailCb && onFailCb();
  };

  u.onstart = () => {
    clearTimeout(watchdog);
  };
  u.onend = () => {
    clearTimeout(watchdog);
    if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
    if (btnEl) btnEl.classList.remove('playing');
    if (onEndedCb) { onEndedCb(); }
    else { hideAudioBar(); }
  };
  u.onerror = (e) => {
    if (e.error === 'canceled' || e.error === 'interrupted') return;
    triggerFail();
  };

  currentUtterance = u;
  try {
    window.speechSynthesis.speak(u);
    // 某些Chrome上speak后会静默失败，如果500ms内还没开始播放且未pending，则判失败
    setTimeout(() => {
      if (currentUtterance === u && !window.speechSynthesis.speaking && !window.speechSynthesis.pending) {
        triggerFail();
      }
    }, 500);
  } catch (e) {
    triggerFail();
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  currentUtterance = null;
  if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
  document.querySelectorAll('.speak-btn.playing').forEach(b => b.classList.remove('playing'));
  hideAudioBar();
}

function togglePlayPause() {
  if (currentAudio) {
    if (currentAudio.paused) {
      currentAudio.play();
    } else {
      currentAudio.pause();
    }
    return;
  }
  if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      const btn = document.getElementById('audioPlayPause');
      if (btn) btn.textContent = '⏸️';
    } else {
      window.speechSynthesis.pause();
      const btn = document.getElementById('audioPlayPause');
      if (btn) btn.textContent = '▶️';
    }
    return;
  }
}

function speak(text, btnEl, rate) {
  playAudio(text, btnEl, rate);
}

// ========== 网络状态监控 ==========
function initNetworkStatus() {
  const el = document.getElementById('netStatus');
  if (!el) return;
  function update() {
    if (navigator.onLine) {
      el.classList.remove('offline');
      el.querySelector('.net-text').textContent = '在线';
    } else {
      el.classList.add('offline');
      el.querySelector('.net-text').textContent = '离线';
    }
  }
  update();
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
}

// ========== 联网获取名言 ==========
async function fetchOnlineQuote() {
  try {
    const res = await fetch('https://api.quotable.io/random?maxLength=120');
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return { en: data.content, author: data.author };
  } catch (e) {
    return null;
  }
}

// 联网获取单词例句（带本地兜底）
async function fetchWordExample(word) {
  const lower = word.toLowerCase();
  // 先尝试本地兜底
  if (localWordExamples[lower]) {
    return localWordExamples[lower];
  }
  // 再尝试联网
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(lower)}`);
    if (!res.ok) return null;
    const data = await res.json();
    for (const entry of data) {
      if (entry.meanings) {
        for (const meaning of entry.meanings) {
          if (meaning.definitions) {
            for (const def of meaning.definitions) {
              if (def.example) return def.example;
            }
          }
        }
      }
    }
    // 没找到例句，用第一个释义造一个
    if (data[0] && data[0].meanings && data[0].meanings[0] && data[0].meanings[0].definitions[0]) {
      const def = data[0].meanings[0].definitions[0];
      return def.definition;
    }
    return null;
  } catch (e) {
    return null;
  }
}

// 单词收藏
function getFavorites() {
  return JSON.parse(localStorage.getItem('cc_word_favorites') || '[]');
}
function toggleFavorite(word, ph, cn) {
  const favs = getFavorites();
  const idx = favs.findIndex(f => f.en === word);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push({ en: word, ph: ph, cn: cn, ts: Date.now() });
  }
  localStorage.setItem('cc_word_favorites', JSON.stringify(favs));
}

// ===================== 初始化 =====================
document.addEventListener('DOMContentLoaded', () => {
  initDate();
  initNetworkStatus();
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
  initDataBackup();
  initAudioControls();
  updateHomeStats();
  
  // 预加载 Web Speech API 语音
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
    window.speechSynthesis.getVoices();
  }
  
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
  // 每次随机抽取5条展示
  function pickRandomItems(count) {
    const pool = [...recreationData];
    const result = [];
    for (let i = 0; i < Math.min(count, pool.length); i++) {
      const idx = Math.floor(Math.random() * pool.length);
      result.push({ ...pool[idx], originalIdx: recreationData.indexOf(pool[idx]) });
      pool.splice(idx, 1);
    }
    return result;
  }
  let currentItems = pickRandomItems(5);
  function render() {
    const insps = JSON.parse(localStorage.getItem('cc_inspirations') || '[]');
    const inspCard = insps.length
      ? `<div class="section-card" style="background:linear-gradient(135deg,#FFF0F3,#fff);margin-bottom:16px">
           <h3 style="margin-bottom:8px">💡 我的灵感库（${insps.length}）</h3>
           <div style="display:flex;flex-direction:column;gap:6px">
             ${insps.map((t, i) => `<div style="font-size:13px;color:var(--text);padding:6px 10px;background:#fff;border-radius:8px">${i + 1}. ${t}</div>`).join('')}
           </div>
         </div>` : '';
    list.innerHTML = inspCard + `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <span style="font-size:13px;color:var(--text-secondary)">共${recreationData.length}条灵感，每次展示5条</span>
        <button class="btn btn-primary" id="refreshAllRecreation" style="font-size:13px;padding:6px 14px">🔄 换一批</button>
      </div>
    ` + currentItems.map((item, idx) => `
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
        </div>
        <button class="btn-refresh btn-change-one" data-index="${idx}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 5.5A10 10 0 1 1 11.26 2.67"/></svg>换一条
        </button>
      </article>`).join('');
    bindActions();
  }
  function bindActions() {
    const refreshAll = document.getElementById('refreshAllRecreation');
    if (refreshAll) refreshAll.addEventListener('click', () => {
      list.style.opacity = '0.5';
      setTimeout(() => { currentItems = pickRandomItems(5); render(); list.style.opacity = '1'; }, 200);
    });
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
    document.querySelectorAll('.btn-change-one').forEach(btn => btn.addEventListener('click', () => {
      const card = btn.closest('.recreation-card');
      const idx = parseInt(card.dataset.index);
      card.style.opacity = '0.5';
      setTimeout(() => {
        // 从未展示的池子里随机取一条替换
        const usedTitles = currentItems.map(i => i.title);
        const remaining = recreationData.filter(d => !usedTitles.includes(d.title));
        const pool = remaining.length > 0 ? remaining : recreationData;
        currentItems[idx] = { ...pool[Math.floor(Math.random() * pool.length)] };
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
  const historyList = document.getElementById('knowledgeHistoryList');
  const seenKey = 'cc_knowledge_seen';
  const historyKey = 'cc_knowledge_history';
  
  function getSeen() {
    return JSON.parse(localStorage.getItem(seenKey) || '[]');
  }
  function getHistory() {
    return JSON.parse(localStorage.getItem(historyKey) || '[]');
  }
  function saveSeen(arr) {
    const seen = getSeen();
    arr.forEach(i => { if (!seen.includes(i)) seen.push(i); });
    localStorage.setItem(seenKey, JSON.stringify(seen));
  }
  function addToHistory(title, content) {
    const history = getHistory();
    history.unshift({ title, content, ts: Date.now() });
    if (history.length > 100) history.length = 100;
    localStorage.setItem(historyKey, JSON.stringify(history));
  }
  
  function pickRandomLocal() {
    const seen = getSeen();
    const remaining = [];
    for (let i = 0; i < knowledgePool.length; i++) {
      if (!seen.includes(i)) remaining.push(i);
    }
    if (remaining.length === 0) {
      localStorage.setItem(seenKey, '[]');
      return Math.floor(Math.random() * knowledgePool.length);
    }
    return remaining[Math.floor(Math.random() * remaining.length)];
  }
  
  function renderHistory() {
    if (!historyList) return;
    const history = getHistory();
    if (!history.length) {
      historyList.innerHTML = `<li style="text-align:center;color:var(--text-secondary);background:transparent">暂无历史记录</li>`;
      return;
    }
    historyList.innerHTML = history.slice(0, 20).map(item => `
      <li class="knowledge-history-item">
        <div class="history-date">${new Date(item.ts).toLocaleDateString('zh-CN')} · ${item.title}</div>
        <div class="history-text">${item.content}</div>
      </li>`).join('');
  }
  
  function renderLocal() {
    const idx = pickRandomLocal();
    const k = knowledgePool[idx];
    const seen = getSeen();
    wrap.innerHTML = `
      <div class="knowledge-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <h3 style="margin:0">${k.title}</h3>
          <span style="font-size:11px;color:var(--text-secondary);background:var(--primary-light);padding:3px 8px;border-radius:10px">📚 ${seen.length}/${knowledgePool.length}</span>
        </div>
        <p style="font-size:14px;line-height:1.75;color:var(--text)">${k.content}</p>
      </div>`;
    saveSeen([idx]);
    addToHistory(k.title, k.content);
    renderHistory();
  }
  
  async function renderOnline() {
    if (!navigator.onLine) { renderLocal(); return; }
    const quote = await fetchOnlineQuote();
    if (!quote) { renderLocal(); return; }
    wrap.innerHTML = `
      <div class="knowledge-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <h3 style="margin:0">💡 名言启发</h3>
          <span style="font-size:11px;color:#4caf50;background:#e8f5e9;padding:3px 8px;border-radius:10px">🌐 联网</span>
        </div>
        <p style="font-size:14px;font-style:italic;line-height:1.75;color:var(--text)">${quote.en}</p>
        <p style="font-size:12px;color:var(--text-secondary);margin-top:8px">— ${quote.author}</p>
      </div>`;
    addToHistory(quote.author + ' 名言', quote.en);
    renderHistory();
  }
  
  function render() {
    if (navigator.onLine) {
      wrap.innerHTML = '<div class="knowledge-card"><p style="text-align:center;color:var(--text-secondary)">加载中...</p></div>';
      renderOnline();
    } else {
      renderLocal();
    }
  }
  
  render();
  btn.addEventListener('click', () => {
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
  
  // 加载保存的语速
  const savedSpeed = localStorage.getItem('cc_eng_speed');
  if (savedSpeed) {
    engSpeed = parseFloat(savedSpeed);
    speedInput.value = engSpeed;
    speedVal.textContent = engSpeed.toFixed(1) + 'x';
  }

  speedInput.addEventListener('input', () => {
    engSpeed = parseFloat(speedInput.value);
    speedVal.textContent = engSpeed.toFixed(1) + 'x';
    localStorage.setItem('cc_eng_speed', engSpeed.toString());
  });

  // 生成器
  function genWords() { return pickN(ieltsPool, 16); }
  function genSpeaking() { return pickN(speakingPool, 4); }
  function genTed() { return pickN(tedPool, 3); }
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
      data = { words: genWords(), speaking: genSpeaking(), ted: genTed(), shadowing: genShadowing(), monologue: '' };
      localStorage.setItem(k, JSON.stringify(data));
    }
    return data;
  }

  function renderWords(words) {
    const favs = getFavorites();
    document.getElementById('wordGrid').innerHTML = words.map(w => {
      const isFav = favs.some(f => f.en === w.en);
      return `
      <div class="wcard" data-revealed="false" data-en="${encodeURIComponent(w.en)}" data-ph="${encodeURIComponent(w.ph)}" data-cn="${encodeURIComponent(w.cn)}">
        <div class="wcard-en">${w.en}</div>
        <div class="wcard-ph">${w.ph}</div>
        <div class="wcard-cn-wrap">
          <div class="wcard-cn">${w.cn}</div>
          <div class="wcard-cn-cover">点击查看释义</div>
        </div>
        <button class="speak-btn" data-spe="${encodeURIComponent(w.en)}">🔊</button>
        <div class="wcard-actions">
          <button class="wcard-action-btn ex-btn" data-word="${encodeURIComponent(w.en)}">📖 例句</button>
          <button class="wcard-action-btn fav-btn ${isFav ? 'favorited' : ''}" data-fav-en="${encodeURIComponent(w.en)}" data-fav-ph="${encodeURIComponent(w.ph)}" data-fav-cn="${encodeURIComponent(w.cn)}">${isFav ? '★ 已收藏' : '☆ 收藏'}</button>
        </div>
        <div class="wcard-example" data-ex-for="${encodeURIComponent(w.en)}"></div>
      </div>`;
    }).join('');
    
    document.querySelectorAll('#wordGrid .wcard').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.speak-btn') || e.target.closest('.wcard-action-btn') || e.target.closest('.wcard-example')) return;
        card.dataset.revealed = card.dataset.revealed === 'true' ? 'false' : 'true';
      });
    });
    
    // 例句按钮
    document.querySelectorAll('#wordGrid .ex-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const word = decodeURIComponent(btn.dataset.word);
        const exDiv = document.querySelector(`.wcard-example[data-ex-for="${encodeURIComponent(word)}"]`);
        if (exDiv.classList.contains('show')) {
          exDiv.classList.remove('show');
          btn.textContent = '📖 例句';
          return;
        }
        exDiv.innerHTML = '查询中...';
        exDiv.classList.add('show');
        btn.textContent = '📖 收起';
        const example = await fetchWordExample(word);
        if (example) {
          exDiv.innerHTML = `💬 ${example}<button class="speak-btn" style="margin-left:4px;font-size:12px" data-spe="${encodeURIComponent(example)}">🔊</button>`;
        } else {
          exDiv.innerHTML = '暂无例句数据';
        }
      });
    });
    
    // 收藏按钮
    document.querySelectorAll('#wordGrid .fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const en = decodeURIComponent(btn.dataset.favEn);
        const ph = decodeURIComponent(btn.dataset.favPh);
        const cn = decodeURIComponent(btn.dataset.favCn);
        toggleFavorite(en, ph, cn);
        const favs = getFavorites();
        const isFav = favs.some(f => f.en === en);
        btn.classList.toggle('favorited', isFav);
        btn.textContent = isFav ? '★ 已收藏' : '☆ 收藏';
        showToast(isFav ? '已收藏' : '已取消收藏');
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
    const enText = (typeof monoData === 'string') ? monoData : (monoData && monoData.en);
    const cnText = (monoData && typeof monoData === 'object') ? monoData.cn : '';
    if (!enText) {
      mono.innerHTML = '<span style="color:var(--text-secondary);font-size:13px">点击上方按钮生成独白文本</span>';
      return;
    }
    // 拆分为单句，每句配一个播放按钮
    const sentences = enText.match(/[^.!?]+[.!?]+/g) || [enText];
    const cnSentences = cnText ? (cnText.match(/[^。！？]+[。！？]+/g) || [cnText]) : [];
    
    // 计算总词数
    const totalWords = enText.split(/\s+/).length;
    
    mono.innerHTML = `
      <div style="margin-bottom:10px;font-size:12px;color:var(--text-secondary)">
        📊 共 ${sentences.length} 句 · ${totalWords} 词
        <button class="btn btn-secondary" id="monoPlayAll" style="margin-left:8px;padding:4px 10px;font-size:11px">▶️ 连读全文</button>
      </div>
      <div class="mono-en" id="monoSentences">
        ${sentences.map((s, i) => `
          <div class="mono-sentence" data-idx="${i}">
            <button class="speak-btn" data-spe="${encodeURIComponent(s.trim())}" data-idx="${i}" title="点击播放此句">🔊</button>
            <span class="mono-sentence-en">${s.trim()}</span>
          </div>
          ${cnSentences[i] ? `<div class="mono-sentence-cn">${cnSentences[i].trim()}</div>` : ''}
        `).join('')}
      </div>
    `;
    
    // 绑定整段播放
    const playAllBtn = document.getElementById('monoPlayAll');
    if (playAllBtn) {
      playAllBtn.addEventListener('click', () => {
        playMonologueAll(sentences, cnSentences);
      });
    }
  }
  
  // 独白整段连读（依次播放每一句）
  function playMonologueAll(sentences, cnSentences) {
    let idx = 0;
    const sentenceEls = document.querySelectorAll('#monoSentences .mono-sentence');
    
    function playNext() {
      if (idx >= sentences.length) {
        stopAudio();
        showToast('独白播放完成');
        return;
      }
      
      // 高亮当前句
      sentenceEls.forEach((el, i) => {
        el.style.background = i === idx ? 'var(--primary-light)' : '';
      });
      
      const targetBtn = sentenceEls[idx] ? sentenceEls[idx].querySelector('.speak-btn') : null;
      playAudio(sentences[idx].trim(), targetBtn, engSpeed, () => {
        idx++;
        setTimeout(playNext, 300);
      });
    }
    
    playNext();
  }

  function renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    const stats = document.getElementById('favoritesStats');
    const favs = getFavorites();
    
    if (!favs.length) {
      if (grid) grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px 20px;color:var(--text-secondary);font-size:14px">
        <div style="font-size:48px;margin-bottom:12px">📚</div>
        <p>还没有收藏的单词</p>
        <p style="font-size:12px;margin-top:6px">去「单词」标签页点击☆收藏单词，随时回来复习吧！</p>
      </div>`;
      if (stats) stats.innerHTML = '';
      return;
    }
    
    if (stats) {
      const lastReview = localStorage.getItem('cc_fav_review_time');
      const lastText = lastReview ? new Date(parseInt(lastReview)).toLocaleDateString('zh-CN') : '从未';
      stats.innerHTML = `<div style="background:var(--bg);border-radius:10px;padding:10px 14px;font-size:13px;color:var(--text-secondary)">
        📖 共收藏 <strong style="color:var(--primary-dark)">${favs.length}</strong> 个单词 · 上次复习：<strong>${lastText}</strong>
        <button class="btn btn-secondary" id="startFavReview" style="margin-left:10px;padding:6px 12px;font-size:12px">🎯 开始复习</button>
        <button class="btn btn-ghost" id="clearFavs" style="margin-left:6px;padding:6px 12px;font-size:12px">🗑️ 清空</button>
      </div>`;
      const startBtn = document.getElementById('startFavReview');
      if (startBtn) startBtn.addEventListener('click', () => {
        localStorage.setItem('cc_fav_review_time', Date.now().toString());
        showToast('复习模式：点击卡片翻面，点击🔊朗读');
      });
      const clearBtn = document.getElementById('clearFavs');
      if (clearBtn) clearBtn.addEventListener('click', () => {
        if (confirm('确定要清空所有收藏的单词吗？')) {
          localStorage.setItem('cc_word_favorites', '[]');
          renderFavorites();
          showToast('已清空收藏');
        }
      });
    }
    
    if (grid) {
      grid.innerHTML = favs.map(w => `
        <div class="wcard" data-revealed="true" data-en="${encodeURIComponent(w.en)}" data-ph="${encodeURIComponent(w.ph)}" data-cn="${encodeURIComponent(w.cn)}">
          <div class="wcard-en">${w.en}</div>
          <div class="wcard-ph">${w.ph || ''}</div>
          <div class="wcard-cn-wrap">
            <div class="wcard-cn">${w.cn}</div>
            <div class="wcard-cn-cover">点击查看释义</div>
          </div>
          <button class="speak-btn" data-spe="${encodeURIComponent(w.en)}">🔊</button>
          <div class="wcard-actions">
            <button class="wcard-action-btn fav-btn favorited" data-fav-en="${encodeURIComponent(w.en)}" data-fav-ph="${encodeURIComponent(w.ph)}" data-fav-cn="${encodeURIComponent(w.cn)}">★ 取消收藏</button>
          </div>
        </div>
      `).join('');
      
      grid.querySelectorAll('.wcard').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.speak-btn') || e.target.closest('.wcard-action-btn') || e.target.closest('.wcard-example')) return;
          card.dataset.revealed = card.dataset.revealed === 'true' ? 'false' : 'true';
        });
      });
      
      // 取消收藏按钮
      grid.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const en = decodeURIComponent(btn.dataset.favEn);
          const ph = decodeURIComponent(btn.dataset.favPh);
          const cn = decodeURIComponent(btn.dataset.favCn);
          toggleFavorite(en, ph, cn);
          renderFavorites();
          showToast('已取消收藏');
        });
      });
    }
  }

  function renderAll() {
    const data = ensureContent(state.currentDate);
    titleEl.textContent = fmtDateCN(state.currentDate);
    const isToday = fmtDate(state.currentDate) === fmtDate(new Date());
    modeHint.textContent = isToday ? '今日学习 · 点击「换一换」更新素材' : '历史复习模式 · 可查看当天学习内容';
    renderWords(data.words);
    renderSpeaking(data.speaking);
    renderTed(data.ted);
    renderShadowing(data.shadowing);
    renderMonologue(data.monologue || '');
    renderFavorites();
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
      // 切换到收藏库时刷新数据
      if (target === 'favorites') renderFavorites();
    });
  });

  // 各模块换一换
  document.getElementById('wordsRefresh').addEventListener('click', () => { refreshSection('words'); });
  document.getElementById('speakingRefresh').addEventListener('click', () => { refreshSection('speaking'); });
  document.getElementById('tedRefresh').addEventListener('click', () => { refreshSection('ted'); });
  document.getElementById('shadowingRefresh').addEventListener('click', () => { refreshSection('shadowing'); });
  const favRefreshBtn = document.getElementById('favRefresh');
  if (favRefreshBtn) favRefreshBtn.addEventListener('click', () => { renderFavorites(); showToast('收藏库已刷新'); });

  function refreshSection(section) {
    const k = 'cc_eng_' + fmtDate(state.currentDate);
    const data = JSON.parse(localStorage.getItem(k) || '{}');
    if (section === 'words') data.words = genWords();
    if (section === 'speaking') data.speaking = genSpeaking();
    if (section === 'ted') data.ted = genTed();
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
      if (idx >= lines.length) { stopAudio(); return; }
      const card = document.querySelectorAll('.shadow-card')[i];
      if (!card) return;
      const btns = card.querySelectorAll('.speak-btn');
      const targetBtn = btns[idx];
      const lineEn = lines[idx].en;
      playAudio(lineEn, targetBtn, engSpeed, () => {
        idx++;
        setTimeout(next, 400);
      });
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

  // 名言获取（双语显示）
  async function loadQuote() {
    const enEl = document.getElementById('engQuoteEn');
    const cnEl = document.getElementById('engQuoteCn');
    if (!enEl) return;
    enEl.textContent = '加载中...';
    cnEl.textContent = '';
    
    // 优先使用本地双语名言
    const localQuote = localBilingualQuotes[Math.floor(Math.random() * localBilingualQuotes.length)];
    
    // 尝试联网获取英文名言
    const onlineQuote = await fetchOnlineQuote();
    
    if (onlineQuote && onlineQuote.en) {
      // 联网成功：显示英文名言 + 本地对应翻译或本地名言
      enEl.textContent = `"${onlineQuote.en}"`;
      // 如果联网名言有作者，附加到中文行
      if (onlineQuote.author) {
        // 尝试用本地名言的中文（如果英文匹配），否则显示作者信息
        const matchedLocal = localBilingualQuotes.find(q => q.en === onlineQuote.en);
        cnEl.textContent = matchedLocal ? matchedLocal.cn : `— ${onlineQuote.author}`;
      } else {
        cnEl.textContent = '';
      }
    } else {
      // 离线兜底：使用本地双语名言
      enEl.textContent = `"${localQuote.en}"`;
      cnEl.textContent = `${localQuote.cn} — ${localQuote.author}`;
    }
  }
  const quoteRefreshBtn = document.getElementById('engQuoteRefresh');
  if (quoteRefreshBtn) quoteRefreshBtn.addEventListener('click', loadQuote);
  loadQuote();

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

// ===================== 今日待办（按日独立 + 感悟框 + 日历）+ 每日待办 =====================
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

// 每日待办：固定事项模板 + 每日独立完成状态
function getDailyTodos() {
  return JSON.parse(localStorage.getItem('cc_daily_todos') || '[]');
}
function saveDailyTodos(arr) {
  localStorage.setItem('cc_daily_todos', JSON.stringify(arr));
}
function getDailyDoneState(date) {
  const k = 'cc_daily_done_' + fmtDate(date);
  const arr = JSON.parse(localStorage.getItem(k) || 'null');
  const templates = getDailyTodos();
  // 对齐长度
  if (!arr || arr.length !== templates.length) {
    return new Array(templates.length).fill(false);
  }
  return arr;
}
function saveDailyDoneState(date, stateArr) {
  localStorage.setItem('cc_daily_done_' + fmtDate(date), JSON.stringify(stateArr));
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
  const dailyInput = document.getElementById('dailyTodoInput');
  const dailyAddBtn = document.getElementById('addDailyTodo');
  const dailyList = document.getElementById('dailyTodoList');
  const calEl = document.getElementById('todoCalendar');
  const historyList = document.getElementById('todoHistoryList');

  function key(d) { return 'cc_todo_' + fmtDate(d); }

  function save(arr) { localStorage.setItem(key(state.currentDate), JSON.stringify(arr)); updateHomeStats(); renderCalendar(); renderHistory(); }

  // ---- 每日待办渲染 ----
  function renderDailyList() {
    const templates = getDailyTodos();
    const doneState = getDailyDoneState(state.currentDate);
    const isToday = fmtDate(state.currentDate) === fmtDate(new Date());
    if (!templates.length) {
      dailyList.innerHTML = `<li style="text-align:center;color:var(--text-secondary);padding:20px 0;background:transparent">还没有每日待办，添加一些固定事项吧～</li>`;
      return;
    }
    dailyList.innerHTML = templates.map((t, idx) => `
      <li class="todo-item-block ${doneState[idx] ? 'done' : ''}" data-index="${idx}">
        <div class="todo-item-row">
          <input type="checkbox" class="daily-check" ${doneState[idx] ? 'checked' : ''} data-index="${idx}" ${!isToday ? 'disabled' : ''} />
          <span class="todo-item-text">${t.text}</span>
          ${isToday ? `<button class="todo-delete daily-delete" data-index="${idx}">×</button>` : ''}
        </div>
      </li>`).join('');

    dailyList.querySelectorAll('.daily-check').forEach(cb => {
      cb.addEventListener('change', () => {
        const ds = getDailyDoneState(state.currentDate);
        ds[cb.dataset.index] = cb.checked;
        saveDailyDoneState(state.currentDate, ds);
        renderDailyList();
      });
    });
    dailyList.querySelectorAll('.daily-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const templates = getDailyTodos();
        templates.splice(btn.dataset.index, 1);
        saveDailyTodos(templates);
        // 同步删除当天的完成状态
        const ds = getDailyDoneState(state.currentDate);
        ds.splice(btn.dataset.index, 1);
        saveDailyDoneState(state.currentDate, ds);
        renderDailyList();
      });
    });
  }

  function addDaily() {
    const text = dailyInput.value.trim();
    if (!text) return;
    const templates = getDailyTodos();
    templates.push({ text });
    saveDailyTodos(templates);
    dailyInput.value = '';
    renderDailyList();
  }
  dailyAddBtn.addEventListener('click', addDaily);
  dailyInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addDaily(); });

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
    modeHint.textContent = isToday ? '每日待办+今日待办，每天独立互不影响' : '历史查看模式 · 当天待办只读';
    input.disabled = !isToday;
    addBtn.disabled = !isToday;
    if (dailyInput) dailyInput.disabled = !isToday;
    if (dailyAddBtn) dailyAddBtn.disabled = !isToday;
    renderDailyList(); renderList(); renderCalendar(); renderHistory();
  }
  renderAll();
}

// ===================== 选题生成器 =====================
function initTopicGenerator() {
  const box = document.getElementById('topicBox');
  const btn = document.getElementById('generateTopic');
  const copyCard = document.getElementById('topicCopyCard');
  const copyResult = document.getElementById('topicCopyResult');
  const wordCountInput = document.getElementById('topicCopyWordCount');
  const regenerateBtn = document.getElementById('regenerateCopyBtn');
  const copyBtn = document.getElementById('copyTopicText');
  const toTaskBtn = document.getElementById('copyTopicToTask');
  let lastTopic = '';
  let lastCopy = '';

  // 文案模板库：根据选题关键词匹配模板生成文案
  const copyTemplates = [
    (t) => `你是否也想过「${t}」？其实没有想象中那么难。第一步永远是最难的，但只要开始，就已经超越了昨天的自己。一起来看看我是怎么做的吧，相信你也能找到属于自己的节奏。`,
    (t) => `今天想跟大家分享「${t}」。说实话，一开始我也觉得不太可能，但真正做下来才发现，关键不在于天赋，而在于坚持。每一步的小进步，都在悄悄改变着你。`,
    (t) => `关于「${t}」这件事，我有话说。很多人觉得这很难，但其实只要你愿意迈出第一步，后面的事情自然水到渠成。来听听我的真实经历吧，或许会给你一些启发。`,
    (t) => `最近在尝试「${t}」，结果出乎意料。以为会很难，没想到过程中发现了好多惊喜。如果你也想试试，不妨先看看我的踩坑记录，说不定能帮你少走弯路。`,
    (t) => `「${t}」——这个话题我憋了好久想分享。从下定决心到真正行动，中间纠结了很久。但回过头看，那些纠结的时间其实完全可以省掉。做就对了，别想太多。`,
    (t) => `一直想聊「${t}」这个话题。很多人问我怎么做到的，其实秘诀只有一个：别等完美时机。现在的每一天都是最好的开始，跟我一起行动起来吧！`,
    (t) => `做了「${t}」之后，我的生活真的不一样了。不是翻天覆地的变化，而是那种每天进步一点点的踏实感。分享给你，希望你也能找到这份力量。`,
    (t) => `如果你正在犹豫要不要开始「${t}」，这条内容就是给你的。我把最真实的体验、踩过的坑、收获的惊喜都记录下来了，看完你就知道该怎么做了。`,
  ];

  function generateCopy(topic, wordCount) {
    const template = copyTemplates[Math.floor(Math.random() * copyTemplates.length)];
    let text = template(topic);
    // 裁剪到目标字数
    if (text.length > wordCount + 10) {
      text = text.substring(0, wordCount);
      // 在最后一句完整的位置截断
      const lastPeriod = Math.max(text.lastIndexOf('。'), text.lastIndexOf('，'), text.lastIndexOf('！'));
      if (lastPeriod > wordCount * 0.7) text = text.substring(0, lastPeriod + 1);
    }
    return text;
  }

  btn.addEventListener('click', () => {
    lastTopic = topicPool[Math.floor(Math.random() * topicPool.length)];
    box.textContent = lastTopic;
    copyCard.style.display = '';
    const wc = parseInt(wordCountInput.value) || 80;
    lastCopy = generateCopy(lastTopic, wc);
    copyResult.textContent = lastCopy;
  });

  regenerateBtn.addEventListener('click', () => {
    if (!lastTopic) return;
    const wc = parseInt(wordCountInput.value) || 80;
    lastCopy = generateCopy(lastTopic, wc);
    copyResult.textContent = lastCopy;
  });

  copyBtn.addEventListener('click', () => {
    if (!lastCopy) return;
    navigator.clipboard.writeText(lastCopy).then(() => showToast('已复制到剪贴板')).catch(() => showToast('复制失败'));
  });

  toTaskBtn.addEventListener('click', () => {
    if (!lastTopic) return;
    addTodoToToday(lastTopic);
    showToast('已加入今日待办');
  });
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

// ===================== 数据导出/导入 =====================
function initDataBackup() {
  const exportBtn = document.getElementById('exportDataBtn');
  if (!exportBtn) return;
  
  exportBtn.addEventListener('click', () => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `创作指挥中心_备份_${fmtDate(new Date())}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('数据已导出，请妥善保存');
  });
  
  // 添加长按导入功能
  let pressTimer;
  exportBtn.addEventListener('touchstart', () => {
    pressTimer = setTimeout(() => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const data = JSON.parse(ev.target.result);
            if (!confirm('导入将覆盖所有现有数据，确定继续？')) return;
            Object.keys(data).forEach(key => localStorage.setItem(key, data[key]));
            showToast('数据导入成功，即将刷新');
            setTimeout(() => window.location.reload(), 1000);
          } catch (err) {
            showToast('文件格式错误');
          }
        };
        reader.readAsText(file);
      };
      input.click();
    }, 800);
  });
  exportBtn.addEventListener('touchend', () => clearTimeout(pressTimer));
  exportBtn.addEventListener('touchmove', () => clearTimeout(pressTimer));
  
  // 桌面端支持
  exportBtn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (ev) => {
      const file = ev.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (res) => {
        try {
          const data = JSON.parse(res.target.result);
          if (!confirm('导入将覆盖所有现有数据，确定继续？')) return;
          Object.keys(data).forEach(key => localStorage.setItem(key, data[key]));
          showToast('数据导入成功，即将刷新');
          setTimeout(() => window.location.reload(), 1000);
        } catch (err) {
          showToast('文件格式错误');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  });
}

// ===================== 音频播放器控制 =====================
function initAudioControls() {
  const playPauseBtn = document.getElementById('audioPlayPause');
  const stopBtn = document.getElementById('audioStop');
  if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
  if (stopBtn) stopBtn.addEventListener('click', stopAudio);
}
