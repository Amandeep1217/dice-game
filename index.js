function rollAgain() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);;
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);;

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var result = "";
    if (randomNumber1 > randomNumber2)
        result = "Player 1 Wins!";
    else if (randomNumber2 > randomNumber1)
        result = "Player 2 Wins!";
    else
        result = "Draw!";

    document.querySelector("h1").textContent = result;
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldLink = document.getElementsByTagName("link").item(cssLinkIndex);

    if (oldLink.getAttribute("href") === "dark.css")
        cssFile = "light.css";

    var newLink = document.createElement("link");
    newLink.setAttribute("rel", "stylesheet");

    newLink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newLink, oldLink);
}

document.querySelector(".roll").addEventListener("click", rollAgain);
document.querySelector(".dark").addEventListener("click", function () { changeCSS("dark.css", 0); });
