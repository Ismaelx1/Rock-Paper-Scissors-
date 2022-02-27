let arrRps = ["Rock",
"Paper",
"Scissors"
]
let resultEl = document.getElementById("result")

let playerScore = 0;
let computerScore = 0;
let computerTurn = arrRps[Math.floor(Math.random()*arrRps.length)]
let score = document.getElementById('score')
let choiceR = "Rock"
let choiceP = "Paper"
let choiceS = "Scissors"

function playRound(playerSelec, computerTurn) {
    


    if (playerSelec === computerTurn) {
        resultEl.textContent = "Result of this match: " + "A draw!"
    } else if (playerSelec === "Rock" && computerTurn === "Paper") {
      
        resultEl.textContent = "Result of this match: " + "You lost, Rock beats Scissors";
    } else if (playerSelec === "Rock" && computerTurn === "Scissors") {
       
        resultEl.textContent = "Result of this match: " + "You won, Scissors Beats Paper"
    }   else if (playerSelec === "Paper" && computerTurn === "Scissors") {
       
        resultEl.textContent = "Result of this match: " + "You lost, Rock beats Scissors";
    } else if (playerSelec === "Paper" && computerTurn === "Rock") {
        
        resultEl.textContent = "Result of this match: " + "You won, Scissors Beats Paper"
    } else if (playerSelec === "Scissors" && computerTurn === "Rock") {
      
        resultEl.textContent = "Result of this match: " + "You lost, Rock beats Scissors";
    } else if (playerSelec === "Scissors" && computerTurn === "Paper") {
       
        resultEl.textContent = "Result of this match: " + "You won, Scissors Beats Paper"
    } 
    

  

    }

    function gorock() {
       let random = arrRps[Math.floor(Math.random()*arrRps.length)]
        playRound(choiceR, random)
        if (choiceR && random === "Paper") {
          
            computerScore += 1
            score.textContent = `The player has ${playerScore} while computer has ${computerScore}` 
        } else if (choiceR && random === "Scissors") {
            playerScore += 1
           
            score.textContent = `The player has ${playerScore} while computer has ${computerScore}` 
        }
        if (playerScore === 5) {
            prompt('Good Job, You will be remember what is your name?')
        } else if (computerScore === 5) {
            alert('Computer Won, Good game! Try again?')
    
        }
    
    
    }
    function goscissors() {
        
        let random = arrRps[Math.floor(Math.random()*arrRps.length)]
        playRound(choiceS, random)
        if (choiceS && random === "Rock") {
         
            computerScore += 1
            score.textContent = `The player has ${playerScore} while computer has ${computerScore}` 
        } else if (choiceS && random === "Paper") {
            playerScore += 1
         
            score.textContent = `The player has ${playerScore} while computer has ${computerScore}` 
        }
        if (playerScore === 5) {
            alert('Player Won, Good game! Try again?')
        } else if (computerScore === 5) {
            alert('Computer Won, Good game! Try again?')
    
        }
    
    
    }
    function gopaper() {
        
        let random = arrRps[Math.floor(Math.random()*arrRps.length)]
        playRound(choiceP, random)
        if (choiceP && random === "Rock") {
            playerScore += 1
         
            score.textContent = `The player has ${playerScore} while computer has ${computerScore}` 
        } else if (choiceP && random === "Scissors") {
       
            computerScore += 1
            score.textContent = `The player has ${playerScore} while computer has ${computerScore}` 
        }
        if (playerScore === 5) {
            alert('Player Won, Good game! Try again?')
        } else if (computerScore === 5) {
            alert('Computer Won, Good game! Try again?')
    
        }
    
    
    }

   
