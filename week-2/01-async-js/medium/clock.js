function clock() {
  let currentDate = new Date();

  let hours = currentDate.getHours();
  let mins = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let meridiem = "AM";

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
  }

  let time = hours + " : " + mins + " : " + seconds + " " + meridiem;

  process.stdout.write("\x1Bc"); // clears terminal \x1B is excape charater and c is the command to clear the screen
  console.log(time);
}
setInterval(clock, 1000);
