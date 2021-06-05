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
  new Question("  The student....in class right now ", ["is", "are", "will", "was"], "are"),
  new Question(" Bako......well football ", ["Played","Plays", "Has Play", "Had Plays"], "Plays"),
  new Question("I.....Hungry", ["am","are", "will", "am"], "am"),
  new Question(" Her and I.....Rice", ["are eating","Are eat", "am eat", "eating"], "eat"),
  new Question("He......his work", ["Show ", "Is show", "Shows", "Had show"], "Shows"),
  new Question("<< ....he a footballer? >>", ["is","are", "Do", "Is"], "Is"),
  new Question(".......they to school?", ["Are","is", "will", "am"], "Are"),
  new Question("<< .....I eat? >>", ["Am","Do", "Did", "Have"], "Do"),
  new Question("<< .....She schooling at sewa?>>", ["Do", "Doesn't", "Does", "Is"], "Does"),
  new Question("<< .....He doing the text? >> ?", ["Is","Does", "have", "Weill"], "Is"),
  new Question("<<......I going to school>> ", ["Does","Do", "Am", "Have"], "Do"),
  new Question("<< .....they smart>> ?", ["Do","Are", "Is", "Does"], "Do"),
  new Question("<< .....you any change there?>> ?", ["are", "Do", "Have", "Does"], "Have"),
  new Question("<< .....you sleep at night? >> ?", ["Are","Do", "Am", "Is"], "Do"),
  new Question("<< ....I....a student?>> ?", ["Do not","Don't", "Doesn't", "Is not"], "Do not"),
  new Question("<< .......They take the bags?>> ?", ["have not","do not", "haven't", "has not"], "have not"),
  new Question(" John......to get up very early ?", ["Like", "Likes", "Las like", "Liked"], "Likes"),
  new Question(" She.....me because I speak too quickly? ", ["Not understand","Is understand", "Don't understand", "Doesn't understand"], "Doesn't understand"),
  new Question(" He.....all the night", ["Not sleep","Doe't sleep ", "Isn't sleep", "Are't sleep"], "Doesn't sleep"),
  new Question(" George.....well when he is not tired ", ["workes","works", "worked", "have work"], "works"),
  new Question(" Not many people.....in the street. It's Sunday", ["walk", "walking", "walked", "have walk"], "wolk"),
  new Question(" George....well when he is not tired", ["Work","has work", "workes", "works"], "works"),
  new Question(" What your dad.......for a living ?", ["Do","Does", "did", "has done"], "have done"),
  new Question(" I usually.....the bus to school but today my sister ", ["Drive","Take", "Run", "Lend"], "Take"),
  new Question(" My mum......a day off during the summer months ", ["Doesn't get", "Not get", "Don't get", "haven't got"], "Doesn't get"),
  new Question("  Jack......in a few minutes. You have to hurry ", ["Leave","Leaving", "Leaves", "Has leaved"], "Leaves"),
  new Question("Ian.......a shower at the moment. Could you call back later ?", ["Take","Takes", "Taked", "Takes"], "Takes"),
  new Question(" She......to be a nice girl", ["Appear","Do Appear", "Appears", "Appeared"], "Appeares"),
  new Question("  I......to go swimming during the hot summer months ", ["Love", "Loved", "Had love", "did love"], "Love"),
  new Question(" Our teacher.....from Manchester, just like I do ", ["come","came", "is coming", "comes"], "comes"),
  new Question("He......to London often??", ["Comes","came", "is coming", "goes"], "Comes"),
  new Question(" I sometimes.....about a nice villa near the lake", ["Dreaming","Do dream", "Dream", "Dreamt"], "Dream"),
  new Question(" You can't go in there. She......well right now ", ["Is not felling", "Doesn't fell", "Not fell", "Has not fell"], "Doesn't fell"),
  new Question(" I......with my boy friend at the moment", [" Live","lives", "am living", "leaved"], "Live"),
  new Question("....she to school now?", ["To be walk","Is walk", " is walking", "has walked"], "is walking"),
  new Question("I.....sleep", ["am not sleeping","don't sleep", "am sleep", "did not sleep"], "Am not sleeping"),
  new Question("she......the guitar", ["Plays", "Playes", "Played", "Has Played"], "Plays"),
  new Question(" we.......cooking rice ", ["are","am", "is", "had"], "are"),
  new Question("I.....not meet my father every day ", ["Do","am", "Is", "Have"], "Do"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question(" They....in London ", ["To Live", "Live", "Lived", "are Lived"], "Live"),
  new Question(" he..... for the bus ", ["is not waiting","had waiting", "waited", "has waiting"], "is waiting"),
  new Question(" she....steal all the chocolate", ["has stolen","steal", "is stolen", "have stolen"], "Has stolen"),
  new Question(" You and Me ...... a good players", ["is","do", "am", "are"], "are"),
  new Question(" you.....the newspaper ", ["aren't reading", "isn't reading", "haven't reading", " haven't readen"], "aren't reading"),
  new Question(" we....to the cinema tonigh ", ["Are not","Don't", "won't go", "did go"], "Don't go"),
  new Question(" He.......rice every day? ", ["ate","eats", "has ate", "have eaten"], "eats"),
  new Question(" There.......gone from there", ["is","do", "am", "are"], "are"),
  new Question(" They......twice per day ", ["learn", "Learnt", "have learnt", "did lean"], "Learn"),
  new Question(" He......tennis now ", ["plays","Played", "is playing", "had play"], "Plays"),
  new Question(".........you tonight?  ", ["are coming","will coming", "is coming", "would come"], "Are coming"),
  new Question(" Them and Their Kids......honest persons", ["is","do", "am", "are"], "are"),
  new Question(" They.......to the party ", ["are not coming", "will coming", "have coming", "came"], "are coming"),
  new Question(" She.......to the cinema very often ", ["Doesn't go","is not going", "won't go", "had went"], "is not going"),
  new Question(" He..........golf now", [" is playing","are playing", "has playing ", "Played"], "is playing"),
  new Question(" I......coffee very often", ["am not drinking","was not drinking", "have drinking", "is not drinking"], "am not drinking"),
  new Question(" I....... tonight ", ["am not working", "was not working", "will working", "worked"], "Am not working"),
  new Question(" you......Thai food before ", ["have ate","had", "was", "is"], "Has"),
  new Question("who....he meet recently?", ["has","you are okay", "you are great", "I am great"], "I am great"),
  new Question(" it....all day?", ["has rainned","have rainned", "rainned", "is raining"], "has rainned")


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
