
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
      question: "What is the H+ ion concentration in pure water?",
      answers: {
        a: "1 x 10<sup>-7</sup>m",
        b: "1 x 10<sup>+7</sup>m",
        c: "1 x 10<sup>-14</sup>m",
        d: "1 x 10<sup>14</sup>m"
      },
      correctAnswer: "a"
    },
    {
      question: "Buffers are mixtures of ",
      answers: {
        a: "Strong acid and strong base",
        b: "Strong acid and weak base",
        c: "Weak acid and their conjugate base",
        d: "Weak base and their conjugate acid"
      },
      correctAnswer: "c"
    },
    {
      question: "As the pKa of an acid increases, the acid will be ",
      answers: {
        a: "More weaker",
        b: "More stronger",
        c: "Converted to neutral solution",
        d: "Converted to basic solution"
      },
      correctAnswer: "a"
    },
    {
          question: "Normal pH of blood is ",
          answers: {
            a: "6.8",
            b: "7.0",
            c: "7.2",
            d: "7.5"
          },
          correctAnswer: "b"
        },
    {
      question: "Which of the following has least pH value? ",
      answers: {
        a: "HI",
        b: "HNO<sub>3</sub>",
        c: "HBr",
        d: "HCl"
      },
      correctAnswer: "d"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
