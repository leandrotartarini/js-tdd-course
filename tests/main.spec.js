import {expect} from 'chai';
import {sum, sub, div, mult} from '../src/main';

describe('Calc', () => {

  //smoke tests
  describe('Smoke Tests', () => {
  
    it('should exist the method ´sum´', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method ´sub´', () => {
        expect(sub).to.exist;
        expect(sub).to.be.a('function');
    });

    it('should exist the method ´mult´', () => {
        expect(mult).to.exist;
        expect(mult).to.be.a('function');
    });

    it('should exist the method ´div´', () => {
        expect(div).to.exist;
        expect(div).to.be.a('function');
    });

  });

  describe('Sum', () => {
    it('should return 4 when ´sum(2,2)´', () => {
        expect(sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 0 when ´sub(2,2)´', () => {
        expect(sub(2, 2)).to.be.equal(0);
    });

    it('should return -10 when ´sub(10,20)´', () => {
        expect(sub(10, 20)).to.be.equal(-10);
    });
  });

  describe('Div', () => {
    it('should return 2 when ´div(10,5)´', () => {
        expect(div(10, 5)).to.be.equal(2);
    });

    it('should return ´Não é possível divisão por zero!´ when divided by 0', () => {
        expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });

  describe('Mult', () => {
    it('should return 100 when ´mult(2,50)´', () => {
        expect(mult(2, 50)).to.be.equal(100);
    });
  });

});