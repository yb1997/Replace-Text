"use strict";
const fs = require("fs");
const os = require("os");

var str = "";
var args, filePath, strtoReplace, replaceWithStr, newStr;

args = process.argv.filter( (arg, i) => (i >= 2) );
[filePath, strtoReplace, replaceWithStr] = args;


fs.readFile(filePath, "utf-8", (err, data) => {
	if(!err) {
		newStr = data;

		while(newStr.includes(strtoReplace)) {
			newStr = newStr.replace(strtoReplace, replaceWithStr);
		}
		
		if(newStr === data) {
			console.warn("No mathching string found !");
			return;
		}

		fs.writeFile(filePath, newStr, (err) => {
			if(!err)
				console.log("file written successfully !");
			else
				throw err;
		});
	} else {
		throw err;
	}

});
