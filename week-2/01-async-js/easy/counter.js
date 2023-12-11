//using setInterval

let count = 0;
function counter() {
  count++;
  console.log(count);
}

//setInterval(counter, 1000);

//using setTimeout
let count1 = 0;
function counter2() {
  console.log(++count1);
  setTimeout(counter2, 1000);
}

counter2();
