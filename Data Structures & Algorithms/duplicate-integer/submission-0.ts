class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seenNum = new Set()
        for (const num of nums) {
            if (seenNum.has(num)) return true
            seenNum.add(num)
        }
        return false
    }
}
