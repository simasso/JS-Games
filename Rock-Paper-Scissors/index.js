const options = [
  { short: "r", long: "rock", beats: "scissors" },
  { short: "p", long: "paper", beats: "rock" },
  { short: "s", long: "scissors", beats: "paper" },
];

function wrong_input() {
  console.error("wrong input");
  process.exit(2);
}

function parse_input_opt() {
  if (process.argv.length < 3) {
    wrong_input();
  }
  const input = String(process.argv[2]).toLowerCase();
  const input_opt = options.find(
    (opt) => opt.short === input || opt.long === input
  );
  if (input_opt === undefined) {
    wrong_input();
  }
  return input_opt;
}

function generate_opt() {
  const numFloatSmaller100 = Math.random() * 100;
  const numSmallThanOrEqualTo100 = Math.round(numFloatSmaller100);
  const numBetween0And2 = numSmallThanOrEqualTo100 % 3;
  console.log(numBetween0And2);
  return options[numBetween0And2];
}

function toCapital(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const your_opt = parse_input_opt();
const my_opt = generate_opt();
console.log(`You say "${your_opt.long}" and I say "${my_opt.long}".`);
if (your_opt.beats === my_opt.long) {
  console.log(`${toCapital(your_opt.long)} beats ${my_opt.long}. You won!`);
} else if (my_opt.beats === your_opt.long) {
  console.log(`${toCapital(my_opt.long)} beats ${your_opt.long}. I won!`);
} else {
  console.log("No winner!");
}
