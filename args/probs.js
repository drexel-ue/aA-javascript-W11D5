function argSum() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index];
    }
    console.log(sum);
}


function restSum(...args) {
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        sum += args[index];
    }
    console.log(sum);
}

// sum(1, 2, 3, 4, 5);

Function.prototype.myBind = function (object) {
    console.log(arguments);
    const bindArgs = [].slice.call(arguments, 1);
    return () => this.apply(object, bindArgs.concat(Array.from(arguments)));
};

// myFunction.call(lola)
// in this #call method "this" becomes lola
//  what eever gets passed into the first argument pecomes the "this"
// sniff.call(lola, "tommy", "mashu")
//  the arguments for this method will be paswed on in order
//sniff.call({name: "Toto:"}, "tommy")
//  will give access to this.name 


Function.prototype.myBind = function (ctx, ...bindArgs) {
    return (...callArgs) => {
        return this.apply(ctx, bindArgs.concat(callArgs));
    };
}

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true


function sumNums(numArgs) {
    const nums = [];
    return function _curriedSum(num) {
        nums.push(num);
        console.log(`current nums: [${nums}]`);
        if (nums.length === numArgs) {
            let sum = 0;
            for (let index = 0; index < nums.length; index++) {
                sum += nums[index];
            }
            console.log(`finished summimg: ${sum}`);
        } else {
            return _curriedSum;
        }
    }
}

// let a = sumNums(3);
// a = a(2);
// a = a(3);
// a = a(20);

Function.prototype.curry = function (numArgs) {
    const nums = [];

    return function _currySum(num) {
        nums.push(num);
        if (nums.lenth === numArgs) {
            for (i = 0; i < nums.length; i++) {
                let sum = 0;
                sum += nums[i];
            }
        } else {
            return _currySum
        }
    }
}

Function.prototype.callCurry = function (numArgs) {
    const nums = [];
    const fn = this;
    adder(nums)
    return function _currySum(num) {
        nums.push(num);
        if (nums.lenth === numArgs) {
            fn.call(nums);
        } else {
            return _currySum
        }
    }
}
function adder(nums) {
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

adder.curry(3);


Function.prototype.applyCurry = function (numArgs) {
    const nums = [];
    const fn = this;
    return function _currySum(num) {
        nums.push(num);
        if (nums.lenth === numArgs) {
            fn.apply(null, ...nums);
        } else {
            return _currySum
        }
    }
}


