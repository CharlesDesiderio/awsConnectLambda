const { expect } = require('chai')
const { lambda } = require('../lambda')

describe('the vanity number function', () => {
  it('should return an object', () => {
    const result = lambda('7373462592');
    expect(result).to.be.an('object')
  })
})

describe('the vanity number function', () => {
  it('should have the first vanity number', () => {
    const result = lambda('7373462592');
    expect(result).to.have.any.key('vanityOne')
  })
})

describe('the vanity number function', () => {
  it('should have the second vanity number', () => {
    const result = lambda('7373462592');
    expect(result).to.have.any.key('vanityTwo')
  })
})

describe('the vanity number function', () => {
  it('should have the third vanity number', () => {
    const result = lambda('7373462592');
    expect(result).to.have.any.key('vanityThree')
  })
})


