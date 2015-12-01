import { expect } from 'chai';

describe("True", function() {

    it("must be true!", function() {

        expect(true).to.equal(true);
    });

    it("cannot be false!", function() {

        expect(true).not.to.equal(false);
    });
});
