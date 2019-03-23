class Soursage {
  /* type 값 = rep 또는 wordrep*/
  constructor(jsonVarName) {
    this.jsonVarName = jsonVarName
  }
  
  color(object, innerObject, type) {
    var data = JSON.parse(this.jsonVarName)
    var afObj = object[innerObject] // afObj 변수는 object[innerObject]를 줄여쓰지만, 변수 값은 object[innerObject]로 선언되므로 최종적으로 innerHTML 등을 수정될 땐 이 변수 값만 바뀜. 오직 값 가져오기 용도.
    var objectSplit = afObj.split(" ")
    var result = [];

    var keys = []; // data의 모든 key[]
    for(var k in data) keys.push(k);

    if(type == "wordrep") {
      objectSplit.forEach(function(element) {
        if(data.hasOwnProperty(element)) {
          result.push(`<span style="color: ${data[element]}">${element}</span> `)
        } else {
          result.push(element + " ")
        }

      })
      var joined = result.join("")
      object[innerObject] = joined
    }
    else if(type == "rep") {
      keys.forEach(function(element) {
        var re = new RegExp(element, "gi");
        console.log("This is " + re)
        console.log(afObj.replace(re, `<span style="color: ${data[element]}">${element}</span>`))
        object[innerObject] = object[innerObject].replace(re, `<span style="color: ${data[element]}">${element}</span>`)
      })
    }
    else {
      console.error("type 매개변수 입력 값이 잘못되었습니다. type에는 String 형식으로 rep 또는 wordrep을 입력해야 합니다. (현재 입력된 type 매개변수 값: " + type + ")");
      return
    }
  }
}
