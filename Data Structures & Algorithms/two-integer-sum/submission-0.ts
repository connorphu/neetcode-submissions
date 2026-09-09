class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const myMap = new Map()
        let smallIndex
        let bigIndex

        for (let i = 0; i < nums.length; i++) {
            if (myMap.has(nums[i])) {
                smallIndex = myMap.get(nums[i])
                bigIndex = i
            }
            myMap.set(target - nums[i], i)
        }
        return [smallIndex, bigIndex]
    }
}
