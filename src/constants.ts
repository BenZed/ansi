export const COLOR_CODES = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37
} as const

export const BACKGROUND_DELTA = 10

export const BRIGHT_SUFFIX = ';1'

export const UTIL_TAGS = {
    bold: '\u001b[1m',
    dim: '\u001b[2m',
    italic: '\u001b[3m',
    underline: '\u001b[4m',
    reset: '\u001b[0m',
    inverted: '\u001b[7m'
} as const
