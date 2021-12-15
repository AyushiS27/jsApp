/*Given a String remove all of the String pairs. Return the most simplified string.

Ex: Input: "abbarabbit" Output: "rait".*/


function simplifiedString(str){
    let hashMap = {}, result = [], resstr = '';

    for(let i = 0; i < str.length; ++i){
        if(!(str.charAt(i) in hashMap)){
            hashMap[str.charAt(i)] = 1;
        }
        else{
            ++hashMap[str.charAt(i)];
            if(hashMap[str.charAt(i)] % 2 == 0){
                delete hashMap[str.charAt(i)];
            }
        }
    }

    for(let j in hashMap){
        result.push(j);

    }


    return result.join('');
}


console.log(simplifiedString('abbarabbit'));