/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = ""
    for(let i=0;i<s.length;i++){
        let s1 = test(s,i,i)
        let s2 = test(s,i,i+1)
        console.log(i,s1,s2)
        max = max.length>=s1.length?max:s1
        max = max.length>=s2.length?max:s2

    }
    return max
};
function test(s,left,right){
    let a=""
    if (left ==right){
        a=s[left]
        left--
        right++

    }
    while(left>=0&&right<s.length){
        if (s[left]==s[right]){
            // console.log(left,right)
            a = s[left]+a+s[right]
            right++
            left--
        }else {
           return a
        }
    }
    return a
}
let s = "babad"
// let s = "abccba"
console.log(longestPalindrome(s))
// console.log(test("bb",0,1))
