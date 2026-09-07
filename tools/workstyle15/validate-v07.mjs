#!/usr/bin/env node
/**
 * WorkStyle v0.7 LT-E static sanity validator.
 *
 * No external dependencies.
 * Run from repository root:
 *   node tools/workstyle15/validate-v07.mjs
 *
 * This is an engineering validator, not a psychometric test.
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const htmlPath = path.join(root, 'tools/workstyle15/v07-cognitive.html');
const contentPath = path.join(root, 'tools/workstyle15/v07-content-lt.js');

function fail(message) {
  console.error(`FAIL  ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS  ${message}`);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const contentSource = fs.readFileSync(contentPath, 'utf8');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(contentSource, sandbox, { filename: contentPath });

const content = sandbox.window.WORKSTYLE_V07_CONTENT;
if (!content || !Array.isArray(content.items)) {
  fail('LT content pack does not expose window.WORKSTYLE_V07_CONTENT.items');
  process.exit(1);
}

const items = content.items;
const expectedAxisCounts = {
  structure: 5,
  method: 5,
  scope: 3,
  revision: 3,
  scan: 3,
  coordination: 5,
  disagreement: 5,
  participation: 5,
};
const axes = Object.keys(expectedAxisCounts);
const strongAxes = ['structure', 'method', 'coordination', 'disagreement', 'participation'];
const fragileAxes = ['scope', 'revision', 'scan'];

if (items.length === 34) pass('34 LT items loaded');
else fail(`expected 34 LT items, got ${items.length}`);

const ids = items.map(item => item.id);
const uniqueIds = new Set(ids);
if (uniqueIds.size === items.length) pass('all item IDs are unique');
else fail('duplicate item IDs found');

let itemShapeOk = true;
for (const item of items) {
  for (const key of ['id', 'axis', 'stem', 'left', 'right']) {
    if (typeof item[key] !== 'string' || !item[key].trim()) {
      fail(`${item.id || '(unknown)'} missing non-empty ${key}`);
      itemShapeOk = false;
    }
  }
  if (!axes.includes(item.axis)) {
    fail(`${item.id} has unknown axis ${item.axis}`);
    itemShapeOk = false;
  }
  if (item.left?.trim() === item.right?.trim()) {
    fail(`${item.id} has identical left/right anchors`);
    itemShapeOk = false;
  }
}
if (itemShapeOk) pass('all items have required fields and known axes');

const counts = Object.fromEntries(axes.map(axis => [axis, 0]));
for (const item of items) counts[item.axis] += 1;
for (const [axis, expected] of Object.entries(expectedAxisCounts)) {
  if (counts[axis] !== expected) fail(`${axis}: expected ${expected} items, got ${counts[axis]}`);
}
if (Object.entries(expectedAxisCounts).every(([axis, expected]) => counts[axis] === expected)) {
  pass('axis item counts are 5/5/3/3/3/5/5/5 as designed');
}

if (content.language === 'lt') pass('content language is lt');
else fail(`expected content language lt, got ${content.language}`);

if (content.contentVersion === 'v07-lt-d') pass('content version is v07-lt-d');
else fail(`unexpected contentVersion ${content.contentVersion}`);

const requiredHtmlIds = [
  'intro', 'quiz', 'breakScreen', 'done', 'startBtn', 'resumeBtn',
  'roleField', 'experienceField', 'environmentField',
  'progressText', 'blockText', 'progressBar', 'itemLabel', 'stem',
  'leftAnchor', 'rightAnchor', 'scale', 'contextBtn', 'naBtn',
  'unclearCheck', 'duplicateCheck', 'prevBtn', 'nextBtn',
  'continueBtn', 'generalFeedback', 'exportBtn', 'restartBtn',
];
for (const id of requiredHtmlIds) {
  if (!html.includes(`id="${id}"`)) fail(`HTML missing #${id}`);
}
if (requiredHtmlIds.every(id => html.includes(`id="${id}"`))) {
  pass('required UI element IDs are present');
}

if (html.includes("0.7-cognitive-8axis-lt-e")) pass('form version LT-E is present');
else fail('LT-E form version marker missing');

if (html.includes('v07-content-lt.js')) pass('HTML loads external LT content pack');
else fail('HTML does not load LT content pack');

function shuffle(a) {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

function axisSequence(quota, previous = null) {
  const remaining = { ...quota };
  const out = [];
  let last = previous;
  while (Object.values(remaining).some(v => v > 0)) {
    const candidates = Object.keys(remaining).filter(a => remaining[a] > 0 && a !== last);
    const usable = candidates.length ? candidates : Object.keys(remaining).filter(a => remaining[a] > 0);
    const max = Math.max(...usable.map(a => remaining[a]));
    const top = usable.filter(a => remaining[a] === max);
    const axis = top[Math.floor(Math.random() * top.length)];
    out.push(axis);
    remaining[axis] -= 1;
    last = axis;
  }
  return out;
}

function balancedOrder() {
  const pools = {};
  items.forEach(item => (pools[item.axis] ??= []).push(item.id));
  Object.keys(pools).forEach(axis => pools[axis] = shuffle(pools[axis]));

  const quotas = [{}, {}, {}];
  fragileAxes.forEach(axis => {
    quotas[0][axis] = 1;
    quotas[1][axis] = 1;
    quotas[2][axis] = 1;
  });

  const strong = shuffle(strongAxes);
  const singleBlocks = shuffle([0, 1, 1, 2, 2]);
  strong.forEach((axis, i) => {
    for (let block = 0; block < 3; block++) {
      quotas[block][axis] = block === singleBlocks[i] ? 1 : 2;
    }
  });

  const order = [];
  let previous = null;
  for (let block = 0; block < 3; block++) {
    const seq = axisSequence(quotas[block], previous);
    seq.forEach(axis => order.push(pools[axis].pop()));
    previous = seq[seq.length - 1];
  }
  return order;
}

const itemById = new Map(items.map(item => [item.id, item]));
const blockRanges = [[0, 12], [12, 23], [23, 34]];
let simulationOk = true;
const runs = 10000;

for (let run = 0; run < runs; run++) {
  const order = balancedOrder();
  if (order.length !== 34 || new Set(order).size !== 34) {
    fail(`run ${run}: order is not a 34-item permutation`);
    simulationOk = false;
    break;
  }

  for (let i = 1; i < order.length; i++) {
    if (itemById.get(order[i - 1]).axis === itemById.get(order[i]).axis) {
      fail(`run ${run}: adjacent same-axis items at ${i}/${i + 1}`);
      simulationOk = false;
      break;
    }
  }
  if (!simulationOk) break;

  for (const [start, end] of blockRanges) {
    const blockAxes = new Set(order.slice(start, end).map(id => itemById.get(id).axis));
    if (blockAxes.size !== 8) {
      fail(`run ${run}: block ${start}-${end} contains ${blockAxes.size}/8 axes`);
      simulationOk = false;
      break;
    }
  }
  if (!simulationOk) break;
}

if (simulationOk) {
  pass(`${runs.toLocaleString()} balanced-order simulations: all 34 unique, no adjacent same axis, all 8 axes in each block`);
}

if (!process.exitCode) {
  console.log('\nWorkStyle v0.7 LT-E engineering sanity check passed.');
  console.log('This does not validate the constructs or scoring.');
}
