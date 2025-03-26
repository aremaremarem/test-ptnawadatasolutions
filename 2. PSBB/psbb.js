const readline = require("readline");

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askFamilyMembers(numFamilies) {
    userInput.question("Input the number of members in the family (separated by a space) : ", (members) => {
        const familySizes = members.split(" ").map(Number);
        
        if (familySizes.length !== numFamilies) {
            console.log("Input must be equal with count of family");
            askFamilyMembers(numFamilies);
        } else if (!/^\d+(\s\d+)*$/.test(members)) {
            console.log("Input must use spaces as separators.");
            askFamilyMembers(numFamilies);
        } else {
            let totalMembers = familySizes.reduce((sum, num) => sum + num, 0);
            let buses = Math.ceil(totalMembers / 4);
            
            console.log("Minimum bus required is :", buses);
            userInput.close();
        }
    });
}

userInput.question("Input the number of families : ", (n) => {
    const numFamilies = parseInt(n);
    askFamilyMembers(numFamilies);
});
