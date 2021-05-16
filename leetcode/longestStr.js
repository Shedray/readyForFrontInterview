/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right =1
    if (s.length<2){
        return s.length
    }
    let max =0
    let count = 1
    while (right<s.length){
        let t =s.slice(left,right).indexOf(s[right])
        if (t==-1){
            count ++
            right ++
        }else {
            count = 1
            left = left+t+1
            right = left + 1
        }
        max = Math.max(count,max)
    }
    return max
};
// let s = "abcabcbb"
// let s = "bbbbb"
// let s = "pwwkew"
let s = "awaf"
console.log(lengthOfLongestSubstring(s))
