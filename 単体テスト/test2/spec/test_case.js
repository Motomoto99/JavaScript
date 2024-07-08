describe("Number Range Validation", () => {
    it("TC-001 最小の素数", () => {
        expect(isPrime(2)).toBe(true)
    })
    it("TC-002 最小の数", () => {
        expect(isPrime(0)).toBe(false)
    })
    it("TC-003 上限の素数", () => {
        expect(isPrime(9973)).toBe(true)
    })
    it("TC-004 その近くの非素数", () => {
        expect(isPrime(9999)).toBe(false)
    })
    it("TC-005 典型的な素数", () => {
        expect(isPrime(5)).toBe(true)
    })
    it("TC-006 典型的な非素数", () => {
        expect(isPrime(4)).toBe(false)
    })
    it("TC-007 最小値未満の値", () => {
        expect(()=>{isPrime(-1)}).toThrowError('0から9999までの値を入力してください。')
    })
    it("TC-008 最大値を超える値", () => {
        expect(()=>{isPrime(10000)}).toThrowError('0から9999までの値を入力してください。')
    })
})