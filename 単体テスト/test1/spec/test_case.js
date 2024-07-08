describe("Number Range Validation", () => {
    it("TC-001 数値が範囲内にある場合", () => {
        expect(isNumberInRange(5,1,10)).toBe(true)
    })
    it("TC-002 数値が範囲の上限に等しい場合", () => {
        expect(isNumberInRange(10,1,10)).toBe(true)
    })
    it("TC-003 数値が範囲の下限に等しい場合", () => {
        expect(isNumberInRange(1,1,10)).toBe(true)
    })
    it("TC-004 数値が範囲より小さい場合", () => {
        expect(isNumberInRange(0,1,10)).toBe(false)
    })
    it("TC-005 数値が範囲より大きい場合", () => {
        expect(isNumberInRange(11,1,10)).toBe(false)
    })
    it("TC-006 引数 number が数値でない場合", () => {
        expect(isNumberInRange("5",1,10)).toBe(false)
    })
    it("TC-007 引数 min が数値でない場合", () => {
        expect(isNumberInRange(5,"1",10)).toBe(false)
    })
    it("TC-008 引数 max が数値でない場合", () => {
        expect(isNumberInRange(5,1,"10")).toBe(false)
    })
    it("TC-009 引数のうち1つが undefined の場合", () => {
        expect(isNumberInRange(5,1,undefined)).toBe(false)
    })
    it("TC-010 引数がすべて undefined の場合", () => {
        expect(isNumberInRange(undefined,undefined,undefined)).toBe(false)
    })
    it("TC-011 数値が範囲の下限より1小さい場合", () => {
        expect(isNumberInRange(0,1,10)).toBe(false)
    })
    it("TC-012 数値が範囲の上限より1大きい場合", () => {
        expect(isNumberInRange(11,1,10)).toBe(false)
    })
    it("TC-013 引数 min が負の数の場合", () => {
        expect(isNumberInRange(-5,-10,0)).toBe(true)
    })
    it("TC-014 引数 max が負の数の場合", () => {
        expect(isNumberInRange(-5,-10,-1)).toBe(true)
    })
    
})