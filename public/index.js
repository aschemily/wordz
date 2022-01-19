console.log('inside js')
const inputWord = document.getElementById('input-word')
const submitBtn = document.getElementById('submit-word')
const form = document.getElementById('word-form')
const wordList = document.getElementById('word-list')

let example = "tests"

function wordOfTheDay(word, userWord){
   // console.log('word?', word, userWord)
   let userList = document.createElement('li')
    let splitWord = word.split('')
    let userInput = userWord.split('')

for(let i = 0; i < userInput.length; i++){
   // console.log(userInput[i], i, 'word', splitWord[0])
    if(userInput[i] === splitWord[0]){
        console.log('userInput', userInput[i])
        
    }else if(word.includes(userInput[i])){
        console.log('letter matches', userInput[i])
    }

}  

    userList.innerHTML = userWord
    wordList.appendChild(userList)
  
}



function userSubmitted(e){
    e.preventDefault()
  //  console.log('e.target', e.target.input.value)
  let wordOfTheDaySplit = example
  let userWord = inputWord.value

  wordOfTheDay(wordOfTheDaySplit, userWord)
  inputWord.value = ""

}

form.addEventListener('submit', userSubmitted)

