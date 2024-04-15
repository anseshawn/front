// test15.js
// 날짜함수 연습
'use strict';

let str = '';
// 오늘 날짜
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
str = "오늘 연도는 : "+ year + "<br/>";
const month = today.getMonth()+1; // 월이 0부터 시작하기 때문에 +1
str += "오늘 월은 : "+ month + "<br/>";
const date = today.getDate();
str += "오늘 일은 : "+ date + "<br/>";
const hour = today.getHours();
str += "현재 시간은 : "+ hour + "<br/>";
const minute = today.getMinutes();
str += "현재 분은 : "+ minute + "<br/>";
const second = today.getSeconds();
str += "현재 초는 : "+ second + "<br/>";
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
str += "오늘 날짜/시간 : "+ yymmdd + "<br/>";

str += "<hr/>";
// let weekStr = new Array(); // 값을 하나씩 넣어줘야 함
let weekStr = ['일','월','화','수','목','금','토'];
let weekDay = today.getDay(); // 요일 (숫자로 출력 0-6)
str += "오늘 요일 : "+ weekStr[weekDay] + "<br/>";


let lastDate = new Date(2024,4,0); 
str += "이번 달의 마지막 일자는? " + lastDate.getDate(); // 날짜 형식으로 출력 되기 때문에 일만 빼서 출력

function dateCheck() {
  let year = document.getElementById("yy").value;
  let month = document.getElementById("mm").value;
  let strDate = new Date(year,month,0);
  // str += "<br/> 입력한 날의 마지막 일자는? "+printDate.getDate();
  demo.innerHTML = `<font size='5'><b>${year}년 ${month}의 마지막 일자는? : ${strDate.getDate()} </b></font>`;
}

demo.innerHTML = "<font size='5'><b>"+str+"</b></font>";
