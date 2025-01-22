const who = ["The dog", "My granma", "His turtle", "My bird"];
const what = ["ate it", "pissed it ", "crushed it", "broken it"];
const when = [
  "before the class!",
  "right in time!",
  "when I finished it!",
  "during my lunch!",
  "while I was praying!"
];

function getRandomNumber(arr) {
  const RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
}

function getExcuse() {
  let whoindex = getWho();
  let whatindex = getWhat();
  let whenindex = getWhen();
  let Excuse = getCompleteExcuse(whoindex, whatindex, whenindex);

  document.getElementById("ExcusaCompleta").innerHTML = Excuse;
}
function getCompleteExcuse(whoindex, whatindex, whenindex) {
  return whoindex + " " + whatindex + " " + whenindex;
}

function getWhen() {
  return getRandomNumber(when);
}

function getWhat() {
  return getRandomNumber(what);
}

function getWho() {
  return getRandomNumber(who);
}

