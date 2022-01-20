console.log('inside js')
const inputWord = document.getElementById('input-word')
const submitBtn = document.getElementById('submit-word')
const form = document.getElementById('word-form')
const wordList = document.getElementById('word-list')

let example = "tests"

function wordOfTheDay(word, userWord){
   // console.log('word?', word, userWord)
   let userList = document.createElement('li')
   // userList.setAttribute("id", "wordId")
   
    let splitWord = word.split('')
    let userInput = userWord.split('')


for(let i = 0; i < userInput.length; i++){
   // console.log(userInput[i], i, 'word', splitWord[0])
    if(userInput[i] === splitWord[0] ){    
       userList.innerHTML += `<span style='color: green;'>${userInput[i]}</span>`
    }else if(word.includes(userInput[i])){
        userList.innerHTML += `<span style='color: yellow;'>${userInput[i]}</span>`
    }else{
        userList.innerHTML += `<span style='color: black;'>${userInput[i]}</span>`
    }


}  

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

