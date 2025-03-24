const taxRate = 0.13;

// const couponCodes = ['BLACKFRIDAY', 'FREESHIP', 'HOHOHO'];

 

function addTax(price) {
    return price * (1 + taxRate);
}

function discountPrice(price, percentage) {
    return price * (1 - percentage);

}

const helloWorld = () => {
    return "hello world as module";
}

// export all at once

export {
    taxRate,
    addTax,
    discountPrice,
    helloWorld

}