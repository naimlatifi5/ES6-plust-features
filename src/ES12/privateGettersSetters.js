class GetName {
  get FirstName() {
    return 'Superman';
  }

  get displayName() {
    return this.FirstName;
  }
}

export const getName = () => {
  console.log('======= Getters and setters not private ========');
  let getFirstName = new GetName();
  console.log(getFirstName.displayName);
};

class GetNamePrivate {
  get #FirstName() {
    return 'Superman';
  }

  get displayName() {
    return this.#FirstName;
  }
}

export const getNamePrivate = () => {
  console.log('======= Getters and setters with private========');
  let getFirstName = new GetName();
  console.log(getFirstName.displayName);
};
