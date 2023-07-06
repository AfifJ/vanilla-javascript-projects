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
let color = [];
(
  async () => {
    color = await simpleColor();
  }
)()


flipColor.addEventListener("click", () => {
  const colorId = Math.ceil(Math.random() * 147) - 1;
  const colorPicked = color.color[colorId]
  colorArea.style.background = colorPicked;
  colorDesc.innerHTML = `Background Color : <br> ${colorPicked}`;
});
