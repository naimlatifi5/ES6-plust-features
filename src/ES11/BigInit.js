let previousMaxSafe = Number.MAX_SAFE_INTEGER
console.log('Previous max safe number ', previousMaxSafe) // 9007199254740991
++previousMaxSafe
console.log('With Increment', previousMaxSafe) //  9007199254740992
++previousMaxSafe
console.log('With another increment', previousMaxSafe) //9007199254740992

let withBigInt = BigInt(Number.MAX_SAFE_INTEGER) //9007199254740992n
++withBigInt
console.log('With big int', withBigInt)
++withBigInt
console.log('Big init with one more increment', withBigInt) //9007199254740993n
