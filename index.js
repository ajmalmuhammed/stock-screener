import express from 'express';
import fetch from 'node-fetch';
export const getstocks = async function (){

    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    
    console.log(data);
    data
    }
const app = express();

app.get('/getstocks',async (req,res)=>{
    // const params = new URLSearchParams();
    // params.append('scan_clause', "( {cash} ( latest close >= latest max( 250 , latest high ) * 0.75 and latest close > 20 and 1 day ago volume > 70000 and latest close > latest ema( latest close , 20 ) and weekly rsi( 14 ) < 85 and weekly high > 1 week ago high and 1 week ago volume > 200000 ) )");
    const params = { "scan_clause": "( {cash} ( latest close >= latest max( 250 , latest high ) * 0.75 and latest close > 20 and 1 day ago volume > 70000 and latest close > latest ema( latest close , 20 ) and weekly rsi( 14 ) < 85 and weekly high > 1 week ago high and 1 week ago volume > 200000 ) )"}
    const response = await fetch('https://chartink.com/screener/process',{method: 'POST', body: params, headers: {'Content-Type': 'application/json'}});
    // const data = await response.json();
    console.log(response.body)
    // console.log(data);
    // res.send(data)
    });

app.listen(8001,()=>{
    console.log("Server has started on ",8001);
});

