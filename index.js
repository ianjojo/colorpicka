// default to black
let scheme = "000";
let newscheme = "000";

let myScheme = {};
let colormode = "";

const colorInput = document.getElementById("colorpicker");
const colorModeInput = document.getElementById("colors");

colorInput.addEventListener("change", (e) => {
  scheme = e.target.value;

  // remove the '#' symbol
  newscheme = scheme.slice(1);
});

colorModeInput.addEventListener("change", (e) => {
  colormode = e.target.value;
});

async function getScheme() {
  const res = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${newscheme}&mode=${colormode}`
  );
  myScheme = await res.json();

  // update swatches with returned five colours
  document.getElementById("color1").style.backgroundColor =
    myScheme.colors[0].hex.value;
  document.getElementById("color2").style.backgroundColor =
    myScheme.colors[1].hex.value;
  document.getElementById("color3").style.backgroundColor =
    myScheme.colors[2].hex.value;
  document.getElementById("color4").style.backgroundColor =
    myScheme.colors[3].hex.value;
  document.getElementById("color5").style.backgroundColor =
    myScheme.colors[4].hex.value;

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

document.getElementById("picker").addEventListener("submit", (e) => {
  e.preventDefault();
  getScheme();
});

document.getElementById("colorinfo1").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo1.innerText);
});
document.getElementById("colorinfo2").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo2.innerText);
});
document.getElementById("colorinfo3").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo3.innerText);
});
document.getElementById("colorinfo4").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo4.innerText);
});
document.getElementById("colorinfo5").addEventListener("click", () => {
  navigator.clipboard.writeText(colorinfo5.innerText);
});
