const { getAuthToken } = require("@heyputer/puter.js/src/init.cjs");

(async () => {
    const token = await getAuthToken();
    console.log("\nYOUR PUTER AUTH TOKEN:\n");
    console.log(token);
})();
