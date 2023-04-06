import {simplify,evaluate} from 'mathjs'
/**
* @param {import("express").Request} req
* @param {import('express').Response} res
*/

export const Bisection = (req,res) =>{
    function fx(eq,x){
        let f = simplify(eq).toString()
        return evaluate(f,{x})
    }
    
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
    let i = 0,xm = 0,er = 1;

    while(er>errpb){

        xm = (xr+xl)/2;
        let fxm = fx(eq,xm);
        let fxr = fx(eq,xr);

        let c = fxm*fxr;

        if(i==0){
            if(c>0){
                xr = xm;
            }
            if(c<0){
                xl = xm;
            }
        }else{
            if(c>0){
                er = Math.abs((xm-xr)/xm).toFixed(6);
                xr = xm;
            }
            if(c<0){
                er = Math.abs((xm-xl)/xm).toFixed(6);
                xl = xm;
            }
        }

        if(i>0){
            arr.push({i,xl,xr,xm,er});
        }

        i++;

    }
    console.log(arr)
    res.json({ formdata: arr });

}

export default Bisection