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
    it("TC-006: 数字と英字を含む時の戻り値が正しいか確認する", function(){
        expect(checkDate("1A2B3C4D")).toBe(3)
    })
    it("TC-007: 全て英字の時の戻り値が正しいか確認する", function(){
        expect(checkDate("ABCDEFGH")).toBe(3)
    })
    it("TC-008: 英字を1つでも含む時の戻り値が正しいか確認する", function(){
        expect(checkDate("1234567A")).toBe(3)
    })
    it("TC-009: 年が範囲より小さい時の戻り値が正しいか確認する", function(){
        expect(checkDate("00001231")).toBe(3)
    })
    it("TC-010: 年が範囲より大きい時の戻り値が正しいか確認する", function(){
        expect(checkDate("30000101")).toBe(3)
    })
    it("TC-011: 月が範囲より小さい時の戻り値が正しいか確認する", function(){
        expect(checkDate("20030001")).toBe(3)
    })
    it("TC-012: 月が範囲より大きい時の戻り値が正しいか確認する", function(){
        expect(checkDate("20031301")).toBe(3)
    })
    it("TC-013: 日が範囲より小さい時の戻り値が正しいか確認する", function(){
        expect(checkDate("20030500")).toBe(3)
    })
    it("TC-014: 日が範囲より大きい時の戻り値が正しいか確認する", function(){
        expect(checkDate("20030532")).toBe(3)
    })
    it("TC-015: うるう年の誤りの時の戻り値が正しいか確認する", function(){
        expect(checkDate("20030229")).toBe(3)
    })
    it("TC-016: うるう年2月の日が範囲より大きい時の戻り値が正しいか確認する", function(){
        expect(checkDate("20240230")).toBe(3)
    })
    it("TC-017: 日付の上限に等しい時の戻り値が正しいか確認する", function(){
        expect(checkDate("29991231")).toBe(0)
    })
    it("TC-018: 日付の下限に等しい時の戻り値が正しいか確認する", function(){
        expect(checkDate("00010101")).toBe(0)
    })
    it("TC-019: 日付が範囲内の時の戻り値が正しいか確認する", function(){
        expect(checkDate("20030520")).toBe(0)
    })
    it("TC-020: うるう年2月の日の上限と等しい時の戻り値が正しいか確認する", function(){
        expect(checkDate("20240229")).toBe(0)
    })
    it("TC-021: うるう年ではない年の2月の日の上限に等しい時の戻り値が正しいか確認する", function(){
        expect(checkDate("20230228")).toBe(0)
    })
})