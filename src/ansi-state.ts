import { UTIL_TAGS } from './constants'
import { AnsiColorCode, createAnsiColorTag } from './create-ansi-color-tag'

//// Types ////

interface AnsiState {
    bold?: boolean
    color?: AnsiColorCode
    italic?: boolean
    inverted?: boolean
    intensity?: 'bright' | 'dim'
    underline?: boolean
    background?: boolean
}

//// Main ////

function applyAnsiState(
    input: { toString(): string },
    state: AnsiState
): string {
    const { color, intensity, bold, italic, underline, inverted, background } =
        state

    const tags: string[] = []

    if (bold) tags.push(UTIL_TAGS.bold)
    if (italic) tags.push(UTIL_TAGS.italic)
    if (inverted) tags.push(UTIL_TAGS.inverted)
    if (underline) tags.push(UTIL_TAGS.underline)
    if (intensity === 'dim') tags.push(UTIL_TAGS.dim)
    if (color)
        tags.push(
            createAnsiColorTag({
                color,
                bright: intensity === 'bright',
                background
            })
        )

    const noTagsToApply = tags.length === 0
    if (noTagsToApply) return input.toString()

    return `${tags.join('')}${input}${UTIL_TAGS.reset}`
}

//// Exports ////

export { AnsiState, applyAnsiState }
