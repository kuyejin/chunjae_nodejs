// ES5의 함수 정의와 호출
var fnc1 = function(){console.log("콘솔에 출력합니다");} // 매개변수 x, 반환x
var fnc2 = function(a,b){console.log("계산결과 : " + (a+Blob));} // 매개변수 o, 반환x
var fnc3 = function(){return 27*27;} // 매개변수 x, 반환o
var fnc4 = function(a,b){return a*10+b*9;} // 매개변수 o, 반환o

//익명의 함수 : 특정 로직이나 함수(메소드) 안에 있는 이름이 없이 곧 바로 실행
var arr = [75,90,80,65];
arr.map(function(value){console.log(value*value);});
var fnc5 = arr.map(function(value){return value*value;})

fnc1();
fnc2(20,12);
console.log("결과3 : " +fnc3()); // var data3 = fnc3();
console.log("결과4 : " +fnc4(13,12)); // var data4 = fnc4(13,12);
console.log("결과5 : " +fnc5); 

