const a = 10;
const b = 20;
const add = a+b;
const sub = a-b;


//* common js module exports

// // default export
// module.exports= add;

// //named exports
// exports.add = add;
// exports.sub = sub;


// es6 module exports - always use .mjs extension

// default export
//export default add;

//named exports
export {add,sub};
