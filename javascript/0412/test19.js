/* test19.js(정규식 연습) */

'use strict';

function regexCheck() {
  // 정규표현식 변수를 미리 만들어 놓고 수행시켜준다
  const regex1 = /atom/gm;  // 'atom'이라는 문자열이 포함되어 있으면 'true', 없으면 'false' 반환
  const regex2 = /mbc|kbs|sbs|cjb/g; // mbc 또는 kbs 또는 sbs 또는 cjb문자열을 포함하는가?
  // or 연산자 --> 정규식에서는 | 하나만
  const regex3 = /홍길(동|순)/g; // 홍길동 또는 홍길순 문자를 포함?
  const regex4 = /[a-z]/g; //영문 소문자 포함?
  const regex5 = /[A-Z]/g; // 영문 대문자 포함?
  const regex6 = /[가-힣]/g; // 한글 포함?
  const regex7 = /[^a-z]/g; // ^: 부정을 의미, 소문자'만' 포함?
  const regex8 = /[^a-zA-Z0-9]/g; // 영문소문자, 영문대문자, 숫자만 포함?
  const regex9 = /[^a-zA-Z가-힣]/g;
  const regex10 = /[^a-zA-Zㄱ-ㅎ]/g; // ㅁㄴㅇㄹ같은 문자 포함
  const regex11 = /[^a-zA-Z0-9_-]/g; // 영문소문자, 영문대문자, 숫자, _, -만 포함

  const regex21 = /\./g;    // '.'을 포함하고 있는가?
  const regex22 = /\d/g;    // 숫자를 포함하고 있는가?
  const regex23 = /\D/g;    // 숫자만 포함하고 있는가? (대문자 = ^ 와 같은 부정의 의미)
  const regex24 = /\w/g;    // 영문자와 숫자, '_'를 포함하고 있는가?
  const regex25 = /\W/g;    // 영문자와 숫자, '_'를 제외한 것을 포함하고 있는가?
  const regex26 = /\s/g;    // 문장 안에 공백(탭포함)을 포함하고 있는가?

  let content = document.getElementById("content").value.trim();

  if(content == "") {
    alert("문자열을 입력하세요");
    return false;
  }
  // if(!content.match(regex1)) alert("본문에 atom 문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regex2)) alert("본문에 mbc/kbs/sbs/cjb 문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regex3)) alert("본문에 홍길동/홍길순 문자열을 포함하고 있지 않습니다.");
  // if(!regex4.test(content)) alert("영문소문자를 포함하고 있지 않습니다.");
  // if(!regex5.test(content)) alert("영문대문자를 포함하고 있지 않습니다.");
  // if(!regex6.test(content)) alert("한글을 포함하고 있지 않습니다.");
  // if(regex7.test(content)) alert("영문소문자가 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex8.test(content)) alert("영문,숫자가 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex9.test(content)) alert("영대소문자/한글이 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex10.test(content)) alert("영대소문자/한글이 아닌 다른 문자를 포함하고 있습니다.");
  // if(regex11.test(content)) alert("영대소문자/한글이 아닌 다른 문자를 포함하고 있습니다.");
  // if(!regex21.test(content)) alert(".을 포함하고 있지 않습니다.");
  // if(!regex22.test(content)) alert("숫자를 포함하고 있지 않습니다.");
  // if(regex23.test(content)) alert("숫자가 아닌 다른 문자를 포함하고 있습니다.");
  // if(!regex24.test(content)) alert("영문자와 숫자, '_'를 포함하고 있지 않습니다.");
  // if(regex25.test(content)) alert("영문자와 숫자, '_' 외 다른 문자를 포함하고 있습니다.");
  if(!regex26.test(content)) alert("문장 안에 공백(탭 포함)을 포함하고 있지 않습니다.");
  else {
    alert("자료가 잘 입력되었습니다. 통과~~");
    // location.href = "서버로 전송...";
    // get 방식으로 보낼때 형식
    // " .jsp?변수=값&변수=값"; --> url?변수=값&변수2=값2...
    // myform.submit(); // 현재는 get방식, post로 보내려면 html myform태그에서 method를 post로 정해야함
  }
  document.getElementById("content").focus();

}