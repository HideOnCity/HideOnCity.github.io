window.alert = function () {
}
window.confirm = function () {
}
window.onload = function () {
    var input = document.querySelector('input')
    document.title = '牛子精灵特约节目'
    input.value = '牛 子 精 灵 邀 您 观 看';
    input.removeAttribute('onclick');

    function show() {
        var tips = document.createElement('div')
        tips.style.cssText = 'color: #FF0000; position: absolute; top: 30%; left: 20%; z-index: 99; width: 60%; text-align: center;'
        tips.innerHTML = '<h1>兄弟们要按时导管哦不要忘了这门手艺</h1>';
        document.body.append(tips);
        setTimeout(function () {
            tips.remove();
        }, 3000);
    }

    input.onclick = show;
    show();
}
