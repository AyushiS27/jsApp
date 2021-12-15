// function createMiddleware() {
//     let resultArr = [];
//     let resultArrPromise = [];
//     //let resolveState = '';
//     function createPromise(fn, ayu, args){
//         let self = this;
//         return new Promise((resolve, reject) => {
//             //console.log("This", this);
//             fn.apply(self, args);
//             this.resolveState = resolve;
//         })
//     }
//     return {
//         add: (fn) => {
//             resultArr.push(fn);
//         },
//         execute: async(arg) => {
//              //console.log("Res H", resultArr);
//             resultArrPromise.push(...resultArr);

//             console.log("Res NEW", resultArrPromise);
//             //let i = 0;
//             const done = () => {
             
//                 this.resolveState && this.resolveState();
//             }

//             // while(i < resultArr.length){
                
//             //     let resp = await createPromise(resultArr[i], null, [arg, done]);    
//             //     //console.log("Task Done ", i);
//             //     ++i;
//             // }
//         }
//     }
// }
// let middleware = createMiddleware()
// middleware.add((data, done) => {
//     //setTimeout(() => {
//         console.log(data, 1)
//         done()
//     //})
// })
// middleware.add((data, done) => {
//     console.log(data, 2)
//     done()
// })
// middleware.execute("Ayushi")
// middleware.execute("Rama")



/**
 * 
 * Should print 
 * Ayushi 1
 * Ayushi 2
 * Rama 1
 * Rama 2
 */
 function createPromise(...data){
    return new Promise((resolve, reject) => {
        // setTimeout(()=>{
        //     console.log(data);
        //     resolve();
        // }, 1000);
        //console.log("Data", data);
        data[0].apply(this, [...data[1], ()=>{
            resolve();
        }]);
        
    })
}

async function printPrimise(resultArr, arg){
    //console.log("result raa", resultArr);
    for(let i = 0; i < resultArr.length; ++i){
        await createPromise(resultArr[i], arg);
    }
}

function createMiddleware(){
    var lastPromise = '';
    let resultArr = [];

    const add = (fn) => {
        resultArr.push(fn);
    }

    const execute = (arg) => {
        if(!lastPromise){
            lastPromise = printPrimise(resultArr, arg);
        }else{
            lastPromise = lastPromise.then(() => {
                printPrimise(resultArr, arg);
            })
        }
    }

    return {
        add: add,
        execute: execute
    }
}

let middleware = createMiddleware()
middleware.add((data, done) => {
    setTimeout(() => {
        console.log(data, 1)
        done && done()
    }, 1000);
})
middleware.add((data, done) => {
    console.log(data, 2)
    done && done()
})

middleware.execute(['Ayushi']);
middleware.execute(['Rama']);

//middleware.execute(['Rama1', 'Rama2']);