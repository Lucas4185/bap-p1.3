const myQuestion = document.getElementById('myQuestion');
const resultBox = document.getElementById('resultBox');
const answerBox = document.getElementById('answerBox');

function init() {

  resultBox.style.display="none";
  counter = 0;
  makeQuestion();
}

init();

function makeQuestion() {
  myQuestion.innerHTML = quiz[counter].question;
  answerBox.innerHTML = "";
  for (let i = 0; i < quiz[counter].answers.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = quiz[counter].answers[i].answer;
    li.feedback = quiz[counter].answers[i].feedback;
    answerBox.appendChild(li);
    li.addEventListener('click', (e)=>{
      if(li.feedback == true){
        counter++;

        var x = document.createElement("IMG");
        var music = new Audio();
        music.src = "mp3/correct.mp3";
        music.play();

    x.setAttribute("src", "img/correct.png");

    x.setAttribute("alt", "correct");
    document.body.appendChild(x);



       console.log(li.feedback);
    }else if(li.feedback == false){
      var y = document.createElement("IMG");
      var music = new Audio();
      music.src = "mp3/incorrect.wav";
      music.play();
 console.log(li.feedback);
  y.setAttribute("src", "img/incorrect.png");
  y.setAttribute("width", "50");
  y.setAttribute("height", "50");
  y.setAttribute("alt", "incorrect");
   document.body.appendChild(y);

 }if(counter < quiz.length){
   makeQuestion();
 }else{
   finishQuiz();
 }
    });

  }
}

function evaluate(evt) {
}

function finishQuiz() {
  resultBox.style.display="";
  answerBox.style.display="none";
  myQuestion.style.display="none";
}
