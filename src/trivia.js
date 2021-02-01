const TRIVIA_CONTAINER = document.getElementById("questions-container");


class Trivia {
    constructor(questions) {
        this.questions = questions;
        console.log(this.questions, "testing")
        this.currentQuestionIndex = 0
        this.selectedValue = null
        
    }



    buildTrivia(questionObject) {

        console.log(questionObject.question, "receiving the question Object");
 
            const questionContainer = document.createElement("div");
            const answersContainer = document.createElement("ul");
            const buttonsContainer = document.createElement("div");
            const submitButton = document.createElement("button");
            const nextButton = document.createElement("button");


            questionContainer.classList.add("d-flex", "justify-content-center");
            questionContainer.innerHTML = this.questions[this.currentQuestionIndex].question
            answersContainer.classList.add("list-group", "mt-3");
            answersContainer.setAttribute("id", "answersContainer");
            buttonsContainer.classList.add("row", "d-flex", "justify-content-center");
            submitButton.classList.add("btn", "btn-primary", "mr-3");
            submitButton.innerHTML = "Submit";
            submitButton.id = ("submitButton");
            submitButton.disabled = true;
            submitButton.addEventListener("click", () => {  
                submitButton.disabled = true;
             })
            nextButton.classList.add("btn", "btn-success", "nextButton");
            nextButton.setAttribute("id", "nextButton");
            nextButton.innerHTML = "Next";
            nextButton.addEventListener("click", () => {  //Important! Arrow function: the binding of 'this' will default to the parent scope
                TRIVIA_CONTAINER.innerHTML = '';
                console.log(this.currentQuestionIndex)
                this.currentQuestionIndex++   
                console.log(this.currentQuestionIndex)
                this.buildTrivia(this.questions[this.currentQuestionIndex].question)
                console.log(this.questions[this.currentQuestionIndex].question, "testing next")
            })
            
            
            
  

            let answers = [...this.questions[this.currentQuestionIndex].incorrect_answers, this.questions[this.currentQuestionIndex].correct_answer]
            console.log(...this.questions[this.currentQuestionIndex].incorrect_answers, "wrong", this.questions[this.currentQuestionIndex].correct_answer, "right")
            let shuffledAnswers = _.shuffle(answers)
            console.log(shuffledAnswers, "shuffled")
            
           
            let answerList = []
            for (let a in shuffledAnswers) {
                answerList = document.createElement('li');
                answerList.id = shuffledAnswers[a];
                answerList.classList.add("list-group-item", "text-center");
               
                answerList.innerHTML = shuffledAnswers[a];
                
                answerList.addEventListener("click", (e) => {
                    const selectedChoice = e.target;
                    this.selectedValue = shuffledAnswers[a]
                    submitButton.disabled = false;
                    if (this.selectedValue === this.questions[this.currentQuestionIndex].correct_answer ) {
                    selectedChoice.style.backgroundColor = "#abf0d1" }
                    else {
                        selectedChoice.style.backgroundColor = "#ce4d4d" 
                    }
                    console.log(e.target.value, "aaahh")
                    
                    console.log(this.selectedValue, "value")
               
                 
                })
                
               
            
                

                answersContainer.append(answerList);
                TRIVIA_CONTAINER.append(questionContainer);
                TRIVIA_CONTAINER.append(answersContainer);
            }
            console.log(answersContainer)
        
            buttonsContainer.append(submitButton);
            buttonsContainer.append(nextButton);
            TRIVIA_CONTAINER.append(buttonsContainer);
            answersContainer.append(answerList); //if disabled all questions are shown 
            submitButton.disabled = true;
        
    }
    
    

  



    
}

export default Trivia;