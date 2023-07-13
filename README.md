# @benzed/ansi

---

## Installation

```npm

```

## Usage

Decorated console statements with ansi escape codes:

```ts
import { grey, bright, bold, inverted } from '@benzed/ansi'

console.log(grey`hello`) // 'hello', but grey
console.log(bright`how`) // 'how', but bright
console.log(bold`are`) // 'are', but bold
console.log(inverted`you`) // you get the idea
```

Chainable:

```ts
import { blue } from '@benzed/ansi'

console.log(blue.dim.italic`words`) // words, but dim blue and italic
```

## API Reference

Every exported method has this interface:

```ts
interface Ansi {
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
```

That's pretty much it!
