class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        const sMap = new Map()
        const tMap = new Map()
        const frequency = (str: string, map: Map<string, number>) => {
            for (let s of str) {
                const count = map.get(s) ?? 0
                map.set(s, count + 1)
            }
        }
        frequency(s, sMap)
        frequency(t, tMap)
        
        for (const key of sMap.keys()) {
            if (!(tMap.has(key) && tMap.get(key) === sMap.get(key))) return false
        }
        return true
    }
}
