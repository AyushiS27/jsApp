function solution(N, balanceArr, monthArr){

    let sum = 0, hashMap={}, month =12;
    //Split
    // monthArr = monthArr.map((ele) => {
    //     return +ele.split('-')[1];
    // })
    let ele;
    for(let i = 0; i < balanceArr.length; ++i){
        sum += balanceArr[i];
        if(balanceArr[i] <0 ){
            ele = +monthArr[i].split('-')[1];

            if(!(ele in hashMap)){
                hashMap[ele] = [];
            }
            hashMap[ele].push(balanceArr[i]);
        }
    }

    
    for(let i in hashMap){
        let l_sum = 0;
        if(hashMap[i].length >= 3){
            l_sum = Math.abs(hashMap[i].reduce((a,b) => a + b));
            if(l_sum >= 100){
                --month;
            };
        }
    }

    return sum - (5 * month);
}







console.log(solution(5, [1, 20, -100, -50, 100], ['01-01-2020', '01-04-2020', '10-01-2020', '11-04-2020']));

//Balance at the end of year
// If negative payment then user has credit card and balance of rs 5 per month will be deducted unless atleast Rs 100 txn is done in a month 3times



