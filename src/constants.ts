export const COLOR_CODES = {
    red: 31,
    blue: 34,
    cyan: 36,
    black: 30,
    white: 37,
    green: 32,
    yellow: 33,
    magenta: 35
} as const

export const BACKGROUND_DELTA = 10

export const BRIGHT_SUFFIX = ';1'

export const UTIL_TAGS = {
    dim: '\u001b[2m',
    bold: '\u001b[1m',
    reset: '\u001b[0m',
    italic: '\u001b[3m',
    inverted: '\u001b[7m',
    underline: '\u001b[4m'
} as const
