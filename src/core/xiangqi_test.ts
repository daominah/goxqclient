import * as rewire from 'rewire';

const xq = rewire('./xiangqi');

describe('TestXiangqiAdd', function () {
    it('', function () {
        let result = 5 + 2;
        expect(result).toBe(7);
    });
});

describe('TestXiangqiSub', function () {
    it('', function () {
        let result = 1 - 2;
        expect(result).toBe(-1);
    });
});

describe('TestXiangqiOtherTeam', function () {
    it('', function () {
        let result = OtherTeam(WHITE);
        expect(result).toBe(BLACK);

        result = OtherTeam(BLACK);
        expect(result).toBe(WHITE);
    });
});
