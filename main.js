
//BMI******************************************

//把計算的function呼叫出來的function

function bcalcBmi() {     //為了跟按鈕綁在一起的function
	let vhh = document.getElementById('thh').value; //把物件(id))抓出來,id不能重複
	let vww = document.getElementById('tww').value;
	let bmi = calcBmi(vww,vhh);
	document.getElementById('rBmi').textContent = `BMI值為: ${bmi} (${category})`;
}

//只負責計算的function

function calcBmi(w, h) {
	h = h / 100;
	let BMI = w / (h ** 2);
	return BMI.toFixed(1);
}

// BMI 分類
function getBmiCategory(bmi) {
    bmi = parseFloat(bmi);
    if (bmi <= 18.5) return "過輕";
    if (bmi <= 24) return "正常";
    if (bmi <= 27) return "過重";
    if (bmi <= 28)return "肥胖";
}


// C/F轉換******************************************

//把計算的function呼叫出來的function

function bC2F(){
let vcc = document.getElementById('tcc').value;
let vff = c2f(vcc)
document.getElementById('tff').value = vff
}

function bF2C(){
let vff = document.getElementById('tff').value;
let vcc = f2c(vff)
document.getElementById('tcc').value = vcc

}

//只負責計算的function

function c2f(c) {
	let f = c * 9 / 5 + 32;
	return f.toFixed(1);
}
function f2c(f) {
	let c = (f - 32) * 5 / 9
	return c.toFixed(1);
}




// 是否閏年******************************************
//把計算的function呼叫出來的function
function isLeapYear1(){
	let vyy = document.getElementById('tyy').value;
	let isLeap = isLeapYear2(vyy);
	let s = isLeap ? '是' : '不是' ;
	document.getElementById('rIsLeap').textContent = `${vyy}年 ${s}閏年`;
}

//只負責計算的function
function isLeapYear2(y) {
	return ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);
}
isLeapYear2(2000);
isLeapYear2(1900);
isLeapYear2(2024);
isLeapYear2(2025);


// 房貸******************************************

function bEpp(){
		let vpp = document.getElementById('tpp').value;
		let vrr = document.getElementById('trr').value;
		let vnn = document.getElementById('tnn').value;

		let epp = funEPP(vpp, vrr, vnn);

		document.getElementById('rEpp').textContent = `每月應付本利和 ${epp}元`;
}


//只負責計算的function
// 房貸還款金額式算  本息平均攤還  Equal Principal Payment
// 公式： 本金 x (((1＋月利率)^月數)×月利率) / (((1＋月利率)^月數)-1)
// 本金：p (元)   年利率：r (3% = 0.03)   月利率：rm (r / 12)   年數：ny   月數：n (ny * 12)
function funEPP(p, r, ny) {
	let rm = r / 12;
	let n = ny * 12;

	let epp = p * (((1 + rm) ** n) * rm) / ((1 + rm) ** n - 1);
	return +epp.toFixed(0);
}

//*************************************************************

let weeks= ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

function getTimeStr() {
  let now = new Date();                // 取得現在時間
  let y = now.getFullYear();          // 年
  let M = now.getMonth() + 1;         // 月（從0開始，要+1）
  let d = now.getDate();              // 日
  let h = String(now.getHours()).padStart(2, '0');    // 小時（補0）
  let m = String(now.getMinutes()).padStart(2, '0');  // 分（補0）
  let s = String(now.getSeconds()).padStart(2, '0');  // 秒（補0）
  let w = weeks[now.getDay()];        // 星期（日=0, 一=1...）
  let str = `${y}/${M}/${d} ${w} ${h}:${m}:${s}`;      // 組合成時間字串
  return str;
}

//秀出時間
function showStr(str) {
  document.getElementById('tt').textContent = str;
}

//直接執行，但有小問題:如果程式碼很大，畫面上的HYML還沒下載完畢，可能會有錯誤
//目前寫到這裡秒數只會跑一次，還沒有開始寫連續動的，要重新整理才會變秒數
//showTime(getTimeStr());


//現在要開始讓秒數動起來(把showTime(getTimeStr());包起來)

function showTimeStr() {
  showStr(getTimeStr());
}

showTimeStr();

//寫到這裡可以讓秒數連續跑
// setInterval(showTimeStr,1000);

showStr('請開始');

//一樣用function套起來
let sid = null; //讓Start做一個保護措施，重新按開始按鈕就不會有bug
function start(){
  if (sid){
    return;
  }
  sid = setInterval(showTimeStr,1000);
  showTimeStr();
}

function stop(){
  clearInterval(sid);
  sid = null 
  showStr('請開始');
}







