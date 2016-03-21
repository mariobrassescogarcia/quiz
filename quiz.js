var user = {}
var responses = []




function question1() {
	"strict mode"
	var name = prompt("What's your name?")
	user.name = name
} 
question1()



function question2() {
	"strict mode"
	var single = prompt("Are you single?")

	if (single.toLowerCase() === "yes" ) {
		single = true
	}

	else if (single.toLowerCase() === "no" ) {
		single = false
	}

	else{
		alert("Please we just need it by saying yes or no")
		return question2()
	}
	responses.push(single)

}

question2()



function question3() {

	var team = prompt("Which of these Spanish football teams is the best: Barcelona, Atletico or Madrid?")
	team = team.toLowerCase()

	switch (team) {

			case "barcelona":
				  team = "Barcelona"
				  break;
			
				
			case "atletico":
				team = "Atletico"
				break;
			

			case "madrid":
				team = "Madrid"
				break;
			

			default:
				alert("Please choose only one of the given options")
				return question3()
			

	responses.push(team)

	}

}

question3()



function question4() {
	var age = prompt("What's your age?")
	age = parseInt(age)

	if (age < 18) {
		alert("You should be at least 18 to see the content of this website")

	}


	else
		return age

	responses.push(age)

}


question4()




















	
