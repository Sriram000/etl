import { dictToLines } from './lib.mjs';

const testDictToLines = () => {
    console.log(dictToLines({
        a: 1,
        b: 2,
    }));
} 

testDictToLines();