import { NegativeNumberError } from "./error";

export class StringCalculator {
  private EMPTY_STRING = "";
  private COMMA_SEPARATOR = ",";
  private NEW_LINE_SEPARATOR = "\n";
  private CUSTOM_DELIMITER_REGEX = /\/\/(\D)\n/;

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

  private getListOfNumbers(str: string[]): number[] {
    return this.convertStringListToNumberList(str);
  }

  private isDelimiterPresent(str: string): boolean {
    const matches = this.CUSTOM_DELIMITER_REGEX.exec(str);
    return this.isCommaPresent(str) || this.isNewLinePresent(str) || matches !== null;
  }

  add(arg0: string): string {
    let numbersList: number[];
    if (arg0 === this.EMPTY_STRING) {
      numbersList = [];
    }
    else if (this.isDelimiterPresent(arg0)) {
      const matches = this.CUSTOM_DELIMITER_REGEX.exec(arg0);
      let delimiter = this.NEW_LINE_SEPARATOR;
      let newString: string = arg0.slice();
      if (matches !== null) {
        delimiter = matches[1];
        newString = arg0.slice(matches[0].length - 1);
      }
      const stringAfterCustom = this.replaceDelimiterByOtherDelimiter(newString, delimiter, this.COMMA_SEPARATOR);
      numbersList = this.getListOfNumbers(this.separateNumbers(stringAfterCustom, this.COMMA_SEPARATOR));
    }
    else {
      numbersList = [+arg0];
    }
    return this.sumListOfNumbers(numbersList).toString();
  }

  private replaceDelimiterByOtherDelimiter(text: string, replacedDelimiter: string, newDelimiter: string) {
    const regex = new RegExp(replacedDelimiter, 'g');
    text = text.replace(regex, newDelimiter);
    return text;
  }
}
