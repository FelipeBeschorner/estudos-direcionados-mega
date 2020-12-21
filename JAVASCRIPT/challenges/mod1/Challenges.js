/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//test data 1
//1.
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
//2.
let markBmi = (markMass / markHeight ** 2);
let JohnBmi = (johnMass / johnHeight ** 2);
//3.
let markHigherBMI = markBmi > JohnBmi;
console.log(markHigherBMI);

//test data 2
//1.
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
//2.
markBmi = (markMass / markHeight ** 2);
johnBmi = (johnMass / johnHeight ** 2);
//3.
markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �

GOOD LUCK �
*/

//1.
if (markHigherBMI) { console.log("Mark's BMI is higher than John's!"); }
else { console.log("John's BMI is higher than Mark's!"); }

//2.
if (markHigherBMI) { console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`); }
else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}
/*
Coding Challenge #3
 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 
GOOD LUCK �
*/
//data 1

let ds1 = 96;
let ds2 = 108;
let ds3 = 89;
let ks1 = 88;
let ks2 = 91;
let ks3 = 110;
let da = (ds1 + ds2 + ds3) / 3;
let ka = (ks1 + ks2 + ks3) / 3;
console.log(da, ka);

if (da > ka) { console.log(`Dolphins wins with ${da} average score!`) }
else if (da == ka) { `Is a draw! the avarege score is ${da}.` }
else { console.log(`Koalas wins with ${ka} average score!`) }

//data bonus 1

ds1 = 97;
ds2 = 112;
ds3 = 101;
ks1 = 109;
ks2 = 95;
ks3 = 123;
da = (ds1 + ds2 + ds3) / 3;
ka = (ks1 + ks2 + ks3) / 3;
console.log(da, ka);

if (da > ka && da > 100) { console.log(`Dolphins wins with ${da} average score!`) }
else if (da == ka) { console.log(`Is a draw! the avarege score is ${da}.`) }
else if (ka > da && ka > 100) { console.log(`Koalas wins with ${ka} average score!`) }
else { console.log(`No one wins! the score was less than 100.`) }

//data bonus 2

ds1 = 97;
ds2 = 112;
ds3 = 101;
ks1 = 109;
ks2 = 95;
ks3 = 106;
da = (ds1 + ds2 + ds3) / 3;
ka = (ks1 + ks2 + ks3) / 3;
console.log(da, ka);

if (da > ka && da > 100) { console.log(`Dolphins wins with ${da} avera ge score!`) }
else if (da == ka && da > 100) { console.log(`Is a draw! the avarege score is ${da}.`) }
else if (ka > da && ka > 100) { console.log(`Koalas wins with ${ka} average score!`) }
else { console.log(`No one wins! the scores was less than 100.`) }

/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �

GOOD LUCK �
*/
const tip15 = 0.15;
const tip20 = 0.20;

let value = 275;

let tip = value >= 50 && value <= 300 ? value * tip15 : value * tip20;
let ttl = tip + value;


console.log(`The bill was ${value}, the tip was ${tip}, and the total value ${ttl}`);

value = 40;

tip = value >= 50 && value <= 300 ? value * tip15 : value * tip20;
ttl = tip + value;

console.log(`The bill was ${value}, the tip was ${tip}, and the total value ${ttl}`);

value = 430;

tip = value >= 50 && value <= 300 ? value * tip15 : value * tip20;
ttl = tip + value;

console.log(`The bill was ${value}, the tip was ${tip}, and the total value ${ttl}`);