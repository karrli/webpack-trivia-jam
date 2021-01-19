const TRIVIA_CONTAINER = document.getElementById("questions-container");



class Trivia {
    constructor(questions) {
        this.questions = questions;
        console.log(this.questions, "testing")
        //    this.questions.incorrect_answers = incorrectAnswers
        //    this.questions.correct_answers = correctAnswers
        this.currentQuestionIndex = 0
    }

    // getAnswers() {
    //     for (let i = 0; i < this.questions.length; i++) {
    //         let answers = [...this.questions[i].incorrect_answers, this.questions[i].correct_answer]
    //         // answers.push(this.questions[i].correct_answer)

    //         return answers, console.log(answers, "answers array test")

    //     }
    // }

    buildTrivia(questionObject) {

        console.log(questionObject.question, "hola");
        // for (let i = 0; i < this.questions.length; i++) {
            const questionContainer = document.createElement("div");
            const answersContainer = document.createElement("ul");
            const buttonsContainer = document.createElement("div");
            const submitButton = document.createElement("button");
            const nextButton = document.createElement("button");
            // const answerList = document.createElement("li");

            questionContainer.classList.add("d-flex", "justify-content-center");
            questionContainer.innerHTML = questionObject.question
            console.log(questionObject.question)
            answersContainer.classList.add("list-group", "mt-3");
            buttonsContainer.classList.add("row", "d-flex", "justify-content-center");
            submitButton.classList.add("btn", "btn-primary", "submitButton", "mr-3");
            submitButton.innerHTML = "Submit";
            nextButton.classList.add("btn", "btn-success", "nextButton");
            nextButton.setAttribute("id", "nextButton");
            nextButton.innerHTML = "Next";
            nextButton.addEventListener("click", () => {
                TRIVIA_CONTAINER.innerHTML = '';
                console.log(this.currentQuestionIndex)
                this.currentQuestionIndex++   
                console.log(this.currentQuestionIndex)
                this.buildTrivia(this.questions[this.currentQuestionIndex].question)
                console.log(this.questions[this.currentQuestionIndex].question, "testing next")
            })
            // answerList.classList.add("list-group-item", "text-center")

            // answerList.innerHTML = this.getAnswers()

            let answers = [...questionObject.incorrect_answers, questionObject.correct_answer]
            console.log(questionObject.incorrect_answers, "wrong", questionObject.correct_answer, "right")
            let shuffledAnswers = _.shuffle(answers)
            // answers.push(this.questions[i].correct_answer)
            // return answers.map((answer) =>{answerList.innerHTML = answer, console.log(answerList.innerHTML = answer, "answers array")}) 
            let answerList = []
            for (let a in shuffledAnswers) {
                answerList = document.createElement('li');
                answerList.id = shuffledAnswers[a];
                answerList.classList.add("list-group-item", "text-center");
                answerList.innerHTML = shuffledAnswers[a];
                // document.body.appendChild(answerList);

                answersContainer.append(answerList);
                TRIVIA_CONTAINER.append(questionContainer);
                TRIVIA_CONTAINER.append(answersContainer);
            }
            buttonsContainer.append(submitButton);
            buttonsContainer.append(nextButton);
            TRIVIA_CONTAINER.append(buttonsContainer);
            answersContainer.append(answerList); //if disabled all questions are shown 
            // TRIVIA_CONTAINER.append(questionContainer);
            // TRIVIA_CONTAINER.append(answersContainer);
        // }
    }

    //tried adding Next Button
    // Next() {
    //     console.log("click")
    //     TRIVIA_CONTAINER.innerHTML = '';
    //     const NEXT_QUESTION= document.getElementById("nextButton");

    //     console.log(NEXT_QUESTION)
    //     NEXT_QUESTION.addEventListener("click", function () {
    //     this.currentQuestionIndex++   
    //     this.buildTrivia(this.questions[this.currentQuestionIndex].question)
    //     console.log(this.questions[this.currentQuestionIndex].question, "testing next")
    // })
    // }

}

export default Trivia;