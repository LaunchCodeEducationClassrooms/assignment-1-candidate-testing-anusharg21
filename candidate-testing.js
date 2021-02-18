const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first american woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?","True or false: 5000 meters == 5 kilometers.","(5 + 3)/2 * 10 = ?","Given the array [8,'Orbit','Trajectory',45],what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let score1 = 0;
let grade = 0;



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync');
  candidateName = input.question("enter your Name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //let score = 0;
  for (i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
   // if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase())
    if (candidateAnswers[i] == correctAnswers[i]) {
      score1++;
    }
  }
}

  function gradeQuiz(candidateAnswers) {

    // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    console.log(`Candidate Name: ${candidateName}`);
    console.log(`1) "Who was the first american woman in space?"\nyour Answer: ${candidateAnswers[0]}\ncorrect Answer: ${correctAnswers[0]}`);
    console.log(`2) "True or false: 5000 meters == 5 kilometers."\nyour Answer: ${candidateAnswers[1]}\ncorrect Answer: ${correctAnswers[1]}`);
    console.log(`3) "(5 + 3)/2 * 10 = ?"\nyour Answer: ${candidateAnswers[2]}\ncorrect Answer: ${correctAnswers[2]}`);

    console.log(`4) "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?"\nyour Answer: ${candidateAnswers[3]}\ncorrect Answer: ${correctAnswers[3]}`);

    console.log(`5) "What is the minimum crew size for the ISS?"\nyour Answer: ${candidateAnswers[4]}\ncorrect Answer: ${correctAnswers[4]}`);

    let grade1 = score1 / questions.length * 100;
    console.log(score1);
    console.log(questions.length);
    if(grade1 > 80) {
      console.log(" overall grade: " + grade1 + "%");
      console.log("status: pass");
    } else if (grade1 < 80) {
      console.log(" overall grade: " + grade1 + "%");
      console.log(">>> status: failed <<<");
    }
  }

 function runProgram() {
      askForName();
      // TODO 1.1c: Ask for candidate's name //
      console.log(`Hello ${candidateName} !`);
      askQuestion();
      gradeQuiz(this.candidateAnswers);
  }

    // Don't write any code below this line //
    // And don't change these or your program will not run as expected //
    module.exports = {
      candidateName: candidateName,
      question: question,
      correctAnswer: correctAnswer,
      candidateAnswer: candidateAnswer,
      questions: questions,
      correctAnswers: correctAnswers,
      candidateAnswers: candidateAnswers,
      gradeQuiz: gradeQuiz,
      runProgram: runProgram,
    }