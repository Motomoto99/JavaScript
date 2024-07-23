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
    it("TC-006: YYYYに英字が含まれている", function(){
        expect(checkDate("ABCD0520")).toBe(3)
    })
    it("TC-007: MMに英字が含まれている", function(){
        expect(checkDate("2003AB20")).toBe(3)
    })
    it("TC-008: DDに英字が含まれている", function(){
        expect(checkDate("200305AB")).toBe(3)
    })
    it("TC-009: YYYYの下限を超えている", function(){
        expect(checkDate("00000101")).toBe(3)
    })
    it("TC-010: 日付の範囲の下限と等しい、MMの下限と等しい、1月の下限と等しい", function(){
        expect(checkDate("00010101")).toBe(0)
    })
    it("TC-011: 日付の範囲の上限と等しい、MMの上限と等しい、12月の上限と等しい", function(){
        expect(checkDate("29991231")).toBe(0)
    })
    it("TC-012: YYYYの上限を超えている", function(){
        expect(checkDate("30000101")).toBe(3)
    })
    it("TC-013: MMの下限を超えている", function(){
        expect(checkDate("20030020")).toBe(3)
    })
    it("TC-014: MMの上限を超えている", function(){
        expect(checkDate("20031320")).toBe(3)
    })
    it("TC-015: 1月の下限を超えている", function(){
        expect(checkDate("20030100")).toBe(3)
    })
    it("TC-016: 1月の上限と等しい", function(){
        expect(checkDate("20030131")).toBe(0)
    })
    it("TC-017: 1月の上限を超えている", function(){
        expect(checkDate("20030132")).toBe(3)
    })
    it("TC-018: 2月の下限を超えている", function(){
        expect(checkDate("20030200")).toBe(3)
    })
    it("TC-019: 2月の下限と等しい", function(){
        expect(checkDate("20030201")).toBe(0)
    })
    it("TC-020: 2月の上限と等しい", function(){
        expect(checkDate("20030228")).toBe(0)
    })
    it("TC-021: うるう年と間違えている", function(){
        expect(checkDate("20030229")).toBe(4)
    })
    it("TC-022: うるう年の上限と等しい", function(){
        expect(checkDate("20040229")).toBe(0)
    })
    it("TC-023: うるう年の上限と超えている", function(){
        expect(checkDate("20040230")).toBe(3)
    })
    it("TC-024: 3月の下限を超えている", function(){
        expect(checkDate("20030300")).toBe(3)
    })
    it("TC-025: 3月の下限と等しい", function(){
        expect(checkDate("20030301")).toBe(0)
    })
    it("TC-026: 3月の上限と等しい", function(){
        expect(checkDate("20030331")).toBe(0)
    })
    it("TC-027: 3月の上限を超えている", function(){
        expect(checkDate("20030332")).toBe(3)
    })

    it("TC-028: 4月の下限を超えている", function(){
        expect(checkDate("20030400")).toBe(3)
    })
    it("TC-029: 4月の下限と等しい", function(){
        expect(checkDate("20030401")).toBe(0)
    })
    it("TC-030: 4月の上限と等しい", function(){
        expect(checkDate("20030430")).toBe(0)
    })
    it("TC-031: 4月の上限を超えている", function(){
        expect(checkDate("20030431")).toBe(3)
    })

    it("TC-032: 5月の下限を超えている", function(){
        expect(checkDate("20030500")).toBe(3)
    })
    it("TC-033: 5月の下限と等しい", function(){
        expect(checkDate("20030501")).toBe(0)
    })
    it("TC-034: 5月の上限と等しい", function(){
        expect(checkDate("20030531")).toBe(0)
    })
    it("TC-035: 5月の上限を超えている", function(){
        expect(checkDate("20030532")).toBe(3)
    })

    it("TC-036: 6月の下限を超えている", function(){
        expect(checkDate("20030600")).toBe(3)
    })
    it("TC-037: 6月の下限と等しい", function(){
        expect(checkDate("20030601")).toBe(0)
    })
    it("TC-038: 6月の上限と等しい", function(){
        expect(checkDate("20030630")).toBe(0)
    })
    it("TC-039: 6月の上限を超えている", function(){
        expect(checkDate("20030631")).toBe(3)
    })

    it("TC-040: 7月の下限を超えている", function(){
        expect(checkDate("20030700")).toBe(3)
    })
    it("TC-041: 7月の下限と等しい", function(){
        expect(checkDate("20030701")).toBe(0)
    })
    it("TC-042: 7月の上限と等しい", function(){
        expect(checkDate("20030731")).toBe(0)
    })
    it("TC-043: 7月の上限を超えている", function(){
        expect(checkDate("20030732")).toBe(3)
    })

    it("TC-044: 8月の下限を超えている", function(){
        expect(checkDate("20030800")).toBe(3)
    })
    it("TC-045: 8月の下限と等しい", function(){
        expect(checkDate("20030801")).toBe(0)
    })
    it("TC-046: 8月の上限と等しい", function(){
        expect(checkDate("20030831")).toBe(0)
    })
    it("TC-047: 8月の上限を超えている", function(){
        expect(checkDate("20030832")).toBe(3)
    })

    it("TC-048: 9月の下限を超えている", function(){
        expect(checkDate("20030900")).toBe(3)
    })
    it("TC-049: 9月の下限と等しい", function(){
        expect(checkDate("20030901")).toBe(0)
    })
    it("TC-050: 9月の上限と等しい", function(){
        expect(checkDate("20030930")).toBe(0)
    })
    it("TC-051: 9月の上限を超えている", function(){
        expect(checkDate("20030931")).toBe(3)
    })

    it("TC-052: 10月の下限を超えている", function(){
        expect(checkDate("20031000")).toBe(3)
    })
    it("TC-053: 10月の下限と等しい", function(){
        expect(checkDate("20031001")).toBe(0)
    })
    it("TC-054: 10月の上限と等しい", function(){
        expect(checkDate("20031031")).toBe(0)
    })
    it("TC-055: 10月の上限を超えている", function(){
        expect(checkDate("20031032")).toBe(3)
    })

    it("TC-056: 11月の下限を超えている", function(){
        expect(checkDate("20031100")).toBe(3)
    })
    it("TC-057: 11月の下限と等しい", function(){
        expect(checkDate("20031101")).toBe(0)
    })
    it("TC-058: 11月の上限と等しい", function(){
        expect(checkDate("20031130")).toBe(0)
    })
    it("TC-059: 11月の上限を超えている", function(){
        expect(checkDate("20031131")).toBe(3)
    })

    it("TC-060: 12月の下限を超えている", function(){
        expect(checkDate("20031200")).toBe(3)
    })
    it("TC-061: 12月の下限と等しい", function(){
        expect(checkDate("20031201")).toBe(0)
    })
    it("TC-062: 12月の上限を超えている", function(){
        expect(checkDate("20031232")).toBe(3)
    })
})