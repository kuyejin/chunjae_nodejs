
var a =20; // 재선언 o , 변수 값 변경 o
var a = 40; // 재선언 함
a = 35; // 변수 값 변경 함


let b = 20;  // 재선언x , 변수 값 변경 o
const c = 20; // 재선언x , 변수 값 변경 x



console.log("헬로우 노드JS");
console.log("var a : " + a + ", let b" + b + ", const : " + c);

//백틱(backtick ='')으로 감싼 문장 => 템플릿(template)
console.log(`var a : ${a}, let b : ${b}, const c : ${c}`)
