function anotherAddEventListener (typeOfEvent , callback) {
    // waiting for an event

var eventThatHappened = {
	eventType: "keypress",
	key: "p",
	durationOfKeypress: 2
}

if (eventThatHappened.eventType === typeOfEvent) {
	callback(eventThatHappened);
}

}

//call function

anotherAddEventListener("keypress" , function(e) {
console.log(e); }
);

//call debugger; to understand more
debugger;
anotherAddEventListener("keypress" , function(e) {
console.log(e); }
);
