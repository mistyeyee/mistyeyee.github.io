
function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let mean = sum / 3;
    return mean;
}

function createSentence(num, noun) {
    let sen = "On average, a Berkeley student has" + " " + num + " " + noun + " " + "squirrels.";
    return sen;
}

function getRandomNum (max) {
    return Math.random() * max;
}


let x = getRandomNum (20);
let y = getRandomNum (10);
let z = getRandomNum (13);


let avg = averageThreeNumbers(x,y,z);
let noun = 'llama';
let sentence = createSentence(avg, noun);

console.log(sentence);

