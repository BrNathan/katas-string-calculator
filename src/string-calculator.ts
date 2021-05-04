import { NegativeNumberError } from "./error";

export class StringCalculator {
  private EMPTY_STRING = "";
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

  private sumListOfNumbers(list: number[]): number {
    const negativeNumbers: number[] = [];
    const sum: number = list.reduce((tempSum: number, currentNumber: number) => {
      if (currentNumber < 0) {
        negativeNumbers.push(currentNumber);
        return tempSum;
      }
      else if (currentNumber > 1000) {
        return tempSum;
      }
      return tempSum + currentNumber;
    }, 0);
    if (negativeNumbers.length > 0) {
      throw new NegativeNumberError(negativeNumbers);
    }
    return sum;
  }

  private getListOfNumbers(str : string[]): number[] {
    return this.convertStringListToNumberList(str);
  }

  add(arg0: string): string {
    let numbersList: number[];
    if (arg0 === this.EMPTY_STRING) {
      numbersList = [];
    }
    else if (this.isCommaPresent(arg0) || this.isNewLinePresent(arg0)) {
      let newString = arg0.slice();
      if (this.isNewLinePresent(arg0)) {
        const regex = new RegExp(this.NEW_LINE_SEPARATOR, 'g');
        newString = newString.replace(regex, this.COMMA_SEPARATOR);
      }
      numbersList = this.getListOfNumbers(this.separateNumbers(newString, this.COMMA_SEPARATOR));
    }
    else {
      numbersList = [+arg0];
    }
    return this.sumListOfNumbers(numbersList).toString();
  }
}
