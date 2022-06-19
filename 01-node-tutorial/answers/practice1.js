const { sentence } = require("./practice2")
const os = require("os")
const { writeFile } = require("fs")

console.log(sentence)

writeFile("./content/practice.txt", `${sentence}`, (err) => {
  writeFile(
    "./content/practice.txt",
    `\n${os.userInfo().username}`,
    { flag: "a" },
    (err) => {}
  )
})
