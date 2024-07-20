export default class Time {
  /**
   * @description Stops execution during the desired milliseconds
   * @param ms - Milliseconds to stop execution
   */
  static sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}