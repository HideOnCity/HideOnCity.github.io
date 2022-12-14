window.alert = function() {}
window.confirm = function() {}
window.onload = function() {
	var input = document.querySelector('input')
	input.value = '牛 子 精 灵 邀 您 观 看';
	input.removeAttribute('onclick');
	input.onclick = function(){
		alert('兄弟们要按时导管哦不要忘了这门手艺')
	}
}
