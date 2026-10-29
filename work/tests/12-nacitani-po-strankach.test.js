// Databáze vrací z jednoho dotazu max. 1000 řádků - selectAllRows musí číst po stránkách.
'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { freshContext } = require('./harness');

function fakeDb(total) {
  const rows = Array.from({ length: total }, (_, i) => ({ id: i + 1 }));
  return {
    from() {
      let a = 0, b = 999;
      const q = {
        select() { return q; },
        order() { return q; },
        range(x, y) { a = x; b = y; return q; },
        then(res, rej) {
          // PostgREST vrátí nejvýš 1000 řádků na dotaz
          return Promise.resolve({ data: rows.slice(a, Math.min(b, a + 999) + 1), error: null }).then(res, rej);
        },
      };
      return q;
    },
  };
}

test('selectAllRows načte i tabulku s víc než 1000 řádky', async () => {
  const ctx = freshContext({ client: fakeDb(2350) });
  const r = await ctx.selectAllRows('schedule');
  assert.equal(r.error, null);
  assert.equal(r.data.length, 2350);
  assert.equal(new Set(r.data.map(x => x.id)).size, 2350);
});

test('selectAllRows zvládne přesně 1000 a prázdnou tabulku', async () => {
  assert.equal((await freshContext({ client: fakeDb(1000) }).selectAllRows('x')).data.length, 1000);
  assert.equal((await freshContext({ client: fakeDb(0) }).selectAllRows('x')).data.length, 0);
});
