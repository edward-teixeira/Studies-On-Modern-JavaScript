//load in module through require
//Store it in a viariable
const fs = require('fs');
//write to a specified file
//params: filename, filecontent
//fs.writeFileSync('notes.txt', 'The one place that David is equal to Goliath is in the Supreme Court.')

//Challgenge: Append the message to notes.txt
const file = fs.openSync('notes.txt', 'a');
fs.appendFileSync(file, '\n \"Whatever you vividly imagine, ardently desire, sincerely believe, and enthusiastically act upon... must inevitably come to pass!\"\
- Joe Biden\'');
fs.close();