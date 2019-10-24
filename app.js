
function setup() {
  createCanvas(640, 480);
}

function draw() {
  noStroke();
  fill(255,0,0);
  ellipse(100, 100, 150, 150); // draws a circle at x,y (100,100) with size w,h (150,150)
  fill(0,255,0);
  rect(300, 300, 150, 150); //draws a rectangle at x,y (300,300) with size w,h (150,150)
  stroke(0,0,255);
  line(100, 225, 400, 225); //draws  a line starting at x,y (100,225) ending at x,y (400, 225)
}

function day1AM() {
  // Print text to the browser's console
  console.log("Hello"); //Text must be put in quotation marks
  //console.log(Hello); //results in error
  console.log('Hello'); //Double and single quotes both work

  var firstName = 'Marc';
  var lastName;
  console.log(firstName);
  console.log(lastName);
  console.log(typeof(firstName));
  console.log(typeof(lastName));

  var age = 38;
  var heightInInches = 75;
  var weight = 192.5;
  var likesPizza = true;
  var hasTattoos = false;
  console.log(typeof(age));
  console.log(typeof(weight));
  console.log(typeof(likesPizza));

  lastName = 'Hauschildt';
  age = age + 1;
  age += 1;
  weight = weight - 1;
  weight -= 0.25;
  console.log(firstName + lastName);
  console.log(firstName + " " + lastName);
  console.log(firstName + " " + lastName + " will be " + age + " years old in 2 years and may weigh " + weight + " pounds after going on a diet.");

  console.log(5 * 3);
  console.log(5 / 3);
  console.log(Math.floor(5 / 3));
  console.log(5 % 3);
  console.log(5 - 2 * 8 + 3 / 4);
  console.log((5 - 2) * (8 + 3) / 4);

  var feet = Math.floor(heightInInches / 12);
  var inches = heightInInches % 12;
  console.log(firstName + " is " + feet + " feet " + inches + " inches tall." );
}

day1AM();