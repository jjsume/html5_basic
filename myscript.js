function run(){
    var name = document.getElementById("name").value; 
    var heyYou = "Hello, " + name + "! \n" +"How are you today, my friend?";
	window.alert(heyYou);
    return false; //To prevent it from going into next page.
}