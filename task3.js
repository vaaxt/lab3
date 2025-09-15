var card = prompt('Какая у вас карта? SILVER, GOLD или PLATINUM');
var liter = prompt('Сколько литров бензина вы заправили?');

liter = Number(liter);

var ball = 0;

if (card === "SILVER") {
    ball = liter * 0.5;
} else if (card === "GOLD") {
    ball = liter * 0.75;
} else if (card === "PLATINUM") {
    ball = liter * 1;
}

alert("Карта " + card + ", литров " + liter + ", баллов: " + ball);















