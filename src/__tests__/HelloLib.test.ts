import HelloLib from '../HelloLib';

it('can be constructed', () => {
  expect(new HelloLib()).toBeInstanceOf(HelloLib);
});

describe('sayHello', () => {
  let helloLib: HelloLib;

  beforeEach(() => {
    helloLib = new HelloLib();
  });

  it('returns "Hello Juan"', () => {
    expect(helloLib.sayHello('Juan')).toBe('Hello Juan');
  });
});
