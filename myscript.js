function run(){
	var name = document.getElementById("name").value; 
	//Check if name is given...	
	if (name == "") {
		document.getElementById("results").innerHTML = "Give me your name,please!";		

	}
	else {
		var msg = "Hello, "+name+"! How are you today, my friend?";
		document.getElementById("results").innerHTML = msg
	}
    return false; //To prevent it from going into next page.
}
