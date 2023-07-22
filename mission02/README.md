# Mission - 02

### 엘리멘탈 포스터 슬라이드

![slideResult](https://github.com/BBIIN/HomeWork/assets/107901091/16a37cc7-bb72-4060-9b41-42ee0e19bdf0)


### 배경색 지정
```javascript
function setBgColor(index){
  const body = getNode('body');

  let colorA = data[index - 1].color[0];
  let colorB = data[index - 1].color[1];

if(!data)
  css(body, 'background', `linear-gradient(to bottom, ${colorA},${colorB})`)

}

```
  - colorA,colorB를 data.js에 있는 배열에서 값을 가져와 해당 배경 색상을 지정하였습니다.

```js
function handlerImg(index) {
  const CenterImg = getNode('img');

  attr(CenterImg, 'src' , `./assets/${data[index - 1].name}.jpeg`);
  attr(CenterImg, 'alt', data[index -1].alt);
}

```
 - 유틸함수 getNode를 통해 img태그를 불러오고 클릭된 이미지 이름과 alt를 찾아내 받아와 해당 이미지 주소와 alt를 변경해 보여주었습니다.

### 대체 텍스트 변경
```js
function setName(index){
  const name = getNode('.nickName');

  name.textContent = data[index -1].name;
}

```
- 유틸함수 getNode를 통해 nickName 클래스를 가진 아이템을 불러와 data 배열에서 해당 index에 속하는 name을 불러와 텍스트를 수정해주었습니다.

### 이미지 아이템 효과, 슬라이드 작동
```js

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

```
  - closest을 사용해 li 요소로 범위를 줄였습니다.
  - 유틸함수 attr를 통해 target의 data-index 속성을 가져왔습니다.
  - forEach를 통해 is-active 클래스를 부여해 클릭하는 item에 border를 부여하였고 다른 item에는 클래스를 제거하였습니다.

