import {simplify,evaluate} from 'mathjs'
/**
* @param {import("express").Request} req
* @param {import('express').Response} res
*/

function fx(eq,x){
    let f = simplify(eq).toString()
    return evaluate(f,{x})
}

export const Falseposition = (req,res) =>{
    const {formdata} = req.body
    console.log(formdata)
    let arr = []
    let eq = formdata.eq;
    console.log(eq)
    let xr = formdata.xr;
    console.log(xr)
    let xl = formdata.xl;
    console.log(xl)
    let errpb = formdata.err;
    console.log(errpb)
    let i = 0,x1 = 0,er = 1;

    while(er>errpb){

        let fxr = fx(eq,xr);
        let fxl = fx(eq,xl);

        x1 = ((xl*fxr)-(xr*fxl))/(fxr-fxl);

        let fx1 = fx(eq,x1);

        let c = fx1*fxr;
        
        if(i==0){
            if(c>0){
                xr = x1;
            }
            if(c<0){
                xl = x1;
            }
        }else{
            if(c>0){
                er = Math.abs((x1-xr)/x1).toFixed(6);
                xr = x1;
            }
            if(c<0){
                er = Math.abs((x1-xl)/x1).toFixed(6);
                xl = x1;
            }
        }

        if(i>0){
            arr.push({i,xl,xr,x1,er});
        }

        i++;

    }
    
    console.log(arr)
    res.json({ formdata: arr });

}

export default Falseposition