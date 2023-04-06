import express from "express"
import Bisection from "../calculate/root-of/bisec.js";
import Falseposition from "../calculate/root-of/false.js";
// import Newton from "../calculate/root-of/newton.js";

const router = express.Router();

router.post("/bisec",async(req, res) => Bisection(req, res))
router.post("/false",async(req, res) => Falseposition(req, res))
// router.post("/newton",async(req, res) => Newton(req, res))


export default router