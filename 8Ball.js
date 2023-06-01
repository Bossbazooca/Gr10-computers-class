var BallAnswer;

function BallClicked() {
    "use strict";
	BallAnswer = Math.floor(Math.random() * 20) + 1;
	if (BallAnswer == 1 ) {
		document.getElementById("Anwser").innerHTML = "It is certain" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 2 ) {
		document.getElementById("Anwser").innerHTML = "It is decidedly so" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 3 ) {
		document.getElementById("Anwser").innerHTML = "Without a doubt" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 4 ) {
		document.getElementById("Anwser").innerHTML = " Yes definitely" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 5 ) {
		document.getElementById("Anwser").innerHTML = "You may rely on it" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 6 ) {
		document.getElementById("Anwser").innerHTML = "As I see it, yes" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 7 ) {
		document.getElementById("Anwser").innerHTML = "Most likely" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 8 ) {
		document.getElementById("Anwser").innerHTML = "Outlook good" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 9 ) {
		document.getElementById("Anwser").innerHTML = "Yes" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 10 ) {
		document.getElementById("Anwser").innerHTML = "Signs point to yes" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 11 ) {
		document.getElementById("Anwser").innerHTML = "Reply hazy, try again" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 12 ) {
		document.getElementById("Anwser").innerHTML = "Ask again later" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 13 ) {
		document.getElementById("Anwser").innerHTML = "Better not tell you now" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 14 ) {
		document.getElementById("Anwser").innerHTML = "Cannot predict now" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 15 ) {
		document.getElementById("Anwser").innerHTML = "Concentrate and ask again" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 16 ) {
		document.getElementById("Anwser").innerHTML = "Don't count on it" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 17 ) {
		document.getElementById("Anwser").innerHTML = "My reply is no" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 18 ) {
		document.getElementById("Anwser").innerHTML = "My sources say no" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 19 ) {
		document.getElementById("Anwser").innerHTML = "Outlook not so good" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	if (BallAnswer == 20 ) {
		document.getElementById("Anwser").innerHTML = "Very doubtful" ;
		document.getElementById('anwser-container').style.display = "flex"
	}
	
	setTimeout(()=> {
		document.getElementById('anwser-container').style.display = "none"
	}
    ,6000);
	
	
	
}