const sam = parseInt(process.argv[2]);
if (isNaN(sam) || sam < 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < sam; i++) {
    console.log("X".repeat(sam));
  }
}