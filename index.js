// default to black
let scheme = "000";
let newscheme = "000";

let myScheme = {};
let colormode = "";

const colorInput = document.getElementById("colorpicker");
const colorModeInput = document.getElementById("colors");
const copyEl = document.getElementById("overlay");

getScheme();

colorInput.addEventListener("input", (e) => {
  scheme = e.target.value;
  newscheme = scheme.slice(1);
  getScheme();
});

colorModeInput.addEventListener("change", (e) => {
  colormode = e.target.value;
  getScheme();
});

async function getScheme() {
  const res = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${newscheme}&mode=${colormode}`
  );
  myScheme = await res.json();
  console.log(myScheme);
  // update swatches with returned five colours
  document.getElementById("color1").style.backgroundColor =
    myScheme.colors[0].hex.value;
  document.getElementById(
    "color1"
  ).innerHTML = `<p class="label">${myScheme.colors[0].name.value}</p>`;

  document.getElementById("color2").style.backgroundColor =
    myScheme.colors[1].hex.value;
  document.getElementById(
    "color2"
  ).innerHTML = `<p class="label">${myScheme.colors[1].name.value}</p>`;

  document.getElementById("color3").style.backgroundColor =
    myScheme.colors[2].hex.value;
  document.getElementById(
    "color3"
  ).innerHTML = `<p class="label">${myScheme.colors[2].name.value}</p>`;

  document.getElementById("color4").style.backgroundColor =
    myScheme.colors[3].hex.value;
  document.getElementById(
    "color4"
  ).innerHTML = `<p class="label">${myScheme.colors[3].name.value}</p>`;
  document.getElementById("color5").style.backgroundColor =
    myScheme.colors[4].hex.value;
  document.getElementById(
    "color5"
  ).innerHTML = `<p class="label">${myScheme.colors[4].name.value}</p>`;

  // update text swatches with hex codes of five colours
  document.getElementById("colorinfo1").innerText = `
       ${myScheme.colors[0].hex.value}`;
  document.getElementById("colorinfo2").innerText = `
       ${myScheme.colors[1].hex.value}`;
  document.getElementById("colorinfo3").innerText = `
       ${myScheme.colors[2].hex.value}`;
  document.getElementById("colorinfo4").innerText = `
       ${myScheme.colors[3].hex.value}`;
  document.getElementById("colorinfo5").innerText = `
       ${myScheme.colors[4].hex.value}`;
}

document.getElementById("color1").addEventListener("click", () => {
  colorInput.value = `${myScheme.colors[0].hex.value}`;
  scheme = myScheme.colors[0].hex.value;
  getScheme();
});
document.getElementById("color2").addEventListener("click", () => {
  colorInput.value = `${myScheme.colors[1].hex.value}`;
  scheme = myScheme.colors[1].hex.value;
  newscheme = scheme.slice(1);
  getScheme();
});
document.getElementById("color3").addEventListener("click", () => {
  colorInput.value = `${myScheme.colors[2].hex.value}`;
  scheme = myScheme.colors[2].hex.value;
  newscheme = scheme.slice(1);
  getScheme();
});
document.getElementById("color4").addEventListener("click", () => {
  colorInput.value = `${myScheme.colors[3].hex.value}`;
  scheme = myScheme.colors[3].hex.value;
  newscheme = scheme.slice(1);
  getScheme();
});
document.getElementById("color5").addEventListener("click", () => {
  colorInput.value = `${myScheme.colors[4].hex.value}`;
  scheme = myScheme.colors[4].hex.value;
  newscheme = scheme.slice(1);
  getScheme();
});

document.getElementById("picker").addEventListener("submit", (e) => {
  e.preventDefault();
  getScheme();
});

document.getElementById("colorinfo1").addEventListener("click", () => {
  let color1backup = document.getElementById("colorinfo1").innerText;
  navigator.clipboard.writeText(colorinfo1.innerText);
  showCopied();
});
document.getElementById("colorinfo2").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo2.innerText);
  showCopied();
});
document.getElementById("colorinfo3").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo3.innerText);
  showCopied();
});
document.getElementById("colorinfo4").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo4.innerText);
  showCopied();
});
document.getElementById("colorinfo5").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo5.innerText);
  showCopied();
});

function showCopied() {
  copyEl.classList.remove("hidden");
  setTimeout(() => {
    copyEl.classList.add("hidden");
  }, 400);
}

const randomizeColor = () => {
  const letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }

  scheme = color;
  newscheme = scheme.slice(1);
  getScheme();
  colorInput.value = color;
};

document.getElementById("random").addEventListener("click", randomizeColor);
