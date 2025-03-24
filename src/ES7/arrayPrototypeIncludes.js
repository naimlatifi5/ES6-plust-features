

export const es5 = () => {
// with ES5
  let myArray = [1, 2, 3]
  if (myArray.indexOf(3) > 0) {
    console.log("ES5 - We found the element")
  }
}

export const es7 = () => {
  let myArray = [1, 2, 3]
  if (myArray.includes(3)) {
    console.log("ES7 - we found the element")
  }
}
