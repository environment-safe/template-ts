const should = require('chai').should();
const {  } = require('../src/index.cjs');

describe('module', ()=>{
    describe('performs a simple test suite', ()=>{
        it('loads', async ()=>{
            should.exist({});
        });
    });
});
