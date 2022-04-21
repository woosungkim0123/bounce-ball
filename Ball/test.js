/*
const 모듈 = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = 모듈.getX();
console.log(unboundGetX); // The function gets invoked at the global scope
// expected output: undefined
/*
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
*/
