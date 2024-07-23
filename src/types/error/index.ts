export interface IError {
  message: string;
}

export class Error implements IError{
  message: string;
  code: number;
  constructor(message: string, code: number){
    this.message = message;
    this.code = code;
  }
}
