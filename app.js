
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

  print('Hello world!');
  print(5 * 10);

  var temp = f2c(32);
  print(temp);
  temp = f2c(212);
  print(temp);

  print(5 > 2); //true
  print(5 < 2); //false
  print(5 >= 5); //true
  // not equal to
  print(5 != 2); //true
  // equal to
  print(5 == 5); //true
  // If you use 2 equal signs it compares value but not data type
  print(5 == "5"); //true
  // If you use 3 equal signs it compares value and data type
  print(5 === "5"); //false

  print("Casino " + canIGoToCasino(age, "IA")); //true
  age = 19;
  print("Casino " + canIGoToCasino(age, "IA")); //false
  print("Casino " + canIGoToCasino(age, "MN")); //true

  print(temp >= 40 && temp <= 85) // false when temp is 100
  temp = 60;
  print(temp >= 40 && temp <= 85) // true
  print(likesPizza || hasTattoos);
  likesPizza = false;
  print(likesPizza || hasTattoos); // true

  print(canIRideTheRollercoaster(feet, inches));
  feet = 4;
  print(canIRideTheRollercoaster(feet, inches)); // false
  inches = 6;
  print(canIRideTheRollercoaster(feet, inches)); // true

  print("I should wear " + whatToWear(100));
  print("I should wear " + whatToWear(70));
  print("I should wear " + whatToWear(40));
  print("I should wear " + whatToWear(10));

  var convertedTemp = fahrenheitConverter(212, "Celsius");
  print(convertedTemp);

  convertedTemp = fahrenheitConverter(212, "Kelvin");
  print(convertedTemp);

  convertedTemp = fahrenheitConverter(212, "Banana");
  print(convertedTemp);

}

day1AM();

function print(input) {
  console.log(input);
}

function f2c(temp) {
  return ((temp - 32) * (5 / 9));
}

function canIGoToCasino(age, state) {
  return age >= 21 && state == "IA" || age >= 18 && state == "MN";
}

function canIRideTheRollercoaster(ft, inch) {
  return ft > 4 || ft >= 4 && inch >= 6;
}

function whatToWear(temp) {
  if (temp >= 90) {
    return "swim suit and sandals";
  } else if (temp >= 65) {
    return "t-shirt and shorts";
  } else if (temp >= 40) {
    return "light jacket and jeans";
  } else {
    return "coat and boots";
  }
}

function fahrenheitConverter(temp, convertTo) {
  if (convertTo == "Celsius") {
    return f2c(temp);
  } else if (convertTo == "Kelvin") {
    return (temp - 32) * 5 / 9 + 273.15;
  } else {
    return "Invalid conversion";
  }
}
