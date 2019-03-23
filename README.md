# Soursage.js
![rep](https://drive.google.com/uc?export=download&id=1xzXfsAatuFO_UITgFP27pKvdFCbMmod5 "rep")
위와 같이 특정 단어만 색상을 적용시킵니다.

예제 웹페이지 : <https://wooyeongcho.github.io/Soursage.js/docs/index.html>

## 사용하기
Soursage.js를 사용하기 위해선 **html(필수)**, **json(필수)**, **js(선택** => html 파일 내 script 태그로 대체) 파일이 필요합니다.

html 파일은 아래와 같이 작성합니다. (js 코드는 html > body > script에 포함되어 있습니다)
>index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="example.json"></script> <!-- 색상 파일 -->
    <script src="https://wooyeongcho.github.io/Soursage.js/soursage.js" charset="utf-8"></script> <!-- Soursage.js를 불러옵니다. -->
    <title></title>
  </head>
  <body>
    <h1 id="s0">Blue loves Red.. Red likes Blue!!</h1> <!-- 원본 텍스트 -->
    <h1 id="s1">Blue loves Red.. Red likes Blue!!</h1> <!-- rep -->
    <h1 id="s2">Blue loves Red.. Red likes Blue!!</h1> <!-- wordrep -->

    <script type="text/javascript">
      var soursage = new Soursage(exampleColors); // Soursage 오브젝트를 생성합니다.

      soursage.color(document.getElementById("s1"), "innerHTML", "rep"); // s1 엘리먼트에 특정 단어마다 example.json에서 가져온 색을 입힙니다. rep 방식.

      soursage.color(document.getElementById("s2"), "innerHTML", "wordrep"); // s1 엘리먼트에 특정 단어마다 example.json에서 가져온 색을 입힙니다. wordrep 방식.
    </script>
  </body>
</html>
```

json 파일은 아래와 같이 작성합니다.
>example.json
```json
exampleColors = '{"Red" : "#ff0000", "Blue": "#0000ff", "loves": "#ff9400", "likes": "#ff9400"}'
```

## 응용 방법
### HTML
html은 별반 다를 것 없습니다. 단, id로 구분을 잘해주셔야 됩니다. class로 할 경우엔 js에서 array로 구분하면 됩니다.

### JSON
```json
exampleColors = '{"Red" : "#ff0000", "Blue": "#0000ff", "loves": "#ff9400", "likes": "#ff9400"}'
```
위와 같이 json 파일에 입력하면 exampleColors 변수에 json이 선언됩니다.
key 값은 문자열, value 값은 색상을 뜻합니다. (css에서 지원하는 색상도 가능합니다. red, yellow 등..)

### JS
```js
var soursage = new Soursage(exampleColors); // Soursage 오브젝트를 생성합니다.
```
위와 같이 Soursage 오브젝트를 생성하고 exampleColors와 같은 매개변수는 JSON 파일에서 사용한 변수 이름을 씁니다.

#### .color 함수
```js
var soursage = new Soursage(exampleColors); // Soursage 오브젝트를 생성합니다.
soursage.color(document.getElementById("s1"), "innerHTML", "rep");
```
**color 함수의 매개변수**는 **element**, **element내 문자 색상을 바꿀 영역** _예) soursage.color(document.getElementById("s1"), "innerHTML", "rep"); 라고 구문을 입력했을 경우 soursage는 document.getElementById("s1").innerHTML에 접근합니다._ 과 **type 매개변수**가 있습니다.

**type 매개변수는 "rep"과 "wordrep"가 있습니다.**

![원본](https://drive.google.com/uc?export=download&id=1haJtOmQtu80wZWPO_EYdytBKWFwy-hjj "원본")
![rep](https://drive.google.com/uc?export=download&id=1xzXfsAatuFO_UITgFP27pKvdFCbMmod5 "rep")
![word](https://drive.google.com/uc?export=download&id=19QNc7X6RAWGrFQdmE1LGkgs05zcwVGZd "wordrep")
>위 예제 사진에는 Red, Blue, likes, loves에만 색이 입혀지도록 설정해놨습니다.

rep | wordrep
------------ | -------------
문자열에서 특정 문자열만 색을 입힙니다. | 문자열에서 공백 문자(" ")로 split 시킨 후 특정 단어만 색상을 입힙니다.

위 사진처럼 "rep"은 replace의 줄임말로, 문자열에서 특정 문자열만 색을 입힙니다.
"wordrep"은 word replace의 줄임말로, 문자열에서 공백 문자(" ")로 split 시킨 후 특정 단어만 색상을 입힙니다.
