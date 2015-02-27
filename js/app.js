// Problems
  // I need to somehow STOP the loop after the options are written to HTML, and then continue the loop after the user's answer is evaluated
  // Is this possible? 



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

  // declare counter
  var i = 0
  var score = 0;

function runQuiz(quiz) {

  // element vars
  var answersContainer = document.getElementById('answersContainer');
  var questionContainer = document.getElementById('questionContainer');
  var quizContainer = document.getElementById('quizContainer');
  var feedback = document.getElementById('feedback');
  var scoreMsg = document.getElementById('scoreMsg');


  // takes a quiz object as parameter; now a general purpose function that can take any quiz
  
  
  
    var answersList;

    // display question
    questionContainer.innerHTML = 
      '<h5 class="questionCount"> Q. '+ (i + 1) + '</h5>' + 
      '<h3 class="question">' + quiz[i].question + '</h3>';

    // display answer options
    
    // Get answers, store in var
    for (var j = 0; j < quiz[i].answers.length; j++) {
      answersList +=
        "<div class='radio'>\
          <label>\
            <input id='q-" + j + "'type='radio' name='optionsRadios'>" +  quiz[i].answers[j] + " " + quiz[i].base + "</input>\
          </label>\
        </div>"    
    }
  
    // Write answers to HTML and Create submit and Next Question button
    answersContainer.innerHTML = answersList;    
    
    answersContainer.innerHTML += '<button id="submitBtn" onclick="event.preventDefault()" type="submit"> Submit Question </button>';
    answersContainer.innerHTML += '<button id="nextButton" class="hide"  onclick="event.preventDefault()" type="submit"> Next Question </button>';
    
    var submitButton = document.getElementById('submitBtn');
    var nextBtn = document.getElementById('nextButton');

    // on submit evaluate answer
    submitButton.addEventListener('click', function() {

      // evaluate user input
        // if correct, increment score and post success message / else, post failure message
        if (answersContainer[quiz[i].correct].checked) {
          console.log('CORRECT');
          score ++; 
        } else {
        console.log('INCORRECT');
        // feedback.className = 'alert alert-warning'; 
        // feedback.innerHTML = 'Whoops, wrong answer.';
        }

        // hide submit button, show next question
        submitButton.classList.add('hide');
        nextBtn.classList.remove('hide');

    }, false);

    // on click of next question 
    nextBtn.addEventListener('click', function() {
      // increment counter
      i++;
      // run quiz
      runQuiz(quiz);
    })

  // display final results
}

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