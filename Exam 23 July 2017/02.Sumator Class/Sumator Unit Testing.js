const Sumator = require('./Sumator')
const expect = require('chai').expect

describe("Sumator Unit tests", function() {
    let sumator
    beforeEach(function () {
        sumator = new Sumator()
    })

    describe('check if functions exist', function () {
        it('data is not defined', function () {
            expect(sumator.data !== undefined).to.equal(true)
        })

        it('add func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
        })

        it('sum nums exists', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
        })

        it('remove by filter exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
        })

        it('toString func exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })
    })

    it("test if data length is empty", function() {
        expect(sumator.data.length).to.be.equal(0)
    });

    describe('add func tests', function () {
        it("add only numbers", function() {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.data.join(', ')).to.be.equal('5, 4, 3')
        });

        it("add only strings", function() {
            sumator.add('Someone')
            sumator.add('Help')
            sumator.add('Me')
            expect(sumator.data.join(', ')).to.be.equal('Someone, Help, Me')
        });

        it("add only objects", function() {
            sumator.add({ name: 'Gosho'})
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]')
        });

        it("add mixed types", function() {
            sumator.add({ name: 'Gosho'})
            sumator.add(4)
            sumator.add('Gopeto')
            expect(sumator.data.join(', ')).to.be.equal('[object Object], 4, Gopeto')
        });
    })

    describe('Test sum nums', function () {
        it('sum only numbers', function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.sumNums()).to.be.equal(12)
        })

        it('sum strings and objects ', function () {
            sumator.add('Goshko')
            sumator.add({})
            sumator.add({name: 'Peshko'})
            expect(sumator.sumNums()).to.be.equal(0)
        })

        it('sum mixed types ', function () {
            sumator.add('Goshko')
            sumator.add(3)
            sumator.add({})
            sumator.add(4)
            expect(sumator.sumNums()).to.be.equal(7)
        })
    })

    describe('Test remove by filter', function () {
        it('removes all odd numbers', function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)

            }
            sumator.removeByFilter((x) => x % 2 !== 0)
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10')
        })

        it('removes all odd numbers', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)

            }
            sumator.removeByFilter((x) => x > 5)
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5')
        })

        it('throws exception', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }

            expect(() => sumator.removeByFilter(undefined)).to.throw()
        })
    })

    describe('test toString func', function () {
        it('with items in array', function () {
            sumator.add(4)
            sumator.add('Gosho')
            expect(sumator.toString()).to.be.equal('4, Gosho')
        })
        it('with items in array', function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        })
    })
});
