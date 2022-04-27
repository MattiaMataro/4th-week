var i = 0;

function timedCount() {
	i = i + 1;
	postMessage(i);
	setTimeout("timedCount()",500);
}

// check whether the user's browser supports it:

if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
	timedCount();
} else {
  // Sorry! No Web Worker support..
}