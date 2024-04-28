//[-1, -2, -3, -4]

// Brute force solution:
// Time complexity: O(n^2);
// Space complexity : O(1);
/*
function maxSubarray(arr) {
    let maxSum  = arr[0];

    for(let i=0; i<arr.length; i++){
        let currentSum = 0;
        for(let j=i; j<arr.length; j++){
            currentSum = arr[i] + arr[j];
            if(currentSum > maxSum){
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
}*/

//Optimized solution:
// Time complexity: O(n);
// Space complexity : O(1);

function maxSubarray(arr) {
    let maxSum = arr[0];
    let sum = 0;
    let start = 0;
    let end = 0;
    let currentStart = 0;

    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        if(sum > maxSum){
            console.log("subarry is:" + arr);
            maxSum = sum;
            start = currentStart;
            end = i;
        }

        if(sum < 0){
            // console.log(i);
            sum=0;
            currentStart = i + 1;
        }
    }
    return {
        maxSum: maxSum,
        startIndex: start,
        endIndex: end
    };
}

// console.log(maxSubarray([1, 2 , 3, -2, 5]));
// console.log(maxSubarray([-1, -2, -3, -4]));
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 2, -5, 4]));
// console.log(maxSubarray([4, -1, 2, 2]));