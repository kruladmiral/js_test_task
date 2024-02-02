
function check (input) {
    let array = Array.from(String(input), Number);
    if (array.length !== 6) {
        return 'wrong input';
    }
    let array1 = array.splice(3);

    function getSum (input2) {
        let sum = 0;
        for (const i of input2) {
            sum += i;
        }
        return sum;
    }
    
   return getSum(array1) === getSum(array) ? true : false;
    
}
console.log(check(123456));
console.log(check(7894561123));
console.log(check('123123'));
console.log(check(456123));
console.log(check(456456));
console.log(check([1,2,3,4,5,6]));
console.log(check({}));
console.log(check(12345));
console.log(check());