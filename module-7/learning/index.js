// Both functions below works the same

const promiseRandom = () => (
    new Promise((resolve, reject) => {
        if (Math.random() < 0.5)
            resolve("Successful");
        else
            reject("Failure");
    })
);

const asyncRandom = async () => {
    if (Math.random() < 0.5)
        return "Successful";
    else
        throw "Failure";
};

const start = async () => {
    try {
        console.log(await ezRandom());
    } catch (e) {
        console.log(e);
    }
}

start();
console.log("THIS IS WROTE AFTER, BUT IT WAS WRITTEN BEFORE");
