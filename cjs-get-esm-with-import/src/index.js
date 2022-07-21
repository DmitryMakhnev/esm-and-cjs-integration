const testModule = import('test-module');

testModule.then(({ run }) => {
  run();
});
