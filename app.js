const fs = require("fs");
const path = require("path");

const example = process.argv[2];

if(!example){
    console.log("❌ Please provide a file name as an argument!");
    process.exit(1); 
}

const filePath = path.join(__dirname, example);

fs.readFile(filePath, "utf8", (err, data)=>{
    if(err){
        console.log("❌ Error reading file:", err);
        return ;
    }

    const UpperCase = data.toUpperCase();

    const outputFile = `uppercase_${example}`;

    fs.writeFile(outputFile, UpperCase, (err)=>{
        if (err) {
            console.error("❌ Error writing file:", err);
            return;
        }
        console.log(`✅ File converted successfully! Check ${outputFile}`);

    });
});


