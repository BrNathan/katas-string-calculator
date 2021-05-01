import { NegativeNumberError } from "./error";

export class StringCalculator {
  private EMPTY_STRING = "";
  private NULL_SUM = "0";
  private COMMA_SEPARATOR = ",";
  private NEW_LINE_SEPARATOR = "\n";

  private isCommaPresent(str: string): boolean {
    return str.indexOf(this.COMMA_SEPARATOR) > -1;
  }

  private isNewLinePresent(str: string): boolean {
    return str.indexOf(this.NEW_LINE_SEPARATOR) > -1;
  }

  private convertStringListToNumberList(stringList: string[]) {
    return stringList.map((value) => { return +value });
  }

  private separateNumbers(str: string, separator: string): string[] {
    return str.split(separator);
  }

  private separateNumbersOfComma(str: string): string[] {
    return this.separateNumbers(str, this.COMMA_SEPARATOR);
  }

  private sumListOfNumbers(list: number[]): number {
    const negativeNumbers: number[] = [];
    const sum: number = list.reduce((tempSum: number, currentNumber: number) => {
      if (currentNumber < 0) {
        negativeNumbers.push(currentNumber);
      }
      return tempSum + currentNumber;
    }, 0);
    if (negativeNumbers.length > 0) {
      throw new NegativeNumberError(negativeNumbers);
    }
    return sum;
  }

  add(arg0: string): string {
    if (arg0 === this.EMPTY_STRING) {
      return this.NULL_SUM;
    }
    else if (this.isCommaPresent(arg0) || this.isNewLinePresent(arg0)) {
      let newString = arg0.slice();
      if (this.isNewLinePresent(arg0)) {
        const regex = new RegExp(this.NEW_LINE_SEPARATOR, 'g');
        newString = newString.replace(regex, this.COMMA_SEPARATOR);
      }
      return this.addWithCommaSeparator(newString);
    }
    return this.sumListOfNumbers([+arg0]).toString();
  }


  private addWithCommaSeparator(arg0: string) {
    let numbers: number[] = this.convertStringListToNumberList(this.separateNumbersOfComma(arg0));
    return this.sumListOfNumbers(numbers).toString();
  }
}
