/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    const benchmark = Math.floor(nums.length / 2);
    const occurances = {}

    for (let i = 0; i < nums.length; i++) {
        if (!occurances[nums[i]]) {
            occurances[nums[i]] = 1;
        } else {
            occurances[nums[i]] += 1;
        }
    }

    let foundKey = +Object.keys(occurances).find(key => occurances[key] > benchmark);
    return foundKey;

};