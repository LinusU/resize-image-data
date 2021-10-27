import ImageData = require('@canvas/image-data')

interface ImageLike {
  width: number
  height: number
  data: Uint8Array | Uint8ClampedArray | number[]
}

// FIXME: "biliniear" only for backwards compatibility, remove in next major version
type Algorithm = 'nearest-neighbor' | 'bilinear-interpolation' | 'biliniear-interpolation'

declare function resizeImageData(image: ImageLike, width: number, height: number, algorithm?: Algorithm): ImageData

export = resizeImageData
