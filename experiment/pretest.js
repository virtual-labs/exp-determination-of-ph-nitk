
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "What is the pH of pure water at 25&deg;C? ",
      answers: {
        a: "2",
        b: "4",
        c: "7",
        d: "10"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the pH of acidic solution? ",
      answers: {
        a: "Zero",
        b: "Less than 7",
        c: "More than 7",
        d: "More than 12"
      },
      correctAnswer: "b"
    },
    {
      question: "What happens to the pH of a solution if a little acid is added to it? ",
      answers: {
        a: "pH turns into zero",
        b: "Remains the same",
        c: "Increases",
        d: "Decreases"
      },
      correctAnswer: "d"
    },
    {
        question: "Which of the following is acidic in nature? ",
        answers: {
          a: "Caustic soda",
          b: "Apple juice ",
          c: "Vinegar ",
          d: "Soap solution"
        },
        correctAnswer: "c"
      },
    {
        question: "Which of the following has high pH value? ",
    answers: {
          a: "KOH",
          b: "NaOH",
          c: "LiOH",
          d: "Ca(OH)<sub>2</sub>"
        },
        correctAnswer: "a"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
