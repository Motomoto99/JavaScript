describe('Array Operations and Calculations', function() {
    describe('doubleNumbers', function() {
      it('配列内の数値を2倍にする', function() {
        const input = [1, 2, 3, 4];
        const expected = [2, 4, 6, 8];
        expect(doubleNumbers(input)).toEqual(expected);
      });
  
      it('空の配列を処理する', function() {
        const input = [];
        const expected = [];
        expect(doubleNumbers(input)).toEqual(expected);
      });
  
      it('負の数を含む配列を処理する', function() {
        const input = [-1, -2, -3, -4];
        const expected = [-2, -4, -6, -8];
        expect(doubleNumbers(input)).toEqual(expected);
      });
    });
  
    describe('filterEvenNumbers', function() {
      it('配列から偶数を抽出する', function() {
        const input = [1, 2, 3, 4, 5, 6];
        const expected = [2, 4, 6];
        expect(filterEvenNumbers(input)).toEqual(expected);
      });
  
      it('偶数が含まれていない配列を処理する', function() {
        const input = [1, 3, 5];
        const expected = [];
        expect(filterEvenNumbers(input)).toEqual(expected);
      });
  
      it('空の配列を処理する', function() {
        const input = [];
        const expected = [];
        expect(filterEvenNumbers(input)).toEqual(expected);
      });
    });
  
    describe('calculateTotal', function() {
      it('配列内の数値の合計を計算する', function() {
        const input = [1, 2, 3, 4];
        const expected = 10;
        expect(calculateTotal(input)).toBe(expected);
      });
  
      it('空の配列を処理する', function() {
        const input = [];
        const expected = 0;
        expect(calculateTotal(input)).toBe(expected);
      });
  
      it('負の数を含む配列を処理する', function() {
        const input = [-1, -2, -3, -4];
        const expected = -10;
        expect(calculateTotal(input)).toBe(expected);
      });
    });
  
    describe('findFirstNegative', function() {
      it('配列内の最初の負の数を見つける', function() {
        const input = [1, -2, 3, -4];
        const expected = -2;
        expect(findFirstNegative(input)).toBe(expected);
      });
  
      it('負の数が含まれていない配列を処理する', function() {
        const input = [1, 2, 3, 4];
        const expected = undefined;
        expect(findFirstNegative(input)).toBe(expected);
      });
  
      it('負の数のみを含む配列を処理する', function() {
        const input = [-1, -2, -3, -4];
        const expected = -1;
        expect(findFirstNegative(input)).toBe(expected);
      });
  
      it('空の配列を処理する', function() {
        const input = [];
        const expected = undefined;
        expect(findFirstNegative(input)).toBe(expected);
      });
    });
  });
  
  