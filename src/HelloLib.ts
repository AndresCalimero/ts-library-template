/**
 * Basic example of a module
 */

/**
 * HelloLib class
 */
export default class HelloLib {
  /**
   * Returns a welcome message using the provided name
   * @param name the name
   */
  public sayHello(name: string): string {
    return `Hello ${name}`;
  }
}
