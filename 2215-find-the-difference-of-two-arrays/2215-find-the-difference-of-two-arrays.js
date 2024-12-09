/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < nums1.length; i++) {
        if (!map1.has(nums1[i])) {
            map1.set(nums1[i], nums1[i]);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!map2.has(nums2[i])) {
            map2.set(nums2[i], nums2[i]);
        }

        if (map1.has(nums2[i])) {
            map1.delete(nums2[i]);
        }
    }

    for (let i = 0; i < nums1.length; i++) {
        if (map2.has(nums1[i])) {
            map2.delete(nums1[i]);
        }
    }


    const valuesArray1 = Array.from(map1.values());
    const valuesArray2 = Array.from(map2.values());

    return [valuesArray1, valuesArray2];
};