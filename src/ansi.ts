import { AnsiState, applyAnsiState } from './ansi-state'

//// Types ////

export interface Ansi {
    (strings: TemplateStringsArray, ...values: unknown[]): string

    get dim(): Ansi
    get bright(): Ansi
    get bold(): Ansi
    get italic(): Ansi
    get underline(): Ansi
    get inverted(): Ansi

    get red(): Ansi
    get blue(): Ansi
    get cyan(): Ansi
    get black(): Ansi
    get green(): Ansi
    get white(): Ansi
    get yellow(): Ansi
    get magenta(): Ansi
}

//// Util ////

function ansiSignature(
    this: AnsiState,
    strings: TemplateStringsArray,
    ...values: unknown[]
) {
    const message = strings
        .map((str, i) => (i in values ? str + values[i] : str))
        .join('')

    return applyAnsiState(message, this)
}

function createAnsi(state: AnsiState): Ansi {
    //

    const stateChainDescriptors = Object.getOwnPropertyDescriptors({
        get dim() {
            return createAnsi({ ...state, intensity: 'dim' })
        },

        get bright() {
            return createAnsi({ ...state, intensity: 'bright' })
        },

        get bold() {
            return createAnsi({ ...state, bold: true })
        },

        get italic() {
            return createAnsi({ ...state, italic: true })
        },

        get underline() {
            return createAnsi({ ...state, underline: true })
        },

        get inverted() {
            return createAnsi({ ...state, inverted: true })
        },

        get red() {
            return createAnsi({ ...state, color: 'red' })
        },

        get blue() {
            return createAnsi({ ...state, color: 'blue' })
        },

        get cyan() {
            return createAnsi({ ...state, color: 'cyan' })
        },

        get black() {
            return createAnsi({ ...state, color: 'black' })
        },

        get green() {
            return createAnsi({ ...state, color: 'green' })
        },

        get white() {
            return createAnsi({ ...state, color: 'white' })
        },

        get yellow() {
            return createAnsi({ ...state, color: 'yellow' })
        },

        get magenta() {
            return createAnsi({ ...state, color: 'magenta' })
        }
    })

    return Object.defineProperties(
        ansiSignature.bind(state),
        stateChainDescriptors
    ) as Ansi
}

//// Exports ////

export default createAnsi({})
