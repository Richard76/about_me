'use strict';

    /*
    These are the questions I will ask
    Are You Male?
    Are You Over 18?
    Did you register to vote?
    Did you vote?
    Did you vote to have the queen of England be the president of the US?
    */

//GLOBAL VARIABLE DECLARATION.
var myFavoriteNumber = 25;
var guessAttempt = 0;
var correctAnswers = 0;

//ASK QUESTIONS / INVOKE QUESTION FUNCTIONS
isMale();
over18();
registered();
didYouVote();
voteQueen();
numberGuess();
statehood();
//note: yourName() also includes the vote calculater as well. must go last.
yourName();


/**********************************
***  FUNCTION DEFINITIONS *********
***********************************/
function isMale() {
  var q1Male = prompt('Are you male?');
  console.log('User responded to the male Q with: ' + q1Male );

  if (q1Male.toLowerCase() === 'yes' ||
    q1Male.toLowerCase() === 'y') {
    alert('Sweet, me too!');
  } else if (q1Male.toLowerCase() === 'no' ||
  q1Male.toLowerCase() === 'n') {
    alert('OK, you must be a woman then');
  } else {
    alert('Oh, OK then.');
  }

//end of isMale function
}

function over18() {
  var q2Over18 = prompt('Are you Over 18?');
  console.log('User responded to the Over 18 question with: ' + q2Over18 );

  if (q2Over18.toLowerCase() === 'yes' ||
    q2Over18.toLowerCase() === 'y') {
    alert('Good, me too! We can both vote');
  } else if (q2Over18.toLowerCase() === 'no' ||
  q2Over18.toLowerCase() === 'n') {
    alert('Good. You can not Vote');
  } else {
    alert('I do not understand your answer');
  }

//end of over18 function.
}

function registered() {
  var q3RegisterVote = prompt('Did you register to vote?');
  console.log('User responded to the register to vote question with: ' + q3RegisterVote );

  if (q3RegisterVote.toLowerCase() === 'yes' ||
    q3RegisterVote.toLowerCase() === 'y') {
    alert('That makes both of us');
  } else if (q3RegisterVote.toLowerCase() === 'no' ||
  q3RegisterVote.toLowerCase() === 'n') {
    alert('You should have');
  } else {
    alert('I do not understand your answer here. say yes or no next time I ask you a question');
  }

//end of registered function
};

function didYouVote() {
  var q4DidVote = prompt('Did you vote?');
  console.log('User responded to the did you vote question with: ' + q4DidVote );

  if (q4DidVote.toLowerCase() === 'yes' ||
    q4DidVote.toLowerCase() === 'y') {
    alert('Sweet, me too!');
  } else if (q4DidVote.toLowerCase() === 'no' ||
  q4DidVote.toLowerCase() === 'n') {
    alert('You should have');
  } else {
    alert('You are not very good at answering yes no questions.');
  }

//end of didYouVote function.
};

function voteQueen() {
  var q5VoteQueen = prompt('Did you vote for the queen to be president of the US?');
  console.log('User responded to did you vote for the queen question with: ' + q5VoteQueen );

  if (q5VoteQueen.toLowerCase() === 'yes' ||
    q5VoteQueen.toLowerCase() === 'y') {
    alert('I agree. She is a great ruler. Beats the pope almost any day.');
  } else if (q5VoteQueen.toLowerCase() === 'no' ||
  q5VoteQueen.toLowerCase() === 'n') {
    alert('You should have. She rules.');
  } else {
    alert('You really are bad at answering yes no questions. Next time vote for the queen. she rocks.');
  }

//end of fucntion did you vote for the queen, mate?
}

//Start question 6 - guess a number.

function numberGuess() {
for (var i = 1; i < 5; i++) {


  var q6GuessNumber = prompt('My Favorite Number is Between 1 and 50 inclusive. Please try guessing it by entering it into the text box here.');
  console.log('User responded to the guess number Q with: ' );

  q6GuessNumber = parseInt(q6GuessNumber);



//1. Check to make sure its a number
  if ( isNaN(q6GuessNumber)) {
    alert ('you did not enter a number!');
  } else {
    console.log('well at least they entered a number for the enter a number question');
  }


//2. Check to make sure the number is between 1 & 50 inclusive
  if ( q6GuessNumber > 50) {
    alert ('The number you guessed is over 50. This wont work');
  } else {
    console.log('well at least they entered a number thats less than 50');
  }

  if ( q6GuessNumber < 1) {
    alert ('The number you guessed is less than 1. This wont work');
  } else {
    console.log('well at least they entered a number thats greater than 0');
  }

//3. check to see if the number is high, low, or correct & tell to guess lower or higher.

  if ( q6GuessNumber === myFavoriteNumber ) {
    alert ('Good Job. You guessed it. Its 25');
    i = 4;
    correctAnswers++;
    alert('thats ' + correctAnswers + ' correct answers so far.');
  } else if (q6GuessNumber > myFavoriteNumber) {
    alert('You guessed high. Next guess go lower.');
  } else {
    alert('You guessed low. Next guess go higher.');
  }

  guessAttempt = guessAttempt + 1;
  console.log('thats guess attempt number: ' + guessAttempt);

}

// end of question 6 numberGuess() function
// please note that there are global variables referenced here.
}


// Start question 7 - Guess a state I have lived in besides Oregon
function statehood() {
  var statesLived = ['fl', 'co', 'ma'];
  var stateGuessRight = false;

  /*
  //Check to make sure they only entered 2 characters
  if (q7GuessState.length === 2) {
    console.log('Good. They entered 2 characters only');
  } else {
    alert ('Just enter two letters next time. please no more or less than 2');
  }*/


  // calculate how many states I have lived in
  var noOfStates = statesLived.length;
  console.log('states lived is: ' + noOfStates);




  //compare what they entered to the states I have actually lived in
  var count = 0;
  while (stateGuessRight === false && count < 5) {

    var q7GuessState = prompt('Guess a state I have lived in by entering the two letter symbol for the state i.e. OR for Oregon');
    q7GuessState = q7GuessState.toLowerCase();
    console.log('User responded to the guess state Q with: ' + q7GuessState );


    for (var j = 0; j < noOfStates; j++) {

      if (q7GuessState === statesLived[j]) {
        //alert('Good job. Lucky Guess');
        correctAnswers++;
        j = noOfStates;
        stateGuessRight = true;

      } else {
        stateGuessRight = false;
        //alert('Sorry, guess again');
      }
    }
    count++;
  }


  if (stateGuessRight) {
    alert('Good job, you guessed right');
    alert('The full list of states are fl, co, ma');
  }
//end of statehood function
}

//ask for username function
function yourName() {
  var userName = prompt('What is your name?');
  console.log('User responded to the user name question with: ' );

  alert('thats ' + correctAnswers + '/2 correct answers! Good Job, ' + userName);

//end of yourName Function.
}
