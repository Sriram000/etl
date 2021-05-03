import transposeData from './transposeData.mjs';
import shops from './shops.mjs';

const pretty = (data) => JSON.stringify(data, null, "\t"); 

const testTransposeData = () =>{
    const result = transposeData(shops);
    console.log("testing getClassDetails");
    console.log(pretty(result));
    console.log("Passed");
}

testTransposeData();