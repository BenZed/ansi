import { it, expect } from '@jest/globals'

import * as ansi from './index'

import { COLOR_CODES, UTIL_TAGS } from './constants'
import { AnsiColorCode } from './create-ansi-color-tag'

//// Tests ////

it('exports method for each color', () => {
    type EachColor = {
        [K in AnsiColorCode]: ansi.Ansi
    }

    ansi satisfies EachColor
})

it('exports method for each util', () => {
    type EveryUtilCodeExceptReset = Exclude<keyof typeof UTIL_TAGS, 'reset'>

    type EachTag = {
        [K in EveryUtilCodeExceptReset]: ansi.Ansi
    }

    ansi satisfies EachTag
})

const chained = ansi.red.dim.bold.italic.underline.inverted`chained`

for (const key in UTIL_TAGS) {
    if (key === 'reset') continue

    const methodName = key as keyof typeof ansi
    if (methodName === 'default') continue

    const utilTag = UTIL_TAGS[key as keyof typeof UTIL_TAGS]

    it(`${key} method uses correct util tag`, () => {
        expect(ansi[methodName]`hello`).toContain(utilTag)
    })

    it(`${key} is chainable`, () => {
        expect(chained).toContain(utilTag)
    })
}

for (const key in COLOR_CODES) {
    if (key === 'reset') continue

    const methodName = key as keyof typeof ansi
    if (methodName === 'default') continue

    const colorCode = COLOR_CODES[key as keyof typeof COLOR_CODES]

    it(`${key} method uses correct util tag`, () => {
        expect(ansi[methodName]`hello`).toContain(colorCode.toString())
    })
}
