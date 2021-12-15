
ball.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
  
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
  
    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };




// function sortable(hasMap){

//     let sortArr = [];

//     for(let i in hasMap){
//         sortArr.push({ele_key: i, val: hasMap[i]});
//     }
//     console.log("Sort", sortArr);

//     let res= sortArr.sort((a, b) => {
//         return b.val - a.val;
//     })

//     return res;
// }


// function solution(N, A, B) {
//     // write your code in JavaScript (Node.js 8.9.4)

//     let hashMap = {}, counter = N, max_sum = 0;
//     let resultMap =  {};
//    let wt = {};

//     for(let i = 1; i < N; ++i){
//         resultMap[i] = new Array();
//     }

//     // TC - O(n)
//     for(let i = 0; i < A.length; ++i){
//         if(!(A[i] in hashMap)){
//             hashMap[A[i]] = 1;
//         }
//         else{
//             ++hashMap[A[i]];
//         }

//         if(!(B[i] in hashMap)){
//             hashMap[B[i]] = 1;
//         }
//         else{
//             ++hashMap[B[i]];
//         }
//     }


//     // console.log("Result Map", sortable(hashMap));

//     // let sortMap = sortable(hashMap); Object(nlogn)

//     // for(let i in sortMap){
//     //     max_sum += counter * sortMap[i]["val"];
//     //     --counter;
//     // }

//     // console.log("Counter", wt);
//     for(let j in hashMap){
//         resultMap[hashMap[j]].push(j);
//     }

//     for(let i = N-1; i >=0; --i){
//         let arr = resultMap[i];
//         if(arr){
//             arr.map((ele) => {
//                 wt[ele] = counter--;
//             })
//         }
//     }
//     for(let i = 0; i < N; ++i){
//         max_sum += wt[A[i]] + wt[B[i]];
//     }

//     return max_sum;
// }



// console.log(solution(5, [2, 2, 1, 2], [1, 3, 4, 4]));