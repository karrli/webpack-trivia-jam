import axios from 'axios';
import './styles/main.scss';
import Trivia from './trivia';
import _ from 'lodash';


function getTriviaQuestions() {
  axios.get('https://opentdb.com/api.php?amount=10')
    .then(function (response) {
      // handle success
      // console.log(response.status) 
      console.log(response.data, "esta es la data")
      // console.log(response.data.results.length)
      console.log(response.data.results)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

getTriviaQuestions();


let callApiButton = document.getElementById("submit");


callApiButton.addEventListener("click", function () {
    let category = document.getElementById("trivia_category").value;
    let difficulty = document.getElementById("trivia_difficulty").value;
    let type = document.getElementById("trivia_type").value;
    console.log(category)
    console.log(difficulty)
    console.log(type)
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`)
      .then(function (response) {
        // handle success
        console.log(response.status)
        console.log(response.data)
        
        const trivia = new Trivia(response.data.results)
        trivia.buildTrivia(response.data.results[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

)