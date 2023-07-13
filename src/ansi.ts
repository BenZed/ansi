import { AnsiState, AnsiStateData } from './ansi-state'

//// Types ////

export interface Ansi {
    (strings: TemplateStringsArray, ...values: unknown[]): string

    get red(): Ansi
    get blue(): Ansi
    get cyan(): Ansi
    get black(): Ansi
    get green(): Ansi
    get white(): Ansi
    get yellow(): Ansi
    get magenta(): Ansi

    get dim(): Ansi
    get bold(): Ansi
    get bright(): Ansi
    get italic(): Ansi
    get inverted(): Ansi
    get underline(): Ansi
    get background(): Ansi
}

//// Util ////

function createAnsi(data: AnsiStateData = {}) {
    //
    const state = data instanceof AnsiState ? data : new AnsiState(data)

    const templateTagSignature = (
        strings: TemplateStringsArray,
        ...values: unknown[]
    ) => {
        const message = strings
            .map((str, i) => (i in values ? str + values[i] : str))
            .join('')

        return state.applyTo(message)
    }

    //
    const stateTransitionDescriptors = Object.getOwnPropertyDescriptors({
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
        },

        get dim() {
            return createAnsi({ ...state, intensity: 'dim' })
        },
        get bold() {
            return createAnsi({ ...state, bold: true })
        },
        get bright() {
            return createAnsi({ ...state, intensity: 'bright' })
        },
        get italic() {
            return createAnsi({ ...state, italic: true })
        },
        get inverted() {
            return createAnsi({ ...state, inverted: true })
        },
        get underline() {
            return createAnsi({ ...state, underline: true })
        },
        get background() {
            return createAnsi({ ...state, background: true })
        }
    })

    return Object.defineProperties(
        templateTagSignature,
        stateTransitionDescriptors
    ) as Ansi
}

//// Main ////

const ansi = createAnsi()

//// Exports ////

export default ansi
