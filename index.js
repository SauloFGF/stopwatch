loadEventListeners();

function loadEventListeners() {
	document.addEventListener('DOMContentLoaded', function() { calcTime(); });
};

var timeTo = document.getElementById('time-to').value,
		date,
		now = new Date(),
		newYear = new Date('1.1.2020').getTime(),
		startTimer = '';

function calcTime(dates) {
	clearInterval(startTimer);

	if(typeof(dates) == 'undefined'){
		date = new Date(newYear).getTime();
	}else {
		date = new Date(dates).getTime();
	}

	function updateTimer(date){

		var now = new Date().getTime();
		var distance = date - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.querySelector('.clock-days').innerHTML = days;
		document.querySelector('.clock-hours').innerHTML = hours;
		document.querySelector('.clock-minutes').innerHTML = minutes;
		document.querySelector('.clock-seconds').innerHTML = seconds;

		if(now >= date){
			clearInterval(startTimer);
			document.querySelector('.clock-days').innerHTML = '00';
			document.querySelector('.clock-hours').innerHTML = '00';
			document.querySelector('.clock-minutes').innerHTML = '00';
			document.querySelector('.clock-seconds').innerHTML = '00';
		}
	}

	startTimer = setInterval(function() { updateTimer(date); }, 1000);

}

