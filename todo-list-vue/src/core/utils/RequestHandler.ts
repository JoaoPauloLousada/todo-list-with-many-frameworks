import { HttpPayload } from "../ports/Http";

export class RequestHandler {
  async handle<T>(request: () => Promise<T>): Promise<HttpPayload<T>> {
    try {
      const data = await request();
      return {
        data,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: err as Error,
      };
    }
  }
}

export const requestHandler = new RequestHandler();
