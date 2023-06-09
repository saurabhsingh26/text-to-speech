// write your code here
document.getElementById("speakButton").addEventListener("click", function () {
  var text = document.getElementById("text").value;
  var speech = new SpeechSynthesisUtterance(text);
  console.log(speech);
  window.speechSynthesis.speak(speech);
});
