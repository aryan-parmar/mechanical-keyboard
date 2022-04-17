$(window).on({
  'keydown': function (e) {
    var pressedKey = $('.k' + e.keyCode);
    pressedKey.addClass('pressed');
    var audio = new Audio('/mechanical-keyboard/start.mp3');
    audio.loop = false;
    audio.play();
  },
  'keyup': function (e) {
    var pressedKey = $('.k' + e.keyCode);
    pressedKey.removeClass('pressed');
    var audio = new Audio('/mechanical-keyboard/end.mp3');
    audio.play();
  }
});
var leftColor = document.querySelector("#leftColor");
var lMidColor = document.querySelector("#lMidColor");
var rMidColor = document.querySelector("#rMidColor");
var rightColor = document.querySelector("#rightColor");
var rgb = document.querySelector("#main");
var rgb2 = document.querySelector("#addition_wrap");
leftColor.addEventListener("input", function(){
  var left = leftColor.value;
  var leftM = lMidColor.value;
  var right = rightColor.value;
  var rightM = rMidColor.value;
  var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
    for (var i = 0; i < prefixes.length; i++)
    {
        rgb.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
        rgb2.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
    }
}, false);
rightColor.addEventListener("input", function(){
  var left = leftColor.value;
  var leftM = lMidColor.value;
  var right = rightColor.value;
  var rightM = rMidColor.value;
  var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
    for (var i = 0; i < prefixes.length; i++)
    {
        rgb.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
        rgb2.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
    }
}, false);
lMidColor.addEventListener("input", function(){
  var left = leftColor.value;
  var leftM = lMidColor.value;
  var right = rightColor.value;
  var rightM = rMidColor.value;
  console.log("hehe")
  var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
    for (var i = 0; i < prefixes.length; i++)
    {
        rgb.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
        rgb2.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
    }
}, false);
rMidColor.addEventListener("input", function(){
  var left = leftColor.value;
  var leftM = lMidColor.value;
  var right = rightColor.value;
  var rightM = rMidColor.value;
  var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
    for (var i = 0; i < prefixes.length; i++)
    {
        rgb.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
        rgb2.style.background = prefixes[i] + `linear-gradient(left,${left},${leftM},${rightM}, ${right})`;
    }
}, false);