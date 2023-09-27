const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question("What's your name? Nicknames are also acceptable :)" , (answer) => {
  answers.push(answer);
  console.log("Great! Onto the next question.");
  console.log("---");
  rl.question("What's an activity you like doing?", (answer) => {
    console.log("Great! Onto the next question.");
    console.log("---");
    answers.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      console.log("Great! Onto the next question.");
      console.log("---");
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc)", (answer) => {
        console.log("Great! Onto the next question.");
        console.log("---");
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          console.log("Great! Onto the next question.");
          console.log("---");
          answers.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            console.log("Great! Onto the last question.");
            console.log("---");
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              answers.push(answer);
              console.log("Here is your personalized profile:");
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} at ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});