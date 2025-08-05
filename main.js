function showToConsole() {
	const msg = getMsgValue();
	console.log(`Hello ${getMsgValue()}! - console log`);
}
function showToMessage() {
	showMsg(`Hello ${getMsgValue()}! - message box`);
}
function getMsgValue() {
	const tid = document.getElementById('tid').value;
	const tnm = document.getElementById('tnm').value;
	return `(${tid}) ${tnm}`;
}

let cnt = 0;
function showMsg(msg, newLine = true) {
	document.getElementById('msg').textContent += `${++cnt}: ${msg}${newLine ? '\r\n' : ''}`;
}
function clearMsg() {
	document.getElementById('msg').textContent = '';
	cnt = 0;
}

document.getElementById('bClrMsg').addEventListener('click', clearMsg);
