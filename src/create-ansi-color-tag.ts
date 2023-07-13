import { BACKGROUND_DELTA, BRIGHT_SUFFIX, COLOR_CODES } from './constants'

//// Types ////

type AnsiColorCode = keyof typeof COLOR_CODES

type AnsiColorTag = `\u001b[${number}${typeof BRIGHT_SUFFIX | ''}m`

interface CreateAnsiColorTagOptions {
    readonly color: AnsiColorCode
    readonly bright?: boolean
    readonly background?: boolean
}

//// Helper ////

function createAnsiColorTag(options: CreateAnsiColorTagOptions): AnsiColorTag {
    const { color, background, bright } = options

    const code = COLOR_CODES[color]
    const suffix = bright ? BRIGHT_SUFFIX : ''
    const delta = background ? BACKGROUND_DELTA : 0

    return `\u001b[${code + delta}${suffix}m`
}

//// Exports ////

export {
    AnsiColorCode,
    AnsiColorTag,
    createAnsiColorTag,
    CreateAnsiColorTagOptions
}
