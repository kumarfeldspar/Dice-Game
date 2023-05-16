var r1 = Math.floor(Math.random() * 6) + 1;
var nwimg1 = "images/dice" + r1 + ".png";
var r2 = Math.floor(Math.random() * 6) + 1;
var nwimg2 = "images/dice" + r2 + ".png";
document.querySelector(".img1").setAttribute("src", nwimg1);
document.querySelector(".img2").setAttribute("src", nwimg2);
if (r1 > r2) {
    document.querySelector("h1").textContent = "👍 Player 1 won";
}
else if (r1 < r2) {
    document.querySelector("h1").textContent = "Player 2 won 👍";
}
else {
    document.querySelector("h1").textContent = " Draw! Try Again!";
}