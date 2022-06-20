const { sentence } = require("./practice2")
const os = require("os")
const { writeFile } = require("fs")

writeFile("./content/practice.txt", `${sentence}`, (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  writeFile(
    "./content/practice.txt",
    `\n${os.userInfo().username}`,
    { flag: "a" },
    (err, res) => {
      if (err) {
        console.log(err)
        return
      }
    }
  )
})
