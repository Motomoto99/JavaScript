describe("日付チェック関数",function(){
    it("TC-001: NULLの時に戻り値が正しいか確認する", function(){
        expect(checkDate(null)).toBe(1)
    })
    it("TC-002: 空文字列の時に戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(1)
    })
    it("TC-003: 1文字の時に戻り値が正しいか確認する", function(){
        expect(checkDate("1")).toBe(2)
    })
    it("TC-004: 文字列が範囲より小さい時の戻り値が正しいか確認する", function(){
        expect(checkDate("1234010")).toBe(2)
    })
    it("TC-005: 文字列が範囲より大きい時の戻り値が正しいか確認する", function(){
        expect(checkDate("123401010")).toBe(2)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(3)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(0)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(0)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(0)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(0)
    })
    it("TC-006: NULLが引数の時の戻り値が正しいか確認する", function(){
        expect(checkDate("")).toBe(0)
    })
})