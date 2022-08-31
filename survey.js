const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name?", (answer) => {
  rl.question("What's an activiy you like doing?", (answer1) => {
    rl.question("What do you listen to during this?", (answer2) => {
      rl.question("What do you eat afterwards?", (answer3) => {
        console.log(
          "${answer} loves to ${answer1} and listen to ${answer2} and loves to eat ${answer3} afterwards."
        );
        rl.close();
      });
    });
  });
});
