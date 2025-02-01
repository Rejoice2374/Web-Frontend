const inp = document.getElementById("inputText");

function calculate(x) {
  inp.value += x;
}

function clearr() {
  inp.value = "";
}

function answer() {
  try {
    inp.value = eval(inp.value);
  } catch {
    inp.value("Invalid");
  }
}

function del() {
  inp.value = inp.value.slice(0, -1);
}
