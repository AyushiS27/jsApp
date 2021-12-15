function getNameById(id, callback) {
    // simulating async request
    const randomRequestTime = Math.floor(Math.random() * 100) + 200;
    console.log("Time", randomRequestTime);
    setTimeout(() => {
      callback("User" + id);
    }, randomRequestTime);
  }
  
  function mapLimit(inputs, limit, iterateeFn, callback) {
    // implement here
    let length = inputs.length;
    let count = 0;
    let results = [];
    let indexCount = 0;
    
      let executeNext = () => {
        if(count < length){
            count++;
            iterateeFn(inputs[count-1], myCB(count-1));
        }
        if(indexCount === length){
            callback(results);
        } 
    }
    
    for(let i = 0; i < limit; i++){
        console.log("Calling Execute");
        executeNext();
    }
    
  
    
    function myCB (index){
        return function(arg1){
          results[index] = arg1; 
          indexCount++; 
          console.log("Calling Execute 1");
          //executeNext();
        }
    }
    
  }
  
  mapLimit([1,2,3,4,5], 5, getNameById, (allResults) => {
    console.log(allResults) // ["User1", "User2", "User3", "User4", "User5"]
  });
  