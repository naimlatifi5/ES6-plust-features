export const arrowFunction = () => {
  // ES5
  let multipeNumber = function (num1, num2) {
    return num1 * num2;
  };
  console.log(multipeNumber(2, 3));

  // ES6
  let multipeNumberES6 = (num1, num2) => num1 * num2;
  console.log('ES6', multipeNumberES6(2, 3));

  // let objectES55 = {
  //   name: 'ES5 print after 1 sec',
  //   printWithDelay: function () {
  //     setTimeout(function () {
  //       this.textToPrint();
  //     }, 1000);
  //   },
  //   textToPrint: function () {
  //     console.log('Print name after 1 sec', this.name);
  //   },
  // };

  //objectES55.printWithDelay(); // TypeReference error textToPrint is not a function¨

  // work around for this reference error by binding this
  let objectES55V = {
    name: 'superman',
    printWithDelay: function () {
      setTimeout(
        function () {
          this.textToPrint();
        }.bind(this),
        1000,
      );
    },
    textToPrint: function () {
      console.log('Binding', this.name);
    },
  };
  // work around for this reference error by assign this to that
  objectES55V.printWithDelay();

  let objectES5V2 = {
    name: 'Superman2',
    printWithDelay: function () {
      var _that = this;
      setTimeout(function () {
        _that.textToPrint();
      }, 1000);
    },
    textToPrint: function () {
      console.log('Assign this to that', this.name);
    },
  };

  objectES5V2.printWithDelay();

  let objectES6 = {
    name: 'ES6 print after 1 sec',
    printWithDelay: function () {
      setTimeout(() => {
        this.textToPrint();
      }, 1000);
    },
    textToPrint: function () {
      console.log('Arrow function with ES6', this.name);
    },
  };
  // objectES6.printWithDelay();
};
