class Hello {
  visible() {
    console.log('Hello-I am visible inside and outside the class');
  }
  // we need to have a babel for that https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
  #inVisible() {
    console.log('I am not visible outside of the class, but I can be accessible via public method');
  }
  showAll() {
    this.visible();
    this.#inVisible();
  }
}

export const privateMethods = () => {
  const sayHello = new Hello();
  sayHello.visible(); // visible() is not a function
  sayHello.showAll(); // print both invisible and visible text
};
