// 화살표 함수

var fnc1 = ()=> console.log("콘솔에 출력합니다"); // 매개변수 x, 반환x
var fnc2 = (a,b) => console.log("계산결과 : " + (a+b)); // 매개변수 o, 반환x
var fnc3 = ()=> 27*27; // 매개변수 x, 반환o
var fnc4 = (a,b) => a*10+b*9; // 매개변수 o, 반환o
var arr = [75,90,80,65];
var fnc5 = arr.map(value => value*value);

fnc1();
fnc2(20,12);
console.log("결과3 : " +fnc3()); // var data3 = fnc3();
console.log("결과4 : " +fnc4(13,12)); // var data4 = fnc4(13,12);
console.log("결과5 : " +fnc5); 