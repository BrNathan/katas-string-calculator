export class StringCalculator {
  private EMPTY_STRING = "";
  private NULL_SUM = "0";
  private COMMA_SEPARATOR = ",";

  private isCommaPresent(str: string): boolean {
    return str.indexOf(this.COMMA_SEPARATOR) > -1;
  }
  add(arg0: string): string {
    if (arg0 === this.EMPTY_STRING) {
      return this.NULL_SUM;
    }
    else if (this.isCommaPresent(arg0)) {
      let numbers: number[] = arg0.split(this.COMMA_SEPARATOR).map((value) => { return +value });
      return numbers.reduce((sum: number, currentNumber: number) => {
        return sum + currentNumber;
      }, 0).toString();
    }
    return arg0;
  }

}
