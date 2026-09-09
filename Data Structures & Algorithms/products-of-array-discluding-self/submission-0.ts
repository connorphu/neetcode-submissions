class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefixProduct = new Array(nums.length)
        const suffixProduct = new Array(nums.length)
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefixProduct[i] = 1
                suffixProduct[nums.length - 1] = 1
            } else {
                prefixProduct[i] = prefixProduct[i-1] * nums[i-1]
                suffixProduct[nums.length - (i+1)] = suffixProduct[nums.length - i] * nums[nums.length - i]
            }
        }

        const output = []
        for (let i = 0; i < nums.length; i++) {
            output.push(prefixProduct[i] * suffixProduct[i])
        }

        return output
    }
}
