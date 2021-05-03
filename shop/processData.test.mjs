import processData from './processData.mjs';
import shops from './shops.mjs';

const pretty = (data) => JSON.stringify(data, null, "\t"); 

const testProcessData = () =>{
    const result = processData(shops);
    console.log("testing getClassDetails");
    console.log(pretty(result));
    console.log("Passed");
}

testProcessData();