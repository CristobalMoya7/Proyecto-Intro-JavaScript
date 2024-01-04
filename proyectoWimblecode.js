/*
Anotaciones:
Jugadores maximos y minimos 4 - “Alberto Casero”, “David Jiménez”, “Javier de Miguel”, “Eduardo Aguilar”.
Juegan un play-off, donde si ganan un partido con su rival avanzan a la siguiente ronda. =>-
*/

createMatch = (player1, player2) => {
    const scores = [0, 0];
    const rounds = [0, 0];
    const games = [0, 0];
    let currentRound = 0;
    let currentGame = [0, 0];
    let deuce = false;
    let advantage = null;

    const pointWonBy = (playerIndex) => {
        // Implementa la lógica para registrar el puntaje cuando un jugador anota
        currentGame[playerIndex]++;

        // Verificar si hay un ganador del juego
        if (currentGame[playerIndex] >= 4 && currentGame[playerIndex] >= currentGame[1 - playerIndex] + 2) {
            // El jugador ha ganado el juego
            games[playerIndex]++;
            currentGame = [0, 0];
            deuce = false;
            advantage = null;
        } else if (currentGame[playerIndex] === 4 && currentGame[1 - playerIndex] === 4) {
            // La puntuación está empatada (deuce)
            deuce = true;
        } else if (deuce && currentGame[playerIndex] === currentGame[1 - playerIndex] + 1) {
            // Jugador con ventaja gana el juego
            games[playerIndex]++;
            currentGame = [0, 0];
            deuce = false;
            advantage = null;
        } else if (deuce && currentGame[playerIndex] === currentGame[1 - playerIndex]) {
            // Jugador sin ventaja empata (deuce)
            advantage = null;
            deuce = true;
        } else if (deuce) {
            // Jugador toma ventaja
            advantage = playerIndex;
            deuce = false;
        } else if (currentGame[playerIndex] === 4) {
            // Jugador gana el juego
            games[playerIndex]++;
            currentGame = [0, 0];
            deuce = false;
            advantage = null;
        }
    };

    const getCurrentRoundScore = () => {
        // Implementa la lógica para obtener el puntaje actual de la ronda
        return `${player1} ${getScoreText(currentGame[0])}-${getScoreText(currentGame[1])} ${player2}`;
    };

    const getRoundsScore = () => {
        // Implementa la lógica para obtener el número de rondas ganadas por cada jugador
        return `${player1} ${rounds[0]} ${player2} ${rounds[1]}`;
    };

    const getMatchScore = () => {
        // Implementa la lógica para obtener el número de juegos ganados por cada jugador
        return `${player1} ${games[0]} ${player2} ${games[1]}`;
    };

    const getWinner = () => {
        // Implementa la lógica para determinar el ganador del partido
        if (games[0] >= 2) {
            return player1;
        } else if (games[1] >= 2) {
            return player2;
        } else {
            return null;
        }
    };

    // Función auxiliar para obtener la representación de la puntuación
    const getScoreText = (score) => {
        const scoreMapping = ["0", "15", "30", "40", "Ganas"];
        return scoreMapping[score];
    };

    return {
        pointWonBy,
        getCurrentRoundScore,
        getRoundsScore,
        getMatchScore,
        getWinner
    };
};

  
// Ejemplo de uso
const game = createMatch('Alberto C', 'David J');
// Cuando puntua el 1º judagor se registra de este modo 
game.pointWonBy(0); // Cambiado de 1 a 0
// Cuando puntua el 2º judagor se registra de este modo 
game.pointWonBy(1); // Cambiado de 2 a 1
// Quiero poder ver como va la ronda actual en todo momento 
console.log(game.getCurrentRoundScore()); // Alberto C 15-15 David J 
game.pointWonBy(0); // Cambiado de 1 a 0
console.log(game.getCurrentRoundScore()); // Alberto C 30-15 David J 
game.pointWonBy(1); // Cambiado de 2 a 1
console.log(game.getCurrentRoundScore()); // Alberto C 30-30 David J 
game.pointWonBy(0); // Cambiado de 1 a 0
console.log(game.getCurrentRoundScore()); // Alberto C 40-30 David J 
game.pointWonBy(1); // Cambiado de 2 a 1
console.log(game.getCurrentRoundScore()); // Deuce
// jugador 1 toma ventaja 
game.pointWonBy(0); // Cambiado de 1 a 0
console.log(game.getCurrentRoundScore()); // Advantage Alberto C
// jugador 2 empata 
game.pointWonBy(1); // Cambiado de 2 a 1
console.log(game.getCurrentRoundScore()); // Deuce
// jugador 2 toma ventaja 
game.pointWonBy(1); // Cambiado de 2 a 1
console.log(game.getCurrentRoundScore()); // Advantage David J
// Con este punto jugador 2 gana la ronda 
game.pointWonBy(1); // Cambiado de 2 a 1
// Quiero poder ver como va la puntuación de un juego 
console.log(game.getRoundsScore()); //	Alberto C 0 David J 1
// La primera ronda es para David le quedan 3 para ganar un juego

// Al final del juego
console.log(game.getMatchScore());
console.log(game.getWinner());

  