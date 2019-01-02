var hotel = {
	name: ["Angel of the Sea",  "Cloughaun", "Lehrkind Mansion", "Williamette Valley"], 
	rooms: [60, 12, 16, 20], 
	booked: [0, 0, 0, 0], 
	rating: [5, 4, 4, 5],
	checkAvailablity1: function() {
		return this.rooms[0] - this.booked[0];
	},
	checkAvailablity2: function() {
		return this.rooms[1] - this.booked[1];
	},
	checkAvailablity3: function() {
		return this.rooms[2] - this.booked[2];
	},
	checkAvailablity4: function() {
		return this.rooms[3] - this.booked[3];
	}
};

function displayStars(numStars) {
	ratingStars = "";
	var star = '\u2B50';
	var x;
	for (x = 1; x <= numStars; x++) {
		ratingStars += star;
	}
	return ratingStars;
}	

//---------- SIMULATE 10 RESERVATIONS ----------
var reservation;
var available1 = hotel.checkAvailablity1();
var available2 = hotel.checkAvailablity2();
var available3 = hotel.checkAvailablity3();
var available4 = hotel.checkAvailablity4();
for (reservation = 1; reservation <= 10; reservation++) {
	var ranNumber = Math.random();
	var bookedHotel = Math.ceil(ranNumber * 4);
	console.log(bookedHotel);
	switch (bookedHotel) {
		case 1:
			hotel.booked[0]++;
			available1--;
			break;
		case 2:
			hotel.booked[1]++;
			available2--;
			break;
		case 3:
			hotel.booked[2]++;
			available3--;
			break;
		case 4:
			hotel.booked[3]++;
			available4--;
			break;
	}
}

document.getElementById('rating1').innerHTML = "Rating: " + displayStars(hotel.rating[0]);
document.getElementById('name1').innerHTML = hotel.name[0];
document.getElementById('rooms1').innerHTML = "Total Number of Rooms: " + hotel.rooms[0];
document.getElementById('rooms1').innerHTML = "Capacity: " + hotel.rooms[0] + " rooms";
document.getElementById('booked1').innerHTML = "Booked: " + hotel.booked[0] + " rooms";
document.getElementById('available1').innerHTML = hotel.checkAvailablity1() + " rooms still available";

document.getElementById('name2').innerHTML = hotel.name[1];
document.getElementById('rating2').innerHTML = "Rating: " + displayStars(hotel.rating[1]);
document.getElementById('rooms2').innerHTML = "Total Number of Rooms: " + hotel.rooms[1];
document.getElementById('rooms2').innerHTML = "Capacity: " + hotel.rooms[1] + " rooms";
document.getElementById('booked2').innerHTML = "Booked: " + hotel.booked[1] + " rooms";
document.getElementById('available2').innerHTML = hotel.checkAvailablity2() + " rooms still available";

document.getElementById('name3').innerHTML = hotel.name[2];
document.getElementById('rating3').innerHTML = "Rating: " + displayStars(hotel.rating[2]);
document.getElementById('rooms3').innerHTML = "Total Number of Rooms: " + hotel.rooms[2];
document.getElementById('rooms3').innerHTML = "Capacity: " + hotel.rooms[2] + " rooms";
document.getElementById('booked3').innerHTML = "Booked: " + hotel.booked[2] + " rooms";
document.getElementById('available3').innerHTML = hotel.checkAvailablity3() + " rooms still available";

document.getElementById('name4').innerHTML = hotel.name[3];
document.getElementById('rating4').innerHTML = "Rating: " + displayStars(hotel.rating[3]);
document.getElementById('rooms4').innerHTML = "Total Number of Rooms: " + hotel.rooms[3];
document.getElementById('rooms4').innerHTML = "Capacity: " + hotel.rooms[3] + " rooms";
document.getElementById('booked4').innerHTML = "Booked: " + hotel.booked[3] + " rooms";
document.getElementById('available4').innerHTML = hotel.checkAvailablity4() + " rooms still available";

var string = "The length of the string that contains the fourth hotel is: " + hotel.name[3].length;
console.log(string);

document.getElementById("reservation1").onclick = function() {
	
	window.open("../subWebpage/reservation1.html");
	
}

document.getElementById("reservation2").onclick = function() {
	
	window.open("../subWebpage/reservation2.html");
	
}

document.getElementById("reservation3").onclick = function() {
	
	window.open("../subWebpage/reservation3.html");
	
}

document.getElementById("reservation4").onclick = function() {
	
	window.open("../subWebpage/reservation4.html");
	
}

//---------- DISPLAY FOOTNOTE ----------
var todayYear = new Date();
var year1 = todayYear.getFullYear();
document.getElementById('footnote').innerHTML = "Copyright &copy " + year1 + " Goldman's Bed and Breakfast's";

// CREATE THE HTML WINDOW FOR THE MESSAGE
var msg = '<div class="header"></div>';
msg += '<div id="msgNote"><right><p id="black"><a id="close" href="#"><img src="../images/x.jpg"></a></p></right>';
msg += '<img src="../images/special-offer.png" id="sale"></img>';
msg += '<hr><center>To take advantage of this offer, send an email to <a href="mailto:lonnie.goldman@gmail.com">info@goldman.com</a></center></div>';

var elNote = document.createElement('div');   	// Create new element.
elNote.setAttribute('id', 'note');    			// Add an id of 'note'.
elNote.innerHTML = msg;

// We need to attach elNote to the body of your html document 
document.body.appendChild(elNote);

// Create a function to close the note message
function dismissNote() {
	document.body.removeChild(elNote);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);

window.onscroll = function() {scrollFunction()};

function dismissWindow() {
	window.top.close();
}
var elClose = document.getElementById('return');
elClose.addEventListener('click', dismissWindow, false);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}