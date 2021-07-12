const assert = require('assert');

const Maybe = require('..');


assert(Maybe.Just(Maybe.Just(1)).getOrElse() === 1);
assert(Maybe.Just(Maybe.Nothing()).isNothing);

assert(Maybe.of(Maybe.Just(1)).getOrElse() === 1);
assert(Maybe.of(Maybe.Nothing()).isNothing);

assert(Maybe.Just(1).map(x => Maybe.Nothing()).getOrElse(2) === 2);
assert(Maybe.Just(1).map(x => 3).getOrElse(2) === 3);
assert(Maybe.Just(1).map(x => Maybe.Just(3)).getOrElse(2) === 3);

console.log('all test pass');
