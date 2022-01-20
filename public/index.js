console.log('inside js')
const inputWord = document.getElementById('input-word')
const submitBtn = document.getElementById('submit-word')
const form = document.getElementById('word-form')
const wordList = document.getElementById('word-list')

let example = "tests"

// function wordOfTheDay(word, userWord){
  
//    let userList = document.createElement('li')
//     let splitWord = word.split('')
//     let userInput = userWord.split('')
  
//     for(let i = 0; i < splitWord.length; i++){
//         for(let j = 0; j < userInput.length; j++){

//             //console.log('word', splitWord[i], i, "user input", userInput[j], j)

//            if(splitWord[i] === userInput[j] && i === j ){
//               console.log('user word', userInput[j], 'actual word', splitWord[i])
              
//              // letter.innerHTML = `<span style='color: green;'>${userInput[j]}</span>`
              
//            } else if(word.includes(userInput[j])){
//                 console.log('inside second  if', userInput[j], 'word is', word, 'j', j, 'i', i)
//              //  userList.innerHTML = `<span style='color: orange;'>${userInput[j]}</span>`
              
               
//            }
           
//         }
     
    
//     }
//     wordList.appendChild(userList)
  
// }

function wordOfTheDay(word, userWord){
   // console.log('word', word, 'user word', userWord)
    let userList = document.createElement('li')
    let splitUserWord = userWord.split('')
    let splitWord = word.split('')

    // if(word === userWord){
    //     userList.innerHTML = `<span style='color: green;'>${userWord}</span>`
    // }

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

