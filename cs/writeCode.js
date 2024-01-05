// 1) Sum Zero  runtime O(n^2)   spacetime O(1)

const zeroSum = array => {
    for(i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === 0){
                return true
            }
        }
    } return false
}

console.log(zeroSum([1, 2, 3, -4, -1]))


// 2) Unique Characters  runtime O(n) spacetime O(1)
const uniqueChars = str => {
    let chars = []
    for(i = 0; i < str.length; i++){
        if(chars.includes(str[i])){
            return false
        } else {
            chars.push(str[i])
        }

    } return true
}

console.log(uniqueChars('apple'))

// 3) Pangram Sentence runtime O(n) spacetime O(1)

const pangram = sent => {
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    sent = sent.toLowerCase()
    for(i = 0; i < sent.length; i++ ){
      if(alpha.includes(sent[i])){
        alpha.splice(alpha.indexOf(sent[i]), 1)
        if(alpha.length === 0){
          return true
          }
        }
      }
    return false
    }

console.log(pangram('The quaint monarchy of zebra gods will evaporate back to Jupiter X'))


// 4) Longest Word   runtime O(n) spacetime O(1)

const longestWord = arr =>{
    let longest = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length
        }
    } return longest
}

console.log(longestWord(['popcorn', 'popcarrots', 'popcucumber']))
