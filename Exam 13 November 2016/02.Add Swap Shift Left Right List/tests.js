const createList = require('./input')
const expect = require('chai').expect



describe('createList', function () {
    let list
    beforeEach(function () {
        list = createList()
    })

    describe('add', function () {
        it('can add multiple', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            const str = list.toString()
            expect(str).to.equal('pesho, gosho, 5')
        })
    })

    describe('shiftLeft', function () {
        it('shifts correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.shiftLeft()
            const str = list.toString()
            expect(str).to.equal('gosho, 5, pesho')
        })
    })


    describe('shiftRight', function () {
        it('shifts correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.shiftRight()
            const str = list.toString()
            expect(str).to.equal('5, pesho, gosho')
        })
    })

    describe('swap', function () {
        it('first index negative', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(-1, 2)
            expect(output).to.be.false
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })

        it('first index equals length', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(4, 2)
            expect(output).to.be.false
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })

        it('first index non-integer', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap('1', 2)
            expect(output).to.be.false
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })

        it('first index equals zero', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(0, 2)
            expect(output).to.be.true
            expect(list.toString()).to.equal('5, gosho, pesho, 6')
        })

        it('second index negative', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, -1)
            expect(output).to.be.false
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })

        it('second index equals length', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, 4)
            expect(output).to.be.false
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })

        it('second index non-integer', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, '1')
            expect(output).to.be.false
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })

        it('second index equals zero', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, 0)
            expect(output).to.be.true
            expect(list.toString()).to.equal('5, gosho, pesho, 6')
        })

        it('indexes are equal', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, 2)
            expect(output).to.be.false
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })
    })

})