let guess = 0
let Value = randint(0, 10)
game.splash("I'm thinking of a number between 1 and 5")
while (guess != Value) {
    guess = parseFloat(game.askForString("What's your guess", 1))
}
game.splash("Correct!")
game.over(true)
