export class ErrorWithCode extends Error {
  code?: number;
  fatal?: boolean;
  showError?: boolean;

  constructor(message?: string, code?: number) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class FetchError extends Error {
  status: number;
  response: any;
  origin: string;

  constructor(status: number, message: string, response: any, origin: string) {
    super(message);
    this.status = status;
    this.response = response;
    this.origin = origin;
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
