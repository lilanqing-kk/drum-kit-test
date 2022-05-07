var buttons = document.querySelectorAll('button');
var musics = {w:"crash",a:"kick-bass",s:"snare",d:"tom-1",j:"tom-2",k:"tom-3",l:"tom-4"};

for (var i = 0; i < 7; i++ ){
  var button = buttons[i];
  button.addEventListener("click", function(){clickHandler(musics[this.innerHTML])});
}
//this 用于识别触发事件的元素！！！innerHTML后面没有括号！！！字典的key不是string！！！

  function clickHandler(a){
    var music = new Audio("sounds/" + a + ".mp3");
    music.play();
  }
//k 是键盘事件，可以用任何字母代替；
document.addEventListener('keydown',(k)=>{
  if (musics.hasOwnProperty(k.key)){
  var music = new Audio("sounds/" + musics[k.key] + ".mp3");
  music.play();
};
})

// KeyboardEvent {isTrusted: true, key: 'f', code: 'KeyF', location: 0, ctrlKey: false, …}
// isTrusted: true
// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// charCode: 0
// code: "KeyF"
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 0
// eventPhase: 0
// isComposing: false
// key: "f"
// keyCode: 70
// location: 0
// metaKey: false
// path: (4) [body, html, document, Window]
// repeat: false
// returnValue: true
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
// srcElement: body
// target: body
// timeStamp: 794.8000000119209
// type: "keydown"
// view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// which: 70
// [[Prototype]]: KeyboardEvent
