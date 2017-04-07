/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const insertionSorting = require('../insertionSorting.js');

describe('insertionSorting', () => {
  it('it should be a function', () => {
    expect(insertionSorting).to.be.a('function');
  });

  it('should sort the array from smallest to biggest', () => {
    expect(insertionSorting([8, 3, 5, 6, 9, 1, 4])).to.deep.equal([1, 3, 4, 5, 6, 8, 9]);
  });
});