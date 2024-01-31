
function check (input) {
    let array = Array.from(String(input), Number);
    if (array.length !== 6) {
        return 'wrong input';
    }
    let array1 = array.splice(3);
    let array2 = array.splice(-array.length);
    
    function getSum (input2) {
        let sum = 0;
        for (let i = 0 ; i < input2.length; i++) {
            sum += input2[i];
        }
        return sum;
    }
    
   return getSum(array1) === getSum(array2) ? 'true' : 'false';
    
}
console.log(check(123456));
console.log(check(7894561123));
console.log(check('abcdef'));
console.log(check(456123));
console.log(check(456456));
console.log(check([1,2,3,4,5,6]));
console.log(check({}));
console.log(check(12345));