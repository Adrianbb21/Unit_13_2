// example of a function declaration 
function greet(){

}

//example of a function expression 

// const add = function(x,y) {
//     return x + y;
// };

// example of the above expression written as an arrow function 

const add = (x,y) => {
    return x + y;
};

//another example

[2, 3, 6, 7, 8, 99, 104, 23].reduce(function(max, currNum){
    Math.max(max,currNum);
});

//example of taking the above expression and truning it into an arrow function

[2,3,6,78,99,104,23].reduce((max, currNum) => {
    return Math.max(max, currNum);
});


//arrow function shortcuts

//no parens, if you only have one paramter 

[1, 2, 3, 4, 5].forEach(n => {
    console.log(n * 10);
});

//arrow function with no parens at all

const greet = () => {
    console.log('HELLO!!')
}

//implecent return

let nums = [1, 2, 3];

let arrSquared = nums.map(n => n ** 2);

//another example 
//this can be rewritten as 

[1, 2, 3, 4, 5, 6].filter(function(num){
    return num % 2 === 0 
})

//this

[1, 2, 3, 4, 5, 6].filter((num) => num % 2 == 0);

//another example

const double = (n) => (n) => {
    return n * 2;
}

const secondDouble = (n) => n * 2;

//an example of where this wouldnt work

[1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
    if(n % 2 === 0) {
        return 'even'
    }
     return 'odd'
})

//if you want to turn this into an implicit return to make it simplier, without the return portion
//it will look like this 

[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (n % 2 === 0 ? 'even' : 'odd'));


//another example
//no implicit returns

// const dailyRainTotals = [ [1.2, 0.35, 2.2], [1.7, 0.6, 0.1 ], [2.5, 0.9, 1.5] ];
// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((sum,inchesOfRain) => {
//         return sum + inchesOfRain;
//     });
// });

const dailyRainTotals = [ 
    [1.2, 0.35, 2.2], 
    [1.7, 0.6, 0.1 ], 
    [2.5, 0.9, 1.5] 
];

dailyRainTotals.map((hourlyRainTotals) => (
    hourlyRainTotals.reduce((sum,inchesOfRain) => sum + inchesOfRain)));


//arrow function gotchas

const makeMath = (num) => {
    return {
        square : num * num,
        double : num * 2
    };
};

//implicit retrun version

const secondMakeMath = (num) => ({
        square : num * num,
        double : num * 2
});

//arrow functions & this
//no arrow function

const cat = {
    name : 'Bubs',
    meow: function(){
        return `${this.name} says MEOW`;
    }
};

//the same expression wont work with an arrow function, the function below doesnt return the correct value
const dog = {
    name: 'Bentley',
    woof: () => {
        return `${this.name} says WOOF!!`
    }
};

