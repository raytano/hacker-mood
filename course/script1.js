class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}
let questions = [
  new Question("Comment dire << Bébé >>", ["Baby", "Baby", "Kid", "Young"], "Baby"),
  new Question("Que signifie << Snowsuit>>", ["Veste","Pantalon", "la combinaison de neige", "Nouriture"], "La combinaison de neige"),
  new Question("Do you seapk english?", ["I am a student","Yes I am", "I am not", "Yes"], "Yes, I do"),
  new Question(" Her and I...... eating", ["have","is", "am", "are"], "are"),
  new Question("Show me your work", ["Presente moi ton père ", "Motrez ta maison", "Montrer la route", "Montres ton travail"], "Montre ton travail"),
  new Question("Que signifie << slippers >>", ["Caleçon","Tissu", "Pantoufles", "Calendrier"], "Pantoufles"),
  new Question("Do you study?", ["I come from Ghana","I am sick ", "Yes, i do?", "I go to school"], "Yes, i do?"),
  new Question("Complete<< They ..... football yesteray >>", ["Played","play", "Playing", "Playeed"], "Played"),
  new Question("Comment dire << J'ai faim>>", ["I'am angry !!!", "I'am thirsty", "I am hungry", "I want to eat"], "I am hungry"),
  new Question("What is << Elder person >> ?", ["Un vieillard","Jeune Homme", "Le beau fils", "Un Ainé"], "Un Ainé"),
  new Question("Who is << father >> ?", ["Le tonton","Le ", "Le père", "La femme"], "Le Père"),
  new Question("Who is << The Son-in-law >> ?", ["Le cousin","Le tuteur", "La cuisiniere", "Le gendre"], "Le gendre"),
  new Question("Signification of << To be mad at on>> ?", ["Etre en colère contre quelqu'un", "Fabriquer quelqu'un", "Etre en couple", "Etre gentil"], "Etre fâché contre quequ'un"),
  new Question("Signification of << Wallet >> ?", ["chauve","Heureux", "Portefeuille", "Pantalontalon"], "Portefeuille"),
  new Question("Signification of << Happy Day >> ?", [" Mauvais Jour","Jour de detente", "Bonne journée", "à demain"], "Bonne Journée"),
  new Question("Signification of << Be Proud of >> ?", ["Encourrage"," Se confier", "Travail dur", "Etre fier de"], "Etre fier de"),
  new Question("Signification of << Farewell >> ?", ["adieu", "Bonne soirée", "au revoir", "à ce soir"], "Good Morning"),
  new Question("Signification of << craving >> ?", ["craquer","désir ardent", "avoir faim", "être en colère"], "desir ardent"),
  new Question("Beginners are.....students", ["Profeciency","Intermediate", "Upper", "Beginner 1, 2, and 3"], "Beginner 1, 2, and 3"),
  new Question(" You and I ...... a good actors", ["Is","Do", "Am", "Are"], "Are"),
  new Question("Comment dire << j'ai sommeil >>", ["I am sleep", "I feel sleepy", "I am sleeping", "I feel sleepy"], "I feel sleepy"),
  new Question("Que signifie << I am a student >>", ["je suis un maçon","nous sommes des étudiants", "je suis un étudiant", "je suis un étudiant"], "je suis un étudiant"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" They ......playe tomorrow", ["are","would", "will", "will"], "will"),
  new Question("Comment dire << Bonjour >>", ["Good Morning", "Good Afternoon", "Good Week", "Good Evening"], "Good Morning"),
  new Question("Que signifie << It's Twenty-two past two AM >>", ["14h50","20h35", "2h20", "5h35"], "2h20"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << Bonjour >>", ["Good Morning", "Good Afternoon", "Good Week", "Good Evening"], "Good Morning"),
  new Question("Que signifie << It's Twenty-two past two AM >>", ["14h50","20h35", "2h20", "5h35"], "2h20"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << Bonjour >>", ["Good Morning", "Good Afternoon", "Good Week", "Good Evening"], "Good Morning"),
  new Question("Que signifie << It's Twenty-two past two AM >>", ["14h50","20h35", "2h20", "5h35"], "2h20"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << Bonjour >>", ["Good Morning", "Good Afternoon", "Good Week", "Good Evening"], "Good Morning"),
  new Question("Que signifie << It's Twenty-two past two AM >>", ["14h50","20h35", "2h20", "5h35"], "2h20"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << Bonjour >>", ["Good Morning", "Good Afternoon", "Good Week", "Good Evening"], "Good Morning"),
  new Question("Que signifie << It's Twenty-two past two AM >>", ["14h50","20h35", "2h20", "5h35"], "2h20"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << Bonjour >>", ["Good Morning", "Good Afternoon", "Good Week", "Good Evening"], "Good Morning"),
  new Question("Que signifie << It's Twenty-two past two AM >>", ["14h50","20h35", "2h20", "5h35"], "2h20"),
  new Question("How is your family?", ["everyone is okay","everyone are well", "they ar", "we are fine"], "I am fine"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << je vous souhaite Une bonne nuit >>", ["I wish you Good day", "Have a Good day", "I wish you good niht", "Good Evening"], "i wish you good night"),
  new Question("Que signifie << Things are going wrong >>", ["Les nouvelles sont bonnes","Tout va bien", "Tout est agréable", "Les choses ne vont pas bien"], "les chsoses ne vont pas bien"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" Them and Their Kids......honest", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << Bonjour >>", ["Good Morning", "Good Afternoon", "Good Week", "Good Evening"], "Good Morning"),
  new Question("Que signifie << may you show me the station please >>", ["Pouvez vous me conduir Svp","Pouvez vous m'indiquer la gare Svp", "pouvez vous m'aider Svp", "pouvez m'indiquer  la maison Svp"], "pouvez m'indiquer la gare Svp"),
  new Question("How are you?", ["I fine","I was fine", "I am fine", "we are fine"], "I am fine"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question("Comment dire << Have a Good day >>", ["See you", "Good bye", "Good Week", "Have a good day"], "Have a good day"),
  new Question("Que signifie << It's Twenty-two past two AM >>", ["14h50","20h35", "2h20", "5h35"], "2h20"),
  new Question("How are you?", ["I Am great","you are okay", "you are great", "I am great"], "I am great"),
  new Question(" You and I ...... a good Dancers", ["is","do", "am", "are"], "are")


];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

const display = {
  elementShown: function(id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function() {
    endQuizHTML = `
      <h1>Quiz terminé !</h1>
      <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function() {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function() {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        quizApp();
      }
    }
    // affichage choix + prise en compte du choix
    for(let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function() {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
  },
};

// Game logic
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  } 
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();
