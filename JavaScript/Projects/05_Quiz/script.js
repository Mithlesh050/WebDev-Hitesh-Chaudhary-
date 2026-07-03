document.addEventListener("DOMContentLoaded" , () => {

    const quizCont = document.getElementById("quiz-container") ;
    const startBtn=document.getElementById("start-btn") ;
    const restartBtn = document.getElementById("restart-btn") ;
    const nextBtn = document.getElementById("next-btn") ;
    const questionCont = document.getElementById("question-container") ;
    const questionText = document.getElementById("question-text") ;
    const choicesList = document.getElementById("choices-list") ;
    const resultCont = document.getElementById("result-container") ;
    const scoreDisplay = document.getElementById("score") ;

    const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: ["Charles Dickens","Jane Austen","William Shakespeare", "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let questionIndex =0 ;
  let score =0 ;

  startBtn.addEventListener("click" , startQuiz) ;
  nextBtn.addEventListener("click" , () =>{
    questionIndex++ ;
    if(questionIndex<questions.length){
      showQuestion() ;
    }
    else showResult(); 
  }) ;

  restartBtn.addEventListener("click" , () =>{
    questionIndex=0 ;
    score=0 ;
    resultCont.classList.add("hidden") ;
    startQuiz() ;
  }) ;

  function startQuiz(){
    startBtn.classList.add("hidden") ;
    resultCont.classList.add("hidden") ;
    questionCont.classList.remove("hidden") ;
    showQuestion() ;
  }

  function showQuestion(){
    nextBtn.classList.add("hidden") ;
    questionText.textContent = questions[questionIndex].question ;
    choicesList.innerHTML="" ;
    questions[questionIndex].choices.forEach((choice) =>{
        let li = document.createElement("li") ;
        li.textContent = choice ;
        li.addEventListener("click" , () => selectAns(choice)) ;
        choicesList.appendChild(li) ;
    })
  }

  function selectAns(choice){
      const answer = questions[questionIndex].answer ;
      if(answer===choice){
        score++ ;
      }
      nextBtn.classList.remove("hidden") ;
  }
  
  function showResult(){
    questionCont.classList.add("hidden") ;
    resultCont.classList.remove("hidden") ;
    scoreDisplay.innerText = `${score} out of ${questions.length}` ;
  }

}) ;
