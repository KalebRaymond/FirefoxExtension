var selection = window.getSelection().toString();

window.setInterval(function(){
	selection = window.getSelection().toString();
	console.log(selection);
	if(selection.length !== 0)
	{
		document.getElementById("query").innerHTML = selection;
	} else {
		document.getElementById("query").innerHTML = "Select some text.";
	}
}, 50);