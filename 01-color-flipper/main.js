const flipColor = document.querySelector(".color__desc--btn");
const colorArea = document.querySelector(".color__main");
const colorDesc = document.querySelector(".color__desc--color");

const simpleColor = async () => {
  try {
    const url = "./colorData.json";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    return (err);
  }
}

const pickSimpleColor = async () => {
  const color = (await simpleColor()).color;
  const colorId = Math.ceil(Math.random() * color.length) - 1;
  return color[colorId]
}

const getHex = () => {
  const eHex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
  ]
  const randomEHex = () => eHex[Math.ceil(Math.random() * eHex.length) - 1];
  const totalE = () => Math.ceil(Math.random() * 3) + 3;

  const hex = [...Array(totalE())].map(() => randomEHex()).join('').toString();
  return hex;
}

const changeBg = async () => {
  getHex();
  let filename = String(document.location.pathname);
  filename = filename.substring(filename.lastIndexOf('/') + 1);

  let colorPicked = filename == 'index.html' ? await pickSimpleColor() :
    filename == 'hex.html' && '#' + getHex();

  colorArea.style.background = colorPicked;
  colorDesc.innerHTML = `Background Color : <br> ${colorPicked}`;
}
/* 
to remove the auto change backgroud,
just delete all interval and autochange
*/
let autoChange;
flipColor.addEventListener("click", () => {
  changeBg();
  clearInterval(autoChange);
});
window.addEventListener("load", () => {
  autoChange = setInterval(changeBg, 3000);
});
