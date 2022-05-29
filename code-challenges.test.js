// ASSESSMENT 3: Coding Practical Questions with Jest

// const { identifier } = require("@babel/types")
// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// creat a describe it test called myNum and describe what the output should be then write the expected output

    // describe("myNum", () => {
    //     // explain what the cunctio is supposed to do
    //     it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    //     //    create the variables or the variables given that are supposed to be input into the funciton
    //         const fibLength1 = 6
    //         const fibLength2 = 10
    //     //    write the expected output of the function .toEqual the output given
    //         expect(myNum(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    //         expect(myNum(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    //     })
    // })

        // input a "yarn add jest" to creat a .json so that jest can be used to run the test.

// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//  I failed 

// ● myNum › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//     ReferenceError: myNum is not defined


// b) Create the function that makes the test pass.

    // create a function called myNum
    // will have an input of 6 and 10 from variables 
    //the function will create array of the same length as the variable given to it
    // the Array will start off empty
    // run a for loop to iterate through each index of the number and add the current number to the number at the previous index until the number of the given variable is reached
    // will output [1, 1, 2, 3, 5, 8] and [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    // const myNum = (fibSeq) => {
    //     let newArray= []

    //     for(let i = 0;i < fibSeq; i++){
    //         if(newArray[i] === 0) {
    //             newArray = 1
    //         } else if( newArray[1] === 0){
    //              newArray = newArray[0] + newArray[1]
    //         } else if(newArray[1] === 1){
    //             newArray = newArray[0] + newArray[1] 
    //         }else if( newArray[2] === 2){
    //             newArray = newArray[1] + newArray[2]
    //         }else if(newArray[3] === 3){
    //             newArray = newArray[2] + newArray[3]
    //         }else if(newArray[4] === 5){                                 <------- this is the function 
    //             newArray = newArray[3] + newArray[4]
    //         }else if(newArray[5] === 8){
    //             newArray = newArray[4] + newArray[5]
    //         }else if(newArray[6] === 13){
    //                     newArray = newArray[5] + newArray[6]
    //             } else if(newArray[7] === 21){
    //                     newArray = newArray[6] + newArray[7]
    //             } else if(newArray[8] === 34){
    //                 newArray = newArray[7] + newArray[8]
            
    //         }else{
    //              newArray = newArray
    //         }
    //     }  return newArray
    // }
        



// let arr = Array(fibLength2).fill(1)
    
//     console.log(arr)
// var some = 5
// var more = Array.from(some)
// console.log(some)
// console.log(more)


// **** I have tried som many things. Spent more than 4+ hours on this one. I can get eahc awnser, but it will only output one array and leave the other one empty. So righ tnow it only outputs fibLength1 but not the fibLength2. But I went back to comment out fibLength1 and fibLength2 shows. I can't figure out why it won't show me both at the samw time


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// crate a describe it test with the name of odds and how the expects out come of each arra with only odds from least to greatest.

    describe("odds", () => {
        // describes what the outcome is goingot be 
        it("expects out come of each arra with only odds from least to greates", () => {
            // write the arrays 
            const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
            const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
            // write the expected outcome of the arrays with only odds from least to greatest.
            expect(odds(fullArr1)).toEqual([-9, 7, 9, 199])
            expect(odds(fullArr2)).toEqual([-823, 7, 23])
        })
    })





// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// I failed the test.
// ● odds › expects out come of each arra with only odds from least to greates

// ReferenceError: odds is not defined


// b) Create the function that makes the test pass.

    // create a function called odds
    // the function will take in an empty array
    // we will create a new variabel with ans use  the .filter() from the hof to to call all the odd numbers from condicional to call only the odds numbers whch will be the ones divisible by 3
    // once we have the new numbers, use a sort to to order the numbers from least to greatest
    // output should be [-9, 7, 9, 199] and [-823, 7, 23]


    const odds = (array) => {
        let oddArr = array.filter(value => {
            if(typeof(value) % 3 === 0){
                    return array.sort((a, b) => a - b)
            }
        })
            return oddArr
      }

      
      
     


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
