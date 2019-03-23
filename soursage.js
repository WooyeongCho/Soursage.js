class Soursage {
  /* type 값 = rep 또는 wordrep*/
  constructor(jsonVarName) {
    this.jsonVarName = jsonVarName
  }
  color(object, type) {

    var data = JSON.parse(this.jsonVarName)

    var objectSplit = object.innerHTML.split(" ")
    var result = [];

    var keys = []; // data의 모든 key[]
    for(var k in data) keys.push(k);

    if(type == "wordrep")
      objectSplit.forEach(function(element) {
        if(data.hasOwnProperty(element)) {
          result.push(`<span style="color: ${data[element]}">${element}</span> `)
        } else {
          result.push(element + " ")
        }

      var joined = result.join("")
      object.innerHTML = joined
    })
    else if(type == "rep") {
      keys.forEach(function(element) {
        var re = new RegExp(element, "gi");
        console.log("This is " + re)
        console.log(object.innerHTML.replace(re, `<span style="color: ${data[element]}">${element}</span>`))
        object.innerHTML = object.innerHTML.replace(re, `<span style="color: ${data[element]}">${element}</span>`)
      })
    }
    else {
      console.error("type 매개변수 입력 값이 잘못되었습니다. type에는 String 형식으로 rep 또는 wordrep을 입력해야 합니다. (현재 입력된 type 매개변수 값: " + type + ")");
      return
    }
  }
}
