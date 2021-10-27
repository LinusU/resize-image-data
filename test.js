/* eslint-env mocha */

'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert')

const lodepng = require('lodepng')
const ImageData = require('@canvas/image-data')

const resizeImageData = require('./')

function loadFixture (name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'fixtures', `${name}.png`), (err, data) => {
      if (err) return reject(err)

      resolve(lodepng.decode(data))
    })
  })
}

function addTestCase (name, width, height, algorithm) {
  it(`should scale ${name} to ${width}x${height} using ${algorithm}`, () => {
    return Promise.all([
      loadFixture(name),
      loadFixture(`${name}-${width}x${height}-${algorithm}`)
    ]).then((images) => {
      const actual = resizeImageData(images[0], width, height, algorithm)

      assert.ok(actual instanceof ImageData)

      assert.strictEqual(actual.width, images[1].width)
      assert.strictEqual(actual.height, images[1].height)

      assert.strictEqual(actual.data.length, images[1].data.length, 'The resized data should match the target data (length)')
      assert.deepStrictEqual(actual.data, images[1].data, 'The resized data should match the target data (bytes)')
    })
  })
}

describe('Resize Image Data', () => {
  addTestCase('sample1', 180, 135, 'bilinear-interpolation')
  addTestCase('sample1', 180, 135, 'nearest-neighbor')
  addTestCase('sample1', 220, 165, 'bilinear-interpolation')
  addTestCase('sample1', 220, 165, 'nearest-neighbor')
  addTestCase('sample2', 23, 97, 'bilinear-interpolation')
  addTestCase('sample2', 23, 97, 'nearest-neighbor')
  addTestCase('sample2', 172, 129, 'bilinear-interpolation')
  addTestCase('sample2', 172, 129, 'nearest-neighbor')
  addTestCase('sample2', 172, 149, 'bilinear-interpolation')
  addTestCase('sample2', 172, 149, 'nearest-neighbor')
  addTestCase('sample2', 88, 66, 'bilinear-interpolation')
  addTestCase('sample2', 88, 66, 'nearest-neighbor')
})
