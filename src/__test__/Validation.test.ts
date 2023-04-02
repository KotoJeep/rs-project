import { validateImg, validateText } from '../components/Form/validation';

describe('validateText', () => {
  it('should return false when text is shorter than count', () => {
    expect(validateText('hello', 10)).toBe(false);
  });

  it('should return true when text is longer than count', () => {
    expect(validateText('hello world', 5)).toBe(true);
  });
});

describe('validateImg', () => {
  it('should return false when file extension is not valid', () => {
    expect(validateImg('image.txt')).toBe(false);
  });

  it('should return true when file extension is .jpg', () => {
    expect(validateImg('image.jpg')).toBe(true);
  });

  it('should return true when file extension is .jpeg', () => {
    expect(validateImg('image.jpeg')).toBe(true);
  });

  it('should return true when file extension is .png', () => {
    expect(validateImg('image.png')).toBe(true);
  });

  it('should return true when file extension is .gif', () => {
    expect(validateImg('image.gif')).toBe(true);
  });

  it('should return true when file extension is .svg', () => {
    expect(validateImg('image.svg')).toBe(true);
  });
});
