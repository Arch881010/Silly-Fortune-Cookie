/** @format */

document
	.getElementById("fortune-cookie")
	.addEventListener("click", function () {
		//alert('Fortune cookie clicked!');
		getRandomFortune();
	});

function getRandomFortune() {
	const element = document.getElementById("fortune-cookie-text");
	element.classList.remove("show");
	element.classList.add("hide");
	const fortune_cookie = document.getElementById("fortune-cookie");

	if (fortune_cookie.disabled) {
		return;
	}

	// Disable the button while loading
	fortune_cookie.disabled = true;

	fortune_cookie.classList.remove("clickable");
	fortune_cookie.classList.add("loading");

	setTimeout(() => {
		const fortunes = [
			"A wise man once said nothing at all... because he was on mute.",
			"Your pet is planning a surprise party for you... don't forget the treats.",
			"Today is a good day to wear mismatched socks... it's a fashion statement.",
			"You will find something you lost... in the last place you look.",
			"An unexpected event will bring you joy... like finding money in your old jeans.",
			"Your fortune cookie will be empty... just like your fridge.",
			"Someone will compliment your dance moves... even if you have two left feet.",
			"You will soon be the proud owner of a new dust bunny... under your bed.",
			"A surprise gift will arrive... from the online order you forgot about.",
			"Your next meal will be delicious... if you don't burn it.",
			"You will make a new friend... with the barista at your favorite coffee shop.",
			"Your future is bright... but you might need sunglasses.",
			"You will laugh at a joke... that only you understand.",
			"Your dreams will come true... if you remember to set an alarm.",
			"You will discover a hidden talent... for procrastination.",
			"Your lucky number is... somewhere between 0 and infinity.",
			"You will soon find the remote control... in the last place you look.",
			"Your socks will never match... but that's okay.",
			"You will have a great day... if you remember to smile.",
			"Your next adventure will be... finding the TV remote.",
			"You will soon be the proud owner of... a new pair of socks.",
			"Your next meal will be... something you actually like.",
			"You will find joy in... the little things.",
			"Your next big idea will be... a really good one.",
			"You will soon discover... a new favorite snack.",
			"Your next laugh will be... the best one yet.",
			"You will find happiness in... unexpected places.",
			"Your next fortune will be... even sillier than this one.",
			"You will soon realize... that you are awesome.",
			"Your next big break will be... a coffee break.",
			"You will soon find... the answer to your question.",
			"Your next big win will be... a small victory.",
			"You will soon discover... a hidden talent for something silly.",
			"Your next big adventure will be... a trip to the fridge.",
			"You will soon find... a reason to smile.",
			"Your next big idea will be... a really silly one.",
			"You will soon realize... that you are amazing.",
			"Your next big laugh will be... the best one yet.",
			"You will soon find... joy in the little things.",
			"Your next big discovery will be... a new favorite snack.",
			"You will soon realize... that you are awesome.",
			"Your next big break will be... a coffee break.",
			"You will soon find... the answer to your question.",
			"Your next big win will be... a small victory.",
			"You will soon discover... a hidden talent for something silly.",
			"Your next big adventure will be... a trip to the fridge.",
			"You will soon find... a reason to smile.",
			"Your next big idea will be... a really silly one.",
			"You will soon realize... that you are amazing.",
			"Your next big laugh will be... the best one yet.",
			"You will soon find... joy in the little things.",
			"Your next big discovery will be... a new favorite snack."
		];

		const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

		element.innerText = randomFortune;
		element.classList.remove("hide");
		element.classList.add("show");

		fortune_cookie.classList.remove("loading");
		fortune_cookie.classList.add("clickable");
		fortune_cookie.disabled = false;
	}, 2000); // Wait for the fade-out transition to complete
}
