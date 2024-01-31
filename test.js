
function check (input) {
    let array = Array.from(String(input), Number);
    if (array.length !== 6) {
        return 'wrong input';
    }
    let array1 = array.splice(3);
    let array2 = array.splice(input.length + 1);
    
    function getSum (input2) {
        let sum = 0;
        for (let i = 0 ; i < input2.length; i++) {
            sum += input2[i];
        }
        return sum;
    }
    
   return getSum(array1) === getSum(array2) ? 'true' : 'false';
    
}
console.log(check(1231234));