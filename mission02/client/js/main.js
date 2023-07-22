
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/




const nav = getNode('.nav')


/* 
function slider(e){
  e.preventDefault();
  const target = e.target.closest('li');
  const CenterImg = getNode('img')
  
  if(!target) return;
  
  const list = getNodes('.nav li');
  const index = attr(target, 'data-index');

  const name = getNode('.nickName')
  // const bgColor = `linear-gradient(to bottom, ${data.color[0]},${data.color[1]})`;

  // 반복문으로 모든 자식들에게 클래스 제거
  list.forEach((li) => {
    li.classList.remove('is-active');
  });

  // 선택한 타겟만 클래스 추가
  target.classList.add('is-active');

  CenterImg.setAttribute('src', `./assets/${data[index - 1].name}.jpeg`);
  CenterImg.setAttribute('alt', data[index -1].alt);
  // 이름 나오게
  name.textContent = data[index -1].name;

  // 배경
}


nav.addEventListener('click', slider) */

// 배경 변경 함수
function setBgColor(index){
  const body = getNode('body');


  let colorA = data[index - 1].color[0];
  let colorB = data[index - 1].color[1];

  css(body, 'background', `linear-gradient(to bottom, ${colorA},${colorB})`)

}

// 클릭시 이미지 변경
function handlerImg(index) {
  const CenterImg = getNode('img');

  attr(CenterImg, 'src' , `./assets/${data[index - 1].name}.jpeg`);
  attr(CenterImg, 'alt', data[index -1].alt);
}

// 이미지에 맞는 이름 변경

function setName(index){
  const name = getNode('.nickName');

  name.textContent = data[index -1].name;
}

function slideHandler(e){
  e.preventDefault();

  const target = e.target.closest('li');
  
  if(!target) return;
  
  const list = getNodes('.nav li');
  const index = attr(target, 'data-index');

  list.forEach((item) => {
    item.classList.remove('is-active');
  });
  target.classList.add('is-active');

  setBgColor(index);
  handlerImg(index);
  setName(index);
}

nav.addEventListener('click', slideHandler)