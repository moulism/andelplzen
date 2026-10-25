// Výplata je vždy 20. dne v měsíci - nejbližší termín a text pro brigádníky.
'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { freshContext } = require('./harness');

test('nejbližší výplata před 20. je 20. tohoto měsíce', () => {
  const ctx = freshContext();
  const d = ctx.getNextPayoutDate(new Date(2026, 9, 5));
  assert.equal(ctx.formatCzDate(d), '20. 10. 2026');
});

test('20. dne je výplata ještě tentýž den', () => {
  const ctx = freshContext();
  assert.equal(ctx.formatCzDate(ctx.getNextPayoutDate(new Date(2026, 9, 20))), '20. 10. 2026');
});

test('po 20. je nejbližší výplata 20. příštího měsíce', () => {
  const ctx = freshContext();
  assert.equal(ctx.formatCzDate(ctx.getNextPayoutDate(new Date(2026, 9, 25))), '20. 11. 2026');
});

test('přelom roku: po 20. prosince je výplata 20. ledna', () => {
  const ctx = freshContext();
  assert.equal(ctx.formatCzDate(ctx.getNextPayoutDate(new Date(2026, 11, 28))), '20. 1. 2027');
});

test('text obsahuje 20. dne v měsíci a nejbližší datum', () => {
  const ctx = freshContext();
  const t = ctx.getPayoutInfoText(new Date(2026, 9, 25));
  assert.match(t, /vždy 20\. dne v měsíci/);
  assert.match(t, /20\. 11\. 2026/);
});
