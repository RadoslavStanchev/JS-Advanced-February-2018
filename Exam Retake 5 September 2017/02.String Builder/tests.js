const StringBuilder = require('./string-builder')
const expect = require('chai').expect

describe("StringBuilder tests", function() {
    let builder
    beforeEach(function () {
        builder = new StringBuilder('test')
    })

    it('It should have all methods initialized', function () {
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true)
    })

    it("It should return same string", function() {
        expect(builder.toString()).to.be.equal('test')
    });

    it("It should return same string", function() {
        builder = new StringBuilder()
        expect(builder.toString()).to.be.equal('')
    });

    it("It should throw Error", function() {
        expect(() => {builder = new StringBuilder(5)}).to.throw(TypeError)
    });
//60/100 do tyk

    it('append', function () {
        builder.append(' function')
        expect(builder.toString()).to.be.equal('test function')

        expect(builder._stringArray.length).to.be.equal(13)
    })

    it('append Error', function () {
        expect(() => {builder.append({})}).to.throw(TypeError)
    })

    it('prepend', function () {
        builder.prepend('function ')
        expect(builder.toString()).to.be.equal('function test')
        expect(builder._stringArray.length).to.be.equal(13)
    })

    it('prepend Error', function () {
        expect(() => {builder.prepend({})}).to.throw(TypeError)
    })

    it('insertAt', function () {
        builder.insertAt('ss', 2)
        expect(builder.toString()).to.be.equal('tessst')
        expect(builder._stringArray.length).to.be.equal(6)
    })

    it('insertAt Error', function () {
        expect(() => {builder.insertAt([], 2)}).to.throw(TypeError)
    })
   // 90/100 do tyk

    it('remove', function () {
        builder.remove(1, 2)
        expect(builder.toString()).to.be.equal('tt')
        expect(builder._stringArray.length).to.be.equal(2)
    })
});
