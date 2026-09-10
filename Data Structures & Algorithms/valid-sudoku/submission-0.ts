class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({length: 9}, () => new Set<string>())
        const cols = Array.from({length: 9}, () => new Set<string>())
        const squares = Array.from({length: 9}, () => new Set<string>())
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                const val = board[i][j]
                if (val === '.') continue
                const squareId = Math.floor(i/3) * 3 + Math.floor(j/3)
                if (rows[i].has(val) || cols[j].has(val) || squares[squareId].has(val)) return false
                rows[i].add(val)
                cols[j].add(val)
                squares[squareId].add(val)
            }
        }
        return true
    }
}
