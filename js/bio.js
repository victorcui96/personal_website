$(document).ready(function() {



	var count= 7; //want a new message to be appear after every 7 seconds
	var counter = setInterval(timer, 1000); //runs every 1 second

	var msgs = [];
	msgs.push("I'm a computer science major who loves hackathons.");
	msgs.push("Coding is cool!");
	msgs.push("Javascript is awesome.");
	msgs.push("Javascript not working? Use JQuery!");
	msgs.push("We're up all night to get lucky.");
	msgs.push("The movement you need is on your shoulders.");
	msgs.push("In my life, I love you more.");
	msgs.push("Pointers are hard.");
	msgs.push("Go Heels!");
	msgs.push("I don't want the world, I just want your half.");
	msgs.push("All in all is all we are.");
	msgs.push("Something in the way she moves...");
	msgs.push("Computer science is embarrassed by the computer.");
	msgs.push("Don't carry the world upon your shoulders.");
	msgs.push("Any time you feel the pain, hey Jude, refrain.");
	msgs.push("All you need is love.");
	msgs.push("Living is easy with eyes closed, misunderstanding all you see.");
	msgs.push("And in the end, the love you take...is equal to the love you make.");
	msgs.push("Web development is the best!");
	msgs.push("I get by with a little help from my friends.");
	msgs.push("The more I see the less I know.");
	msgs.push("There is a great woman behind every idiot.");
	msgs.push("I'm looking forwards to next semester!");
	msgs.push("Here comes the sun, it's alright.");
	msgs.push("There's nothing you can do that can't be done.");
	msgs.push("There's no one you can save that can't be saved.");
	msgs.push("Strawberry Fields Forever.");

	var temp = 0;

	function timer() {
		count--;
		if (count <= 0) {
			clearInterval(counter);
			//display a random message
			var msg = document.createElement("p");
			var idx = Math.floor(Math.random() * (msgs.length - 1));
			var msgContent = (msgs[idx]);
			$("#randomMsg").text(msgContent);
			temp++;
			count = 7;
			counter = setInterval(timer, 1000);
		}
		$("#time").text(count);
	}

	
	
	
	

	function insertAfter(newNode, referenceNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}



});
