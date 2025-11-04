const options = [
  { key: 0, short: "r", long: "rock", beats: "scissors" },
  { key: 1, short: "p", long: "paper", beats: "rock" },
  { key: 2, short: "s", long: "scissors", beats: "paper" },
];

function wrong_input() {
  console.error("wrong input");
  process.exit(2);
}

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
