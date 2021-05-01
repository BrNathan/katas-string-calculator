export class NegativeNumberError extends Error {
  private static inititalMessage = 'Negatives not allowed: '
  constructor(negativeNumber: number[]) {
    super(NegativeNumberError.inititalMessage +  negativeNumber.join(','));
    Error.captureStackTrace(this, NegativeNumberError);
  }
}