//Promise

const prom1 = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done");
      resolve("Harry");
    }, 2000);
  }
});

prom1
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
                             