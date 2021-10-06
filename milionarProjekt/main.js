const time = document.getElementById("time");
const headline = document.getElementById("headline");
const answersButtons = document.getElementById("answers");
const startButton = document.getElementById("startButton");
const exitButton = document.getElementById("exit");
const game = document.getElementById("game");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const btn = document.getElementsByClassName("btn");
const nextButton = document.getElementById("nextButton");
const again = document.getElementById("playAgain");
let summary = document.getElementById("summary");
let seconds = 30;
let randomQuestion = 0;
let index = 0;
let rightAnswers = 0;

let x = setInterval(updateTime,1000);
function updateTime() {
    seconds--;
    time.innerHTML = seconds;
    if(seconds == 0) {
        start.classList.add("hide");
        end.classList.remove("hide");
        game.classList.add("hide");
        again.classList.remove("hide");
        nextButton.classList.remove("hide");
       summary.innerHTML = "TIME IS UP!";
       clearInterval(x);
    }
}

function reset() {
    seconds = 0;
    seconds += 30;
    x=setInterval(1000);
}

    startButton.addEventListener("click", startGame);
function startGame() {
        start.classList.add("hide");
        randomQuestion = answers.sort (() => Math.random() - .5);
        game.classList.remove("hide");
        nextButton.classList.remove("hide");
        again.classList.add("hide");
        end.classList.add("hide");
        newQuestion();
        newAnswers();
}

function newQuestion() {
    showQuestion(randomQuestion[index]);
}

function showQuestion(question) {
    headline.innerHTML = question.question;
}

exitButton.addEventListener("click", exit);
function exit() {
    game.classList.add("hide");
    start.classList.remove("hide");
    again.classList.add("hide");
    reset();
}


function newAnswers() {
    for(let a = 0; a<btn.length; a++){
        btn[a].style.background='none';
    }
        numberQuestion.innerHTML = ((index)+1)+" / 10";
        button1.innerHTML = answers[index].answers[0]; 
        button2.innerHTML = answers[index].answers[1]; 
        button3.innerHTML = answers[index].answers[2];
        button4.innerHTML = answers[index].answers[3];
        newQuestion();
       reset();
}

function calcScore(e){
    if (e.innerHTML === answers[index].correctAnswer) {
        document.getElementById(e.id).style.background = '#29a329';
        rightAnswers++;
    }
    else {
        document.getElementById(e.id).style.background = '#b30000';
    }
    setTimeout(newAnswers,500);
    index++;
    sumQuestions();
}

function sumQuestions() {
    if(index === 10) {
    summary.innerHTML = "Right answers: "+rightAnswers+" / 10";
    game.classList.add("hide");
    start.classList.add("hide");
    end.classList.remove("hide");
    again.classList.remove("hide");
    index = 0;
}
    
}


const answers = [
    {
        question: "In what place was Christmas once illegal?",
        answers: ["A: England", "B: France", "C: Brazil", "D: Russia"],
        correctAnswer:"A: England"
    },
    {
        question: "In California, it is illegal to eat oranges while doing what?",
        answers: ["A: Gardening", "B: Bathing", "C: Working on a computer", "D: Driving"],
        correctAnswer:"B: Bathing"
    },
    {
        question: "Coulrophobia means fear of what?",
        answers: ["A: Monsters", "B: Sacred things", "C: Clowns", "D: Old People"],
        correctAnswer: "C: Clowns"
    },
    {
        question: "How many dimples are there on a regular golf ball?",
        answers: ["A: 377", "B: 418", "C: 294", "D: 336"],
        correctAnswer: "D: 336"
    },
    {
        question: "Which of the following is the longest running American animated TV show?",
        answers: ["A: Simpsons", "B: Rugrats", "C: Bonanza", "D: Pokemon"],
        correctAnswer: "A: Simpsons"
    },
    {
        question: "Every year, over 8,800 people injure themselves with what tiny object?",
        answers: ["A; Spoon", "B: Toothpick", "c: Baseball bat", "D: Pencil"],
        correctAnswer: "B: Toothpick"
    },
    {
        question: "How many pounds of pressure do you need to rip off your ear?",
        answers: ["A: 17", "B: 2", "C: 7", "D: 12"],
        correctAnswer: "C: 7"
    },
    {
        question: "At what temperature are Fahrenheit and Celsius the same?",
        answers: ["A: 0", "B: 50", "C: 92", "D: -40"],
        correctAnswer: "D: -40"
    },
    {
        question: "What are the odds of being killed by space debris?",
        answers: ["A: 1 in 5 billion", "B: 1 in 10 billion", "C: 1 in a trillion", "D: 1 in 5 million"],
        correctAnswer: "A: 1 in 5 billion"
    },
    {
        question: "How much does Earth weigh?",
        answers: ["A: 26,877,000,000,000,000,000,000,000 tons", "B: 6,588,000,000,000,000,000,000,000,000 tons", "C: 10,000,000,000,000,000,000,000,000 tons", "D: 5 pounds"],
        correctAnswer: "B: 6,588,000,000,000,000,000,000,000,000 tons"
    },
    {
        question: "When glass breaks, the cracks move up to how many mph?",
        answers: ["A: 5,000", "B: 1,000", "C: 3,000", "D: 10,000"],
        correctAnswer: "C: 3,000"
    },
    {
        question: "The NY phone book had 22 Hitlers before WWII. How many did it have in 2000?",
        answers: ["A: 4", "B: 13", "C: 11", "D: 0"],
        correctAnswer: "D: 0"
    },
    {
        question: "What percentage of Japanese citizens are cremated?",
        answers: ["A: 98", "B: 75", "C: 26", "D: 11"],
        correctAnswer: "A: 98"
    },
    {
        question: "In what key do most American car-horns honk?",
        answers: ["A: C", "B: F", "C: E", "D: G"],
        correctAnswer: "B: F"
    },
    {
        question: "What is the fear of houses?",
        answers: ["A: Rhabdophobia", "B: Neophobia", "C: Oikophobia", "D: Jedeophobia"],
        correctAnswer: "C: Oikophobia"
    },
    {
        question: "In 1900 in the U.S. what were the most popular first names for boy and girl babies?",
        answers: ["A: William and Elizabeth", "B: Joseph and Catherine", "C: John and Mary", "D: George and Anne"],
        correctAnswer: "C: John and Mary"
    },
    {
        question: "When did the Liberty Bell get its name?",
        answers: ["A: When it was made, in 1701", "B: When it rang on July 4, 1776", "C: In the 19th century, when slavery was abolished", "D: 2011"],
        correctAnswer: "C: In the 19th century, when slavery was abolished"
    },
    {
        question: "Daniel Boon museum at the home where he died can best be described how??",
        answers: ["A: Log cabin in Kentucky", "B: Two-story clapboard house in Tennessee", "C: Four-story Georgian-style home in Missouri", "D: Three story brick house in Arkansas"],
        correctAnswer: "C: Four-story Georgian-style home in Missouri"
    },
    {
        question: "Which of the following items was owned by the fewest U.S. homes in 1990??",
        answers: ["A: Home Computer", "B: Compact disk player", "C: Cordless phone", "D: Dishwasher"],
        correctAnswer: "B: Compact disk player"
    },
    {
        question: "Who holds the record for the most victories in a row on the professional golf tour?",
        answers: ["A: Jack Nicklaus", "B: Arnold Palmer", "C: Byron Nelson", "D: Ben Hogan"],
        correctAnswer: "C: Byron Nelson"
    },
    {
        question: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
        answers: ["A: 18", "B: 8", "C: 38", "D: 58"],
        correctAnswer: "A: 18"
    }];

    