export let winWidth = window.innerWidth;
export let winHeight = window.innerHeight;
export let bodyWidth = document.body.clientWidth;
export let bodyHeight = document.body.clientHeight;

function updateWinSize() {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
}

function updateBodySize() {
    bodyWidth = document.body.clientWidth;
    bodyHeight = document.body.clientHeight;
}
function closeWin(idParent, idSon, isParent){
    let element = document.getElementById(idSon);
    let elementParent;
    if (isParent) {
        elementParent = document.getElementById(idParent);
        if (elementParent.style.display === 'none')
            return;
    }
    else {
        if (element.style.display === 'none')
            return;
    }
    let top = element.getBoundingClientRect().top;// 当前元素上边距
    let left = element.getBoundingClientRect().left;// 当前元素左边距
    let right = element.getBoundingClientRect().right;
    let bottom = element.getBoundingClientRect().bottom;
    // 检测鼠标位置
    const e = event || window.event;
    let x = e.clientX;
    let y = e.clientY;
    if (x < left || y < top || x > right || y > bottom){
        if (isParent) {
            elementParent.style.display = 'none';
        } else{
            element.style.display = 'none'
        }
    }
}

function updateMainSize() {
    let aside = document.getElementById("aside");
    let main = document.getElementById("main");
    let loading = document.getElementById("loading");
    main.style.width = bodyWidth - Number(aside.clientWidth) + 'px';
    loading.style.width = main.style.width;
}

export function menuView(){
    let element = document.getElementById("label-check");
    let aside = document.getElementById("aside");
    let main = document.getElementById("main");
    let loading = document.getElementById("loading");
    let sideMenu = document.getElementById("sideMenu");
    if (element.checked) {
        sideMenu.className = "side-menu";
        main.style.width = bodyWidth - 200 + 'px';
        aside.style.width = 200 + "px";
    }
    else {
        sideMenu.className = "side-menu side-menu-brief";
        aside.style.width = 50 + "px";
        main.style.width = bodyWidth - 50 + 'px';
    }
    loading.style.width = main.style.width;
}
// 监听点击事件
window.addEventListener("click",function(evt) {
    closeWin("el-dialog-background", "el-dialog-lang", true)
})
// 监听窗口大小变化
window.addEventListener('resize', function (e) {
    updateWinSize();
    updateBodySize();
}, false);

// 监听鼠标移动事件
window.addEventListener("mousemove", function(e) {
    updateMainSize();
}, false);