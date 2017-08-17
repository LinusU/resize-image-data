const fs = require('fs')
const lodepng = require('lodepng')

const resizeImageData = require('../')

Promise.resolve()
  .then(() => {
    console.log(`Reading file ${process.argv[2]}`)
    return fs.readFileSync(process.argv[2])
  })
  .then((source) => {
    console.log('Decoding source image')
    return lodepng.decode(source)
  })
  .then((image) => {
    const sizes = process.argv[3].split('x')

    console.log(`Resizeing image to ${sizes[0]}x${sizes[1]} using algorithm ${process.argv[4]}`)
    return resizeImageData(image, sizes[0], sizes[1], process.argv[4])
  })
  .then((result) => {
    console.log('Encoding image to PNG')
    return lodepng.encode(result)
  })
  .then((result) => {
    console.log(`Writing PNG data to ${process.argv[5]}`)
    fs.writeFileSync(process.argv[5], result)
  })
  .catch((err) => {
    process.exitCode = 1
    console.error(err.stack)
  })
