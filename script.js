const color = document.getElementById("color");

setInterval(changeBG, 3000);

function changeBG() {
  const col1 = getRandomRGB();
  const col2 = getRandomRGB();
  const col3 = getRandomRGB();

  const colorString = `rgb(${col1}, ${col2}, ${col3})`;
  color.style.background = colorString;

  document.getElementById("color").innerHTML = colorString;
}

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}
