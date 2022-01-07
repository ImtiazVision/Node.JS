const queries = [
  "What is your hobby?",
  "What would you rather be doing if you were an astronaut?",
  "What is your preferred programming language?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${queries[i]}`);
  process.stdout.write(` > `);
};

ask();
