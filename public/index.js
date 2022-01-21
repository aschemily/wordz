console.log('inside js')
const inputWord = document.getElementById('input-word')
const submitBtn = document.getElementById('submit-word')
const form = document.getElementById('word-form')
const wordList = document.getElementById('word-list')
const counter = document.getElementById('counter')
const divCounter = document.getElementById('div-counter')
const myModal = document.getElementById('my-modal')
const modalContent = document.getElementById('modal-content')

let example = "tests"

function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 4000);
}

function wordOfTheDay(word, userWord){
   // console.log('word', word, 'user word', userWord)
    let userList = document.createElement('li')
    let splitUserWord = userWord.split('')
    let splitWord = word.split('')

    if(word === userWord){
        modalContent.innerHTML = 'CONGRATS'
        refresh()
    }

    splitUserWord.forEach((ltr, i)=>{
       // console.log(ltr, i)
       // console.log(i, ltr, splitWord[0])
       // console.log(i, ltr, splitWord[1])
      if((i === 0 && ltr === splitWord[0]) || (i === 1 && ltr === splitWord[1]) || (i === 2 && ltr === splitWord[2]) || (i === 3 && ltr === splitWord[3]) || (i === 4 && ltr === splitWord[4])){
          console.log('ltr', ltr, i)
          userList.innerHTML += `<span style='color: green;'>${ltr}</span>`
      
          
      }else if(word.includes(ltr)){
          console.log('letters in word', ltr)
          userList.innerHTML += `<span style='color: orange;'>${ltr}</span>`
      }else{
          console.log('no match', ltr)
          userList.innerHTML += `<span style='color: black;'>${ltr}</span>`
      }
      

      
    })
 
   // myModal.appendChild(modalContent)
   
    wordList.appendChild(userList)
}

let chances = 6

function userSubmitted(e){
    e.preventDefault()
  //  console.log('e.target', e.target.input.value)
  let wordOfTheDaySplit = example
  let userWord = inputWord.value

  wordOfTheDay(wordOfTheDaySplit, userWord)
  inputWord.value = ""

  chances -= 1

  if(chances === 0){
      modalContent.innerHTML = 'GAME OVER'
      refresh()
  }

  counter.innerHTML = `${chances}`
  divCounter.appendChild(counter)
  console.log('chances are', chances)

}

form.addEventListener('submit', userSubmitted)

