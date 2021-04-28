import { StringCalculator } from './string-calculator'

describe('string calculator - addition - First Step -', () => {
  let stringCalculator: StringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it('exists', () => {
    expect(stringCalculator).toBeDefined();
  });

  it('should return "0" when empty string', () => {
    expect(stringCalculator.add("")).toBe("0");
  });

  it('should return "1" when "1" is passed', () => {
    expect(stringCalculator.add("1")).toBe("1");
  });

  it('should return "1" when "0,1" is passed', () => {
    expect(stringCalculator.add("0,1")).toBe("1");
  });

  it('should return "3" when "1,2" is passed', () => {
    expect(stringCalculator.add("1,2")).toBe("3");
  });

  it('should return "149" when "104,45" is passed', () => {
    expect(stringCalculator.add("104,45")).toBe("149");
  });
});