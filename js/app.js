// Create quiz object
var quiz = [
{
  "question": "What is the U.S. Dollar to Japanese Yen Exchange Rate?",
  "base": "Yen",
  "answers": [50, 100, 150, 200],
  "correct": 1
}, {
  "question": "What is the U.S. Dollar to South African Rand Exchange Rate?",
  "base": "Rand",
  "answers": [8, 11, 15, 20],
  "correct": 1
},
{
  "question": "What is the U.S. Dollar to Brazilan Real Exchange Rate?",
  "base": "Reals",
  "answers": [1, 3, 10, 20],
  "correct": 1
}, {
  "question": "What is the U.S. Dollar to Canadian Dollar Exchange Rate?",
  "base": "Canadian Dollars",
  "answers": [1, 2, 3, 4],
  "correct": 0
},
{
  "question": "What is the U.S. Dollar to British Pound Rate?",
  "base": "Pounds",
  "answers": [.65, .20, .5, 1],
  "correct": 0
}, {
  "question": "What is the U.S. Dollar to European Euro Rate?",
  "base": "Euros",
  "answers": [.9, .5, .3, 2],
  "correct": 0
}
]

// declare global variables
var score = 0;

function runQuiz(quiz) {

  // element vars
  var answersContainer = document.getElementById('answersContainer');
  var questionContainer = document.getElementById('questionContainer');
  var quizContainer = document.getElementById('quizContainer');
  var eBtnContainer = document.getElementById('btnContainer');
  var eScoreMsg = document.getElementById('scoreMsg');
  var answersList = ' ';
    
  // display question
  questionContainer.innerHTML = 
    '<h5 class="questionCount"> Q. '+ (i + 1) + '</h5>' + 
    '<h3 class="question">' + quiz[i].question + '</h3>';

  // display score message
  eScoreMsg.textContent = score + ' for ' + i; 
  
  // Get answers, store in var answersList
  for (var j = 0; j < quiz[i].answers.length; j++) {
    answersList +=
      "<div class='radio'>\
        <label>\
          <input name='answer' id='q-" + j + "'type='radio'>" +  quiz[i].answers[j] + " " + quiz[i].base + "</input>\
        </label>\
      </div>"    
  }

  // Write answers to HTML 
  answersContainer.innerHTML = answersList;   
  // Create buttons, declare button vars
  eBtnContainer.innerHTML = '<button id="submitBtn" class="btn btn-primary btn-lg btn-custom" onclick="event.preventDefault()" type="submit"> Submit Question </button>';
  eBtnContainer.innerHTML += '<button id="nextButton" class="hide btn btn-primary btn-lg btn-custom"  onclick="event.preventDefault()" type="submit"> Next Question </button>';
  
  var submitButton = document.getElementById('submitBtn');
  var nextBtn = document.getElementById('nextButton');

  // on submit button click
  submitButton.addEventListener('click', function() {

    // get user's answer 
    var answer; 
    var answers = document.getElementsByTagName('input');
    for (var k = 0; k < answers.length; k++) {
      if(answers[k].checked) {
        answer = answers[k];
        console.log(answer);
      }
    }

    // evaluate user's answer
      // if correct, increment score and post success message / else, post failure message
      if (answersContainer[quiz[i].correct].checked) {
        console.log('CORRECT');
        score ++; 
        answer.parentNode.classList.add('text-success');
      } else {
      console.log('INCORRECT');
        answer.parentNode.classList.add('text-danger');
      }

      // toggle submit / next button
      submitButton.classList.add('hide');
      nextBtn.classList.remove('hide');

  }, false);

  // On click of next question 
  nextBtn.addEventListener('click', function() {
    // increment counter
    i++;
    // check quiz length
    if (i < quiz.length) {
      // if next question, run quiz
      runQuiz(quiz);
    } else {
      
      // else
        // hide question and options containers
        questionContainer.classList.add('hide');
        // display final results container
        quizContainer.innerHTML = 
        '<div id="gameEndMsg">' + 
          '<h2 class="text-center"> Congratulations! </h2>' +
          '<h4 class="text-center"> You scored ' + score + ' out of ' + i + '!</h4>' +
          '<hr>' +
          '<iframe src="//giphy.com/embed/JgN8HmVgaA5So?html5=true" width="100%" height="271" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' +
        '</div>'

        // Setup Play Again Button
        nextBtn.textContent = 'Play Again!' 
        // On Click
        nextBtn.addEventListener('click', function() {
          // Reload page
          location.reload();
        }, false)
    }   
  });
} // end runQuiz()

// initialize quiz
runQuiz(quiz);


// Get Currencies 

// var app_id = '97869a6d5d17471b90f9ea0891c2b4ff'

// $.ajax({
//     url: 'http://openexchangerates.org/api/latest.json?app_id=' + app_id,
//     dataType: 'jsonp',
//     success: function(json) {
        
//         rates = json.rates;
//         console.log(rates)
//     }
// });


// ToDo 
  // Change answers to index #

// Show question
  // Get answer
  // Evaluate answer
// Loop to next question 