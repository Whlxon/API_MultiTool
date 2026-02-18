import { Router } from "express";
//import { authorize, isAdmin } from "../utils/auths";

const router = Router();

router.get('/', (req, res) => {
    req.body;
    res.status(200).send('Hello there !')
})


export default router;