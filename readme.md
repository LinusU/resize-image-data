# Resize Image Data

Resize a decoded raw image.

## Installation

```sh
npm install --save resize-image-data
```

## Usage

```js
const resizeImageData = require('resize-image-data')

const result = resizeImageData(image, 128, 128, 'bilinear-interpolation')

console.log(result.width)
//=> 128

console.log(result.height)
//=> 128

console.log(result.data)
//=> Uint8ClampedArray [ ... ]
```

## API

### `resizeImageData(image, width, height[, algorithm])`

Resize the image to the supplied width and height, using the specified algorithm.

The `image` argument should be a `ImageData` instance, or any object with the following properties:

- `width: Number` - The width of the image, in pixels
- `height: Number` - The height of the image, in pixels
- `data: Buffer | TypedArray | Array` - The image data, stored as raw pixel data in the RGBA order

The following algorithms is currently supported:

- `nearest-neighbor`
- `bilinear-interpolation`

If no algorithm is provided, it will currently default to `bilinear-interpolation`. This may however change in any subsequent release, so don't count on it being stable between even minor and patch releases. The goal is to provide the "best" experience when not supplying an algorithm, which could mean different default algorithms depending wether we are scaling up or down.

Returns an `ImageData` instance.

## Related

- [`rotate-image-data`](https://github.com/LinusU/rotate-image-data) - Rotate a decoded raw image
