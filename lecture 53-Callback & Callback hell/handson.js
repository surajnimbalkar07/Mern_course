//After 4 seconds, which img will print
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

function displayNextImage() {
  console.log("Displaying:", images[currentIndex]);
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(displayNextImage, 2000);

/*After 2 seconds

currentIndex = 0

Logs → image1.jpg

currentIndex becomes 1

 After 4 seconds

currentIndex = 1

Logs → image2.jpg

currentIndex becomes 2*/

//why recursive settimeout preferred over setinterval
function recursiveTimer() {
  // task with variable execution time
  console.log("running...")
  setTimeout(recursiveTimer, 1000);
}

//setInterval schedules callbacks every 1000ms regardless of task duration so we dont use it
//Ans:
//Recursive setTimeout ensures the next execution runs only after the previous one completes, avoiding overlapping tasks and queue build-up.

//tell OP:
let interval;
let count=0;
interval=setInterval(()=>{
    count++;
    if(count>=2){
        clearInterval(interval)//clearInterval stops future executions, not the current one so will print "stage " when count==2
        console.log("stage")
    }
    
    console.log("tick ",count)
},50)
console.log("executed")

// executed
// tick  1
// stage
// tick  2
//reason: clearInterval stops future executions, not the current one 