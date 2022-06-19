const { readFile, writeFile } = require("fs").promises
// const util = require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8")
    const second = await readFile("./content/second.txt", "utf8")
    await writeFile(
      "./content/result-mind-grenade.txt",
      `file1: ${first}\nfile2: ${second}`,
      { flag: "a" }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// console.log("start")
// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log("done with this task")
//       }
//     )
//   })
// })
// console.log("starting next task")
