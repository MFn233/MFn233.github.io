$.backstretch([
    'https://s3.bmp.ovh/imgs/2022/07/17/380a2adb51d67de1.jpg',
    'https://img1.imgtp.com/2022/07/18/tdM4vLqs.jpg',
    'https://s3.bmp.ovh/imgs/2022/07/11/07761d8934946c28.jpg',
    'https://s3.bmp.ovh/imgs/2022/07/18/35dee00083c7e0e1.jpg',
], {
    fade: 1200, // 动画时长
    duration: 2500 // 切换延时
});
document.addEventListener('visibilitychange', function () {
    var isHidden = document.hidden;
    if (isHidden) {
        document.title = "MFn|不要走嘛(*´д`*)";
    } else {
        setTimeout(() => {
            document.title = "MFn|好耶,回来了(づ￣3￣)づ╭❤～";
        }, 1000);
        setTimeout(() => {
            document.title = "MFn|Welcome!";
        }, 2200);
    }
});

//hitokoto
fetch('https://v1.hitokoto.cn')
.then(response => response.json())
.then(data => {
    const hitokoto = document.getElementById('hitokoto_text')
    hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
    hitokoto.innerText = "“" + data.hitokoto + "”"
})
.catch(console.error)

function time() {
    var date = new Date();
    var hours = date.getHours();
    var day = date.getDay();
    var str = "";
    if (hours >= 0 && hours <= 10)
        str += "早上好";
    else if (hours > 10 && hours <= 14)
        str += "中午好";
    else if (hours > 14 && hours <= 18)
        str += "下午好";
    else if (hours > 18 && hours <= 24)
        str += "晚上好";
    str += " ~ 今天是";
    switch (day) {
        case 0:
            str += "星期天，明天又是周一啦TAT";break;
        case 1:
            str += "星期一";break;
        case 2:
            str += "星期二";break;
        case 3:
            str += "星期三";break;
        case 4:
            str += "星期四";break;
        case 5:
            str += "星期五，明天是周末! qwq";break;
        case 6:
            str += "星期六";break;
    }
    var time = document.getElementById("time");
    time.innerHTML = str;//put the text in the element
}
setInterval(time, 500);//refresh(maybe too fast)
function console_welcome() {
    console.log("__  _________     ___  __________\n/  |/  / ____/___ |__ \\|__  /__  /\n/ /|_/ / /_  / __ \\__/ / /_ < /_ < \n/ /  / / __/ / / / / __/___/ /__/ / \n/_/  /_/_/   /_/ /_/____/____/____/  \n                                  ");
    console.log("💡Hello!\n✅Here is the Website of MFn!\n🌏Welcome to ask me to add your own website in 'Friendly Links'!\n🔵Use the latest Chromium kernel browser for the best experience!");
}