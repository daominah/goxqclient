import * as rewire from "rewire";
import * as assert from "assert";

const xq = rewire("./xiangqi");

describe("TestXiangqiAdd", function () {
    it("", function () {
        let result = 5 + 2;
        assert.equal(result, 7);
    });
});

describe("TestXiangqiSub", function () {
    it("", function () {
        let result = 1 - 2;
        assert.equal(result, -1);
    });
});

describe("TestXiangqiOtherTeam", function () {
    it("", function () {
        let result = xq.__get__("OtherTeam")(xq.WHITE);
        assert.equal(result, xq.BLACK);

        result = xq.__get__("OtherTeam")(xq.BLACK);
        assert.equal(result, xq.WHITE);
    });
});
