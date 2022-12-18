/* Introdução */

const body = document.getElementById("body")

const history = {

    history: document.getElementById("history"),
    alien: document.getElementById("alien-history"),
    area: document.getElementById("history-area"),
    text:{

        track: 0,
        area: document.getElementById("text-area"),
        p: document.getElementById("text"),
        tempo: 200,
        espaco: 0,
        text: ["P", "r", "e", "c", "i", "s", "a", "m", "o", "s", " ", " e", "n", "c", "o", "n", "t", "r", "á", "-", "l", "o",
               " n", "ã", "o", " s", "a", "b", "e", "m", "o", "s", " o", "s", " r", "i", "s", "c", "o", "s", " q", "u", "e",
               " e", "l", "e", " p", "o", "d", "e", " c", "a", "u", "s", "a", "r", "!", "\n", "\n", "N", "ó", "s", /*" d", "o", " q", 
               "u", "a", "r", "t", "e", "l" */, " a", "c", "r", "e", "d", "i", "t", "a", "m", "o", "s", " q", "u", "e", " v", "o", "c", "ê",
               " s", "e", "j", "a", " o", " m", "a", "i", "s", " p", "r", "e" , "p", "a", "r", "a", "d", "o", " p", "a", "r", "a", " e", "n",
               "c", "o", "n", "t", "r", "a", "r", " o", " q", "u", "e", " q", "u", "e", "r", " q", "u", "e", " e", "l", "e", " s", "e", "j", "a", ".",
               "\n", "\n", "A", "s", "s", ":", " G", "e", "n", "e", "r", "a", "l", ".",
            ],

    }

}

const game = {

    gameTutorial: document.getElementById("tutorial"),
    gameStatus: "Tutorial",
    game: document.getElementById("game"),
    lifes: 3,
    life1: document.getElementById("life1"),
    life2: document.getElementById("life2"),
    life3: document.getElementById("life3"),
    tree1: document.getElementById("tree1"),
    tree2: document.getElementById("tree2"),
    tree3: document.getElementById("tree3"),
    tree4: document.getElementById("tree4"),
    tree5: document.getElementById("tree5"),
    tree6: document.getElementById("tree6"),
    tree7: document.getElementById("tree7"),
    tree8: document.getElementById("tree8"),
    tree9: document.getElementById("tree9"),
    correctTree: 0,
    alienJumpScare: document.getElementById("alien-jumpscare"),
    alienJumpScareAudio: new Audio(),
    restart: document.getElementById("restart"),
    win: document.getElementById("win")
    
}

game.alienJumpScareAudio.src="./Audios/JumpScareAudio.mp3"
game.alienJumpScareAudio.volume = 1

function clearAlienHistory(){

    console.log(history.alien)
    console.log(history.area)
    console.log(history.text.area)

    setTimeout(() => {

        history.alien.style.display = "none"

    }, 1950)

    setTimeout(() => {

        history.area.style.display = "none"
        history.text.area.style.display = "flex"

        history.text.text.forEach((caractere) => {

            setTimeout(() => {

                history.text.p.innerText += caractere;

                setTimeout(() => {

                    history.history.style.display = "none"
                    game.game.style.display = "flex"

                    if(game.correctTree == 0){

                        console.log(game.correctTree)

                    }

                },history.text.tempo * 1.5)

            },history.text.tempo)

            history.text.tempo += 100
            
        });

    }, 2050)

}

function startGame(){

    game.gameTutorial.style.display = "none"
    game.gameStatus = "Jogar"

    for(var i = 1; i < 10; i++){

        document.getElementById("tree"+i).classList.add("treeHover")

    }

}

function atirar(arvoreEscolhida){

    if(game.gameStatus == "Jogar"){

        if(arvoreEscolhida == game.correctTree){

            game.game.style = "display: none"
            game.win.style = "display: flex"
            game.gameStatus = "Ganhou"

        }else{

            game.gameStatus = "Errou"

            game.lifes = game.lifes - 1
            
            if(game.lifes == 2){

                game.life3.style = "filter: grayscale(100);"

            }
            
            if(game.lifes == 1){

                game.life2.style = "filter: grayscale(100);"

            }

            setTimeout(() => {

                game.gameStatus = "Jogar"

            },500)

            if(game.lifes == 0){

                game.life1.style = "filter: grayscale(100);"

                setTimeout(() => {

                    game.game.style = "display: none"

                    window.navigator.vibrate(3000);
                    game.alienJumpScare.style.display = "inherit"
                    game.alienJumpScare.requestFullscreen()
                    game.alienJumpScareAudio.play()

                    setTimeout(() => {
                    
                        game.game.style = "display: none"

                        if(document.fullscreenEnabled){

                            document.exitFullscreen()

                        }

                        game.alienJumpScare.style.display = "none"
                        game.restart.style = "display: flex"

                    },4000)
    
                },500)

            }

        }

    }

}

function restart(){

    game.gameStatus = "Jogar"

    game.restart.style = "display: none"

    game.correctTree = Math.floor((Math.random() * 9) + 1)

    game.lifes = 3

    game.life1.style = "filter: grayscale(0);"
    game.life2.style = "filter: grayscale(0);"
    game.life3.style = "filter: grayscale(0);"                  
                        
    game.game.style = "display: flex"


}

/* ----------------------------------- */

clearAlienHistory()
