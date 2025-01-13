/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var nums = nums.sort((a, b) => a - b);

    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right];

            if (nums[i] + sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
             
                left++;
                right--;
            }
            else if (nums[i] + sum > 0) {
                right--;
            } else {
                left++;
            }
        }
        
    }

    return result;
};

console.log(threeSum([1,-1,-1,0]));