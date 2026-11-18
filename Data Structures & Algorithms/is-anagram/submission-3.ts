class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        const freq1 = new Map<string, number>()
        const freq2 = new Map<string, number>()
        const frequency = (s: string, map: Map<string,number>) => {
                for (const c of s) {
                const count = (map.get(c) ?? 0) + 1
                map.set(c, count)
            }
        }
        
        frequency(s, freq1)
        frequency(t, freq2)

        for (const key of freq1.keys()) {
            if (!(freq2.has(key) && freq2.get(key) === freq1.get(key))) return false
        }
        return true
    }
}
