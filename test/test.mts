/* global describe:false, it:false */
import * as chai from 'chai';
import {  } from '../src/index.ts';
const should = chai.should();

describe('module', ()=>{
    describe('performs a simple test suite', ()=>{
        it('loads', async ()=>{
            should.exist({});
        });
    });
});
