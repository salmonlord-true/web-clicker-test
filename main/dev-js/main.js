let clicks = 0;
let power = 1;
let powercost = 50;
let currentNotation = 1;
function increment() {
	clicks += power;
	document.getElementById("skibiditext").innerHTML = `You have ${normFormat(clicks, 3, currentNotation)} skibidis.`;
}
function buypower() {
	if (clicks >= powercost) {
		clicks -= powercost;
		powercost += (50 + power);
		power += 1;
		document.getElementById("skibiditext").innerHTML = `You have ${normFormat(clicks, 3, currentNotation)} skibidis.`;
		document.getElementById("powerText").innerHTML = `Current skibidi power:`;
		document.getElementById("power").innerHTML = `${normFormat(power, 3, currentNotation)}<br>`;
		document.getElementById("powerCostText").innerHTML = `Current cost:`;
		document.getElementById("powerCost").innerHTML = `${normFormat(powercost, 3, currentNotation)}`;
	}
}