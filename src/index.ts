import ansi from './ansi'

//// Exports ////

export default ansi

export const red = ansi.red
export const blue = ansi.blue
export const cyan = ansi.cyan
export const black = ansi.black
export const green = ansi.green
export const white = ansi.white
export const yellow = ansi.yellow
export const magenta = ansi.magenta

export const dim = ansi.dim
export const bold = ansi.bold
export const bright = ansi.bright
export const italic = ansi.italic
export const inverted = ansi.inverted
export const underline = ansi.underline
export const background = ansi.background

export { Ansi } from './ansi'

export * as ANSI from './constants'
