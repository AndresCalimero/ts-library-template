import HelloLib from './HelloLib';
import data from './data.json';

const helloLib = new HelloLib();
console.log(helloLib.sayHello(data.name));

export { HelloLib, data };
