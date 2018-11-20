import ImageData = require('@canvas/image-data')

interface ImageLike {
  width: number
  height: number
  data: Uint8Array | Uint8ClampedArray | number[]
}

type Algorithm = 'nearest-neighbor' | 'biliniear-interpolation'

declare function resizeImageData(image: ImageLike, width: number, height: number, algorithm?: Algorithm): ImageData

export = resizeImageData
