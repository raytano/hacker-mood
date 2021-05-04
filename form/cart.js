/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects

var objPeople = [
	
	{ // Object @ 1 index
		username: "raytano",
		password: ""
	},

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            alert("welcome " + username)
            window.location.replace("../cart/index.html")

			

			// stop the function if this is found to be tru
				 
				
				
			return
			
		}
	}
}
