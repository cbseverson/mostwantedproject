function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu();
      //need to return the person name - is this correct?
    break;
    case 'no':
    var foundPerson = height(people);
    foundPerson = weight(foundPerson);
    foundPerson = age(foundPerson);
    foundPerson = occupation(foundPerson);
    foundPerson = eyeColor(foundPerson);
    return(foundPerson);
    break;
    default:
    app(people);
    break;
  }
} 

function mainMenu(person, people){

  if(!person){
    alert("Could not find that individual.");
    return app(people); 
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      var info = displayPerson(person);
      mainMenu(person, people);
      alert(info);
      return info;
      mainMenu(person, people);
    break;
    case "family":
      prompt("")
      mainMenu(person, people);
      //would need to get a new function
    break;
    case "descendants":
      //need to use recursion - just limit to by blood relatives
      // var descendants = 
      // return descendants;
      mainMenu(person, people);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function family(){
  var family = people.filter(function(tempPerson){
  if(person.id === tempPerson.currentSpouse || person.parents[0] === person.parents[0] || person.parents[1] === person.parents[1] || 
  //need to find siblings and children
  return true;
  }
}

//could try to use .filter
function ageBirthday(){
  filter(age);
  //changes the age to the birthday
}

function height(person, people){
  var userInput = prompt("Do you know height?");
    if(userInput === "yes"){
    var height = promptFor("What is the person's height in inches?", chars);
    var foundPerson = people.filter(function(person){
      if (person.height === height){
        return true;
      }
      else{
        return false;
      }
    })
    return foundPerson;
  }
  else if(userInput === "no"){
    return;
  }
  return foundPerson;
}

function weight(person, people){
  var userInput = prompt("Do you know weight?");
    if(userInput === "yes"){
    var weight = promptFor("What is the person's weight in pounds?", chars);
    var foundWeight = people.filter(function(person){
      if (person.weight === weight){
        return true;
      }
    else{
      return false;
      }
    })
    return foundPerson;
    }
    else if(userInput === "no"){
      return;
    }
    return foundPerson;
}


function age(person, people){
  var userInput = prompt("Do you know age?");
    if(userInput === "yes"){
    var age = promptFor("What is the person's age in years?", chars);
    var foundAge = people.filter(function(person){
      if (person.age === age){
        return true;
        }
      else{
        return false;
      }
    })
    return foundPerson;
    }
    elseif(userInput === "no"){
      return;
    }
    return foundPerson;
}

function occupation(person, people){
  var userInput = prompt("Do you know occupation?");
    if (userInput === "yes"){
    var occupation = promptFor("What is the person's occupation?", chars);
    var foundOccupation = people.filter(function(person){
      if (person.occupation === occupation){
        return true;
      }
    else{
      return false;
      }
    })
    return foundPerson;
    }
    elseif(userInput === "no"){
      return;
    }
    return foundPerson;
}

function eyeColor(person, people){
  var userInput = prompt("Do you know their eye color?")
    if (userInput === "yes"){
    var eyeColor = promptFor("What is the person's eye color?", chars);
    var foundEyeColor = people.filter(function(person){
      if (person.EyeColor === EyeColor){
        return true;
      }
    else{
      return false;
      }
    })
    return foundPerson;
    }
    elseif(userInput === "no"){
      return;
    }
    return foundPerson;
}

// TODO: find the person using the name they entered
function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  var personName = foundPerson[0];
  return personName;
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Height" + height + "\n";
  personInfo += "Weight" + weight + "\n";
  personInfo += "Age" + dob + "\n";
  personInfo += "Occupation" + occupation + "\n";
  personInfo += "Eye color" + eyeColor + "\n";
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true; 
}
