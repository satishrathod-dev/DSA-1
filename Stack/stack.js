// Reverse a String:
// "the sky is blue" => blue is sky the

const reverseWords = function (s) {
    const splitS = s.split(" ");
    const stack = [];

    for(let i of splitS){
        stack.push(i);
    }

    let finals = "";

    while(stack.length){
        const current = stack.pop();
        
        if(current) {
            finals += " " +current;
        }
    }
    return finals.trim();
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good       example"));