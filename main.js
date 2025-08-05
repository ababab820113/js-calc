
//BMI******************************************

//把計算的function呼叫出來的function

function bcalcBmi() {     //為了跟按鈕綁在一起的function
	let vhh = document.getElementById('thh').value; //把物件(id))抓出來,id不能重複
	let vww = document.getElementById('tww').value;
	let bmi = calcBmi(vww,vhh);
	document.getElementById('rBmi').textContent = `BMI值為: ${bmi}`;
}

//只負責計算的function

function calcBmi(w, h) {
	let BMI = w / (h ** 2);
	return BMI.toFixed(1);
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




