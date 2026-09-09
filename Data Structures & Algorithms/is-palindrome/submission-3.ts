class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        if (s.length === 0) return true
        let right = s.length - 1
        for(let i = 0; i < s.length; i++) {
            if (i === right || i > right) return true
            if (s[i] !== s[right]) {
                return false
            }
            right--
        }
    }
}
