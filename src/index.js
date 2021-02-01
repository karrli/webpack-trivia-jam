import axios from 'axios';
import './styles/main.scss';
import Trivia from './trivia';
import _ from 'lodash';

let callApiButton = document.getElementById("submit");

callApiButton.addEventListener("click", () => {
  callApiButton.disabled = true;
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