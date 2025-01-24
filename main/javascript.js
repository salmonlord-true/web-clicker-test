let clicks = 0;
let power = 1;
let powercost = 50;
function increment() {
	clicks += power;
	document.getElementById("skibiditext").innerHTML = `You have ${clicks} skibidis.`;
}
function buypower() {
	if (clicks >= powercost) {
		clicks -= powercost;
		powercost += (50 + power);
		power += 1;
		document.getElementById("skibiditext").innerHTML = `You have ${clicks} skibidis.`;
		document.getElementById("powerText").innerHTML = `Current skibidi power:`;
		document.getElementById("power").innerHTML = `${power}<br>`;
		document.getElementById("powerCostText").innerHTML = `Current cost:`;
		document.getElementById("powerCost").innerHTML = `${powercost}`;
	}
}