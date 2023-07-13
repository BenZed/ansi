import { UTIL_TAGS } from './constants'
import { AnsiColorCode, createAnsiColorTag } from './create-ansi-color-tag'

//// Types ////

interface AnsiState {
    color?: AnsiColorCode
    intensity?: 'bright' | 'dim'
    bold?: boolean
    italic?: boolean
    background?: boolean
    inverted?: boolean
    underline?: boolean
}

//// Main ////

function applyAnsiState(
    input: { toString(): string },
    state: AnsiState
): string {
    // Get State
    const { color, intensity, bold, italic, underline, inverted, background } =
        state

    // Compile Output
    const tags: string[] = []

    if (bold) tags.push(UTIL_TAGS.bold)

    if (italic) tags.push(UTIL_TAGS.italic)

    if (underline) tags.push(UTIL_TAGS.underline)

    if (inverted) tags.push(UTIL_TAGS.inverted)

    if (color)
        tags.push(
            createAnsiColorTag({
                color,
                bright: intensity === 'bright',
                background
            })
        )

    if (intensity === 'dim') tags.push(UTIL_TAGS.dim)

    // No tags? Return input as is.
    if (tags.length === 0) return input.toString()

    return `${tags.join('')}${input}${UTIL_TAGS.reset}`
}

//// Exports ////

export { AnsiState, applyAnsiState }
