class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0, best = 0
        const seen = new Set();
        for (let right = 0; right < s.length; right++) {
            while(seen.has(s[right])) {
                seen.delete(s[left])
                left++
            }
            seen.add(s[right])
            best = Math.max(best, right - left + 1)
        }
        return best
    }
}
