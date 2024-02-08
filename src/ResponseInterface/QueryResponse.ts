import { Result, Error } from "./QuryResponseInterface";

export default class QueryResponse {
  static error(response: Error) {
    return response;
  }

  static result(response: Result) {
    return response;
  }
}
