class Turtle {
  constructor(element, chickenDinner = false) {
    this.currentPosition = "middle"
    this.winner = chickenDinner
    this.domElement = element
  }

  setPosition = newPosition => {
    if (this.currentPosition != newPosition) {
      this.domElement.classList.remove(this.currentPosition);
      this.domElement.classList.add(newPosition);
      this.currentPosition = newPosition;
    }
  }

  clickHandler = () => {
    if (this.winner) {
      console.log("Winner winner!")
    } else {
      console.log("Loser loser!!")
    }
  }
}

// Globals
const headingElement = document.getElementById('heading')

const turtleOne = new Turtle(document.getElementById("turtle1"))
const turtleTwo = new Turtle(document.getElementById("turtle2"), true)
const turtleThree = new Turtle(document.getElementById("turtle3"))

turtles = [turtleOne, turtleTwo, turtleThree]

const initialTurtlePositions = () => {
  turtles.forEach((turtle, i) => {
    const positions = {
      0: "left",
      1: "middle",
      2: "right"
    }

    turtle.setPosition(positions[i])
  })
}

// Initializing game
const init = () => {
  initialTurtlePositions()
}
init();

// Getting words
// const getRandomWords = () => {
//   return fetch(RANDOM_WORDS_API_URL)
//     .then(res => res.json())
//     .then(data => data.reduce((words,item) => { 
//       // Clean up word list to only get acceptable characters
//       // Also gets rid of proper nouns
//       if (/^[a-z]+$/.test(item.word)) {
//         words.push(item.word)
//       }
//       return words
//     }, []))
// }

// const wordList = [];

// // Adds new words to the wordList if it's below 10 words
// const fillWordList = async () => {
//   if (wordList.length < 10) {
//     wordList.push(...await getRandomWords())
//   }
// }