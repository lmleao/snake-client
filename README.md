# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer).


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Replace the original RemoteInterface file with the modified version in this repo.
  - This is to implement the functionality that notifies players when another player has joined the game. If you don't need this, feel free to skip this step!
- Run the development snake client using the `node play.js` command. You'll need to do this in a separate terminal window.
- Begin your reign as the Snake Sovereign 🐍