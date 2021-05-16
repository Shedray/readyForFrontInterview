/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let tmp = nums.indexOf(target-nums[i])
        if (tmp>-1&&tmp!=i){
        //    证明找到那个位置了
            if (tmp>i){
                return [i,tmp]
            }else {
                return [tmp,i]
            }
        }
    }
};
console.log(twoSum([3,3],6))
console.log(twoSum([3,2,4],6))
console.log(twoSum([2,7,11,15],22))
