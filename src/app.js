let who = ["Mis perras", "Mi madre", "Mi vecina", "Mi amigo"];
let what = ["se zamparon", "tiró", "se llevó", "me robó"];
let when = [
  "ahora mismo",
  "después de irme",
  "mientras estaba de parranda",
  "en el recreo"
];

function excuseGenerator(quien, que, cuando) {
  let quienIndex = Math.floor(Math.random() * quien.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);
  return (
    quien[quienIndex] +
    " " +
    que[queIndex] +
    " " +
    "mis deberes" +
    " " +
    cuando[cuandoIndex]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
