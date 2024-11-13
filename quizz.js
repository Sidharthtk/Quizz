const container = document.getElementById("container");
const questionBox = document.getElementById("question");
const choiceBox = document.getElementById("choices");
const nxtBtn = document.getElementById("btn");
const scorecard = document.querySelector(".scorecard");
const timer = document.querySelector(".timer");



const quiz = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which river is the longest in the world?",
        choices: ["Amazon", "Mississippi", "Nile", "Yangtze"],
        answer: "Nile"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },

];

let currentQuestionIndex = 0;
let score = 0;
let timeleft =15;
let timerID = null;

//to show questions
const showQuestion = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choiceBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add("choice")
        choiceBox.appendChild(choiceDiv);


        choiceDiv.addEventListener("click", () => {
            if (choiceDiv.classList.contains("selected")) {
                choiceDiv.classList.remove("selected")
            }
            else {
                choiceDiv.classList.add("selected")
            }
        })

    }
    if (currentQuestionIndex < quiz.length) {
        startTimer();
    }


}

//check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector(".choice.selected");
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        alert("Correct Answer");
        score++;
    }

    else {
        alert("Wrong Answer")
    }
    timeleft = 15
    currentQuestionIndex++
    if (currentQuestionIndex < quiz.length) {

        showQuestion();
    }
    else {
        showScore();
        stopTimer();
        timer.style.display = "none"
    }

}


// // show score
const showScore = () => {

    scorecard.textContent = `your scored ${score} out of ${quiz.length}`;


}
//start timer
const startTimer = () => {
    clearInterval(timerID);
    timer.textContent = timeleft;

    const countDown = () => {
        timeleft--;
        timer.textContent = timeleft;
        if (timeleft === 0) {
            const confirmuser = confirm('Time up!');
            if (confirmuser) {
                timeleft = 15;
                timer.style.display = "flex";

                // showQuestion();
            }


        }
    }
    timerID = setInterval(countDown, 1000)
}
//stop timer
const stopTimer = () => {
    clearInterval(timerID)

}


showQuestion();

btn.addEventListener("click", () => {
    checkAnswer()


})




