const who = ["The dog", "My granma", "His turtle", "My bird"];
const what = ["eat", "pissed", "crushed", "broked"];
const when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomNumber(arr) {
  const RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
}

function getExcuse() {
  let whoindex = getRandomNumber(who);
  let whatindex = getRandomNumber(what);
  let whenindex = getRandomNumber(when);
  let Excuse = whoindex + " " + whatindex + " " + whenindex;

  document.getElementById("ExcusaCompleta").innerHTML = Excuse;
}
