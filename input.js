let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'g') {
    connection.write("Say: GG!");
  }
  if (key === 'h') {
    connection.write("Say: Oh no!");
  }
  if (key === 'j') {
    connection.write("Say: I win!");
  }
  if (key === 'k') {
    connection.write("Say: Good luck!");
  }
};

module.exports = { setupInput };