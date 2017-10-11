const fs = require("fs");

let options = [] ;
let val = fs.readdirSync('./answer_options').forEach((file) => {
    if (file !== "love.ogg" && file !== "index.js") {
        options.push('./answer_options/' + file);
    }
})

module.exports = options; 