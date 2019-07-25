const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
let initialDirLev = __dirname.split('/').length;

function scan(directory) {
	let files = fs.readdirSync(directory);
	if(!files) {
		return;
	}
	files.forEach(file => {
		file = path.resolve(directory, file);
		let dirLev = file.split('/').length - initialDirLev;
		if(fs.existsSync(file)) {
			if(fs.lstatSync(file).isDirectory()) {
				let int = '  '.repeat(dirLev);
				console.log(int, chalk.red.bold(path.basename(file)));
				scan(file);
			} else {
				int = '  '.repeat(dirLev);
				console.log(int, path.basename(file))
			}
		}
	})
}
scan(__dirname);


// async function

// function scan(directory) {
// 	fs.readdir(directory, function(err, files) {

// 		if(err) {
// 			console.log(err);
// 			return;
// 		}
// 		files.forEach(file => {
// 			file = path.resolve(directory, file);
// 			if(fs.existsSync(file)) {
// 				if(fs.lstatSync(file).isDirectory()) {
// 					console.log(path.basename(file));
// 					scan(file);
// 					// file = path.basename(file);
// 					// console.log(file)
// 					// console.log(i++)
// 				} else {
// 					file = path.basename(file);
// 					console.log(file)
// 					// console.log(i++)
// 				}
// 			}
			
// 		})
// 	})
// }
// scan(__dirname);