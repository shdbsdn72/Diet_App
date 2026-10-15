import {test} from 'node:test';
import assert from 'node:assert/strict';
import {recommend,metrics} from '../src/domain.js';
test('recipes rank available ingredients and exclude specified food',()=>{const results=recommend(['두부','달걀','토마토']);assert.equal(results[0].name,'두부 달걀 스크램블');assert.equal(results[0].matched,3);assert.ok(recommend(['달걀'],['달걀']).every(r=>!r.ingredients.includes('달걀')))});
test('weight progress stays within bounds and BMI uses metres',()=>{assert.equal(metrics({height:200,weight:80,initial:100,target:60}).bmi,20);assert.equal(metrics({height:170,weight:80,initial:100,target:60}).progress,50);assert.equal(metrics({height:170,weight:50,initial:100,target:60}).progress,100);assert.equal(metrics({height:170,weight:110,initial:100,target:60}).progress,0)});
