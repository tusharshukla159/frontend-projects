import React, { useState } from "react";
import './Quiz.css'
const QuizApp = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1931"],
      correctAnswer: "1912",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Ringgit", "Baht"],
      correctAnswer: "Yen",
    },
    {
      question: "Which programming language is also a gem?",
      options: ["Ruby", "Python", "Java", "C++"],
      correctAnswer: "Ruby",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));

  function handleSelect(option){
  const cpySelected=[...selectedOptions]
    cpySelected[currentQuestion]=option;
    setSelectedOptions(cpySelected)
  }
  function handleRestart(){
    setCurrentQuestion(0);
    setSelectedOptions(new Array(questions.length).fill(null))
    setScore(0);
    setShowResult(false)
  }
  return (
    <div className="Quiz-App" style={{display:'flex', flexDirection:'column', alignItems:'center',textAlign:'center', borderRadius:'20px'}}>
      <h1>Quiz App {console.log(selectedOptions)}</h1>
      <div style={{fontWeight:'bold'}}>
        { !showResult?(
      <div className="Quiz">
        
          <div>
            <p>{`Question ${currentQuestion + 1}`}</p>
            {questions[currentQuestion].question}
            <div  style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'10px'}}>
               {questions[currentQuestion].options.map((item)=>(
                <button className={`option ${selectedOptions[currentQuestion]==item?'active':''}`} style={{padding:'10px',width:'150px', borderRadius:'8px',margin:'5px',fontWeight:'bold'}} key={item} onClick={()=>handleSelect(item)}>{item}</button>
               ))}
            </div>
          </div>

          <div> 
            <button disabled={currentQuestion==0} onClick={()=>setCurrentQuestion(currentQuestion-1)}
               style={{padding:'8px',width:'100px', borderRadius:'8px',margin:'5px', backgroundColor:'Orange',fontWeight:'bold'}} 
                >Prev</button>
            <button 
            style={{padding:'8px',width:'100px', borderRadius:'8px',margin:'5px', backgroundColor:'Orange',fontWeight:'bold'}}
            onClick={()=>{
                if(selectedOptions[currentQuestion]==questions[currentQuestion].correctAnswer){setScore(score+1)
                    if(currentQuestion==questions.length-1){setShowResult(true)}
                }
                setCurrentQuestion(currentQuestion+1)}}>{currentQuestion<questions.length-1? 'Next':'Finish'}</button>
          </div>
        
      </div>

      ): <div style={{backgroundColor:'greenyellow',width:'250px',height:'120px'}}> 
        <p> Your Score is :</p>
        <p> {score}</p>
         <button
         style={{padding:'8px',width:'100px', borderRadius:'8px', backgroundColor:'Orange',fontWeight:'bold'}}
         onClick={handleRestart}>Restart</button>
        </div>
        
              }
      </div>
    </div>
  );
};

export default QuizApp;
