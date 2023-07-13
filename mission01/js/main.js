


/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


const email = document.querySelector('#userEmail');
const pw = document.querySelector('#userPassword');

const btn = document.querySelector('.btn-login');





// 이메일 정규식 체크
function emailCheck(){
  
  let emailValue = email.value;

  if(!emailReg(emailValue)){
    email.classList.add('is--invalid')
  }else {
    email.classList.remove('is--invalid');
  }
}

// 이메일 input 입력시 유효성 검사 실행 이벤트
email.addEventListener('input', emailCheck);


// 비밀번호 정규식 체크
function passwordCheck(){

  let pwValue = pw.value;

  if(!pwReg(pwValue)){
    pw.classList.add('is--invalid')
  }else {
    pw.classList.remove('is--invalid');
  }
}

// 비밀번호 input 입력시 유효성 검사 실행 이벤트
pw.addEventListener('input', passwordCheck)


// 버튼 클릭시 실행
function LoginBtnClick(event){

  event.preventDefault() 

  // 유저 감추기
  const user = {
    id:'asd@naver.com',
    pw:'spdlqj123!@'
  }

  if(email.value === user.id && pw.value === user.pw){
    
    window.location.href = 'welcome.html';
  }else{
    alert('이메일 또는 비밀번호가 틀렸습니다.');
  }
}

// 로그인 버튼에 클릭 이벤트 추가
  btn.addEventListener('click', LoginBtnClick)