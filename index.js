var buttons = document.querySelectorAll('button');
var musics = {w:"crash",a:"kick-bass",s:"snare",d:"tom-1",j:"tom-2",k:"tom-3",l:"tom-4"};
for (var i = 0; i < 7; i++ ){
  var button = buttons[i];
  button.addEventListener("click", function(){clickHandler(musics[this.innerHTML])});
};
//this 用于识别出发事件的元素！！！innerHTML后面没有括号！！！字典的key不是string！！！

  function clickHandler(a){
    var music = new Audio("sounds/" + a + ".mp3");
    music.play();
  };
