
function sortable(hasMap){

    let sortArr = [];

    for(let i in hasMap){
        sortArr.push({ele_key: i, val: hasMap[i]});
    }
    console.log("Sort", sortArr);

    let res= sortArr.sort((a, b) => {
        return b.val - a.val;
    })

    return res;
}


function solution(N, A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    let hashMap = {}, counter = N, max_sum = 0;
    let resultMap = {};

    for(let i = 0; i < A.length; ++i){
        if(!(A[i] in hashMap)){
            hashMap[A[i]] = 1;
        }
        else{
            ++hashMap[A[i]];
        }

        if(!(B[i] in hashMap)){
            hashMap[B[i]] = 1;
        }
        else{
            ++hashMap[B[i]];
        }
    }

    
    for(let j in hashMap){
        if(!resultMap[hashMap[j]]){
            resultMap[hashMap[j]] = [];
        }
        resultMap[hashMap[j]].push(j);
    }

     for(let i = N-1; i >=0; --i){
        let arr = resultMap[i];
        if(arr){
            arr.forEach(() => {
                max_sum += i * counter;
                counter--;
            })
        }
    }

    return max_sum;
}



console.log(solution(5, [2, 2, 1, 2], [1, 3, 4, 4]));