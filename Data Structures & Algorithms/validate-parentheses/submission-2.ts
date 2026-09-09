class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const neededPair = []
        for (const c of s) {
            if (c === '(') neededPair.push(')')
            if (c === '{') neededPair.push('}')
            if (c === '[') neededPair.push(']')
            if (c === ')' || c === '}' || c === ']') {
                if (neededPair.pop() !== c) return false  
            }
        }
        if (neededPair.length > 0) return false
        return true
    }
}
