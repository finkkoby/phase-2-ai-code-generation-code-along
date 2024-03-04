require ( './helpers.js' );

const { expect } = require('chai');

// Your tests here
describe('filterByGenre', () => {
    const books = [
      { title: 'Book1', author: 'Author1', genre: 'Fiction' },
      { title: 'Book2', author: 'Author2', genre: 'Science Fiction' },
      { title: 'Book3', author: 'Author3', genre: 'Mystery' },
      { title: 'Book4', author: 'Author4', genre: 'Fiction' },
    ];
  
    it('should return an empty array if no books match the specified genre', () => {
      const result = filterByGenre('Romance', books);
      expect(result).to.be.an('array').that.is.empty;
    });
  
    it('should return an array of books with the specified genre', () => {
      const result = filterByGenre('Fiction', books);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(2);
      expect(result[0]).to.deep.equal({ title: 'Book1', author: 'Author1', genre: 'Fiction' });
      expect(result[1]).to.deep.equal({ title: 'Book4', author: 'Author4', genre: 'Fiction' });
    });
  
    it('should handle case-insensitive genre comparison', () => {
      const result = filterByGenre('sCieNce FicTion', books);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.equal({ title: 'Book2', author: 'Author2', genre: 'Science Fiction' });
    });
  
    // Add more tests as needed based on your specific use cases
  });