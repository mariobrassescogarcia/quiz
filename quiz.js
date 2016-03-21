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
	responses.push(question2)

}

question2()