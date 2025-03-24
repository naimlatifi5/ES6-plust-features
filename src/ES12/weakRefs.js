export const weakRefs = () => {
  const callback = () => {
    const aBigObj = {
      name: 'Backbencher',
    };
    console.log(aBigObj);
  };
  (async function () {
    await new Promise((resolve) => {
      setTimeout(() => {
        callback();
        resolve();
      }, 2000);
    });
  })();
  const callback = () => {
    const aBigObj = new WeakRef({
      name: 'Backbencher',
    });
    console.log(aBigObj.deref().name);
  };
  (async function () {
    await new Promise((resolve) => {
      setTimeout(() => {
        callback(); // Guaranteed to print "Backbencher"
        resolve();
      }, 2000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        callback(); // No Gaurantee that "Backbencher" is printed
        resolve();
      }, 5000);
    });
  })();
};
