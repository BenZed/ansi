import { UTIL_TAGS } from './constants'
import { AnsiColorCode, createAnsiColorTag } from './create-ansi-color-tag'

//// Types ////

class AnsiStateData {
    bold?: boolean
    color?: AnsiColorCode
    italic?: boolean
    inverted?: boolean
    intensity?: 'bright' | 'dim'
    underline?: boolean
    background?: boolean
}

//// Main ////

class AnsiState extends AnsiStateData {
    constructor(data: AnsiStateData) {
        super()
        Object.assign(this, data)
    }

    applyTo(input: { toString(): string }) {
        const {
            color,
            intensity,
            bold,
            italic,
            underline,
            inverted,
            background
        } = this

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
}

//// Exports ////

export { AnsiState, AnsiStateData }
