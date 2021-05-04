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

describe('string calculator - addition - Many numbers -', () => {
  let stringCalculator: StringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it('should return "3" when "0,1,2" is passed', () => {
    expect(stringCalculator.add("0,1,2")).toBe("3");
  });

  it('should return "134" when "4,80,37,10,1,2" is passed', () => {
    expect(stringCalculator.add("4,80,37,10,1,2")).toBe("134");
  });
});

describe('string calculator - addition - New line separator -', () => {
  let stringCalculator: StringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it('should return "6" when "4\\n2" is passed', () => {
    expect(stringCalculator.add("4\n2")).toBe("6");
  });

  it('should return "16" when "4\\n2\\n10" is passed', () => {
    expect(stringCalculator.add("4\n2\n10")).toBe("16");
  });

  it('should return "6" when "1\\n2,3" is passed', () => {
    expect(stringCalculator.add("1\n2,3")).toBe("6");
  });

  it('should return "12" when "1\\n2,3\\n6" is passed', () => {
    expect(stringCalculator.add("1\n2,3\n6")).toBe("12");
  });

  it('should return "36" when "1,2,3\\n6\\n8\\n10\\n6" is passed', () => {
    expect(stringCalculator.add("1,2,3\n6\n8\n10\n6")).toBe("36");
  });

});

describe('string calculator - addition - Negative numbers -', () => {
  let stringCalculator: StringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it('should throws "Negatives not allowed: -2" when "-2" is passed', () => {
    expect(() => { stringCalculator.add("-2") }).toThrow(/-2/);
  });

  it('should throws "Negatives not allowed: -1" when "-1,2" is passed', () => {
    expect(() => { stringCalculator.add("-1,2") }).toThrow(/-1/);
  });

  it('should throws "Negatives not allowed: -1" when "2,-1,2" is passed', () => {
    expect(() => { stringCalculator.add("2,-1,2") }).toThrow(/-1/);
  });

  it('should throws "Negatives not allowed: -1,-2" when "2,-1,-2" is passed', () => {
    expect(() => { stringCalculator.add("2,-1,-2") }).toThrow(/-1,-2/);
  });

  it('should throws "Negatives not allowed: -2,-1,-2,-100" when "-2,-1,-2,-100" is passed', () => {
    expect(() => { stringCalculator.add("-2,-1,-2,-100") }).toThrow(/-2,-1,-2,-100/);
  });
});

describe('string calculator - addition - Numbers bigger than 1000 -', () => {
  let stringCalculator: StringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it('should return "0" when "1001" is passed', () => {
    expect(stringCalculator.add("1001")).toBe("0");
  });

  it('should return "2" when "1001,2" is passed', () => {
    expect(stringCalculator.add("1001,2")).toBe("2");
  });

  it('should return "2" when "2,97947" is passed', () => {
    expect(stringCalculator.add("2,97947")).toBe("2");
  });
});

describe('string calculator - addition - Custom separators -', () => {
  let stringCalculator: StringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it('should return "1" when "//#\\n1" is passed', () => {
    expect(stringCalculator.add("//#\n1")).toBe("1");
  });

  it('should return "3" when "//#\\n1#2" is passed', () => {
    expect(stringCalculator.add("//#\n1#2")).toBe("3");
  });

  it('should return "3" when "//;\\n1;2" is passed', () => {
    expect(stringCalculator.add("//;\n1;2")).toBe("3");
  });

  it('should return "3" when "//A\\n1A2" is passed', () => {
    expect(stringCalculator.add("//A\n1A2")).toBe("3");
  });

  it('should return "8" when "//@\\n1@2@10002@5" is passed', () => {
    expect(stringCalculator.add("//@\n1@2@10002@5")).toBe("8");
  });
});