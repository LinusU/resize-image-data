interface ImageLike {
  width: number
  height: number
  data: Uint8Array | number[]
}

interface Image {
  width: number
  height: number
  data: Buffer
}

type Algorithm = 'nearest-neighbor' | 'biliniear-interpolation'

declare function resizeImageData(image: ImageLike, width: number, height: number, algorithm?: Algorithm): Image

export = resizeImageData
