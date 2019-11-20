const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

console.log(image);

// image.src = "https://www.thethirdpole.net/wp-content/uploads/sites/3/2019/05/Indian-Pangolin-Ansar-Khan-Life-Line-for-Nature-Society-1020x680.jpg"

button.addEventListener("click", () => {
    image.src = input.value;
});

console.log(image);