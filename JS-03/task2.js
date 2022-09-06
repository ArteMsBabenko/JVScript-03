let styles = ["Blues", "Jazz"];
console.log(styles);

styles.push("Rock-N-Roll");
console.log(styles);

styles.splice(-2, 1, "Classic");
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Reggy");
console.log(styles);