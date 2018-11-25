import { Router, Request, Response } from "express";
const router:Router = Router();

router.get("/mensajes", ( req: Request, res: Response ) => {
    res.json( {
        ok: true,
        mensaje: "Mensaje GET"
    });
});

router.post("/mensajes", ( req: Request, res: Response ) => {
    const cuerpo: any = req.body.cuerpo;
    const de: any = req.body.de;


    res.json( {
        ok: true,
        cuerpo,
        de

    });
});

router.post("/mensajes/:id", ( req: Request, res: Response ) => {
    const cuerpo: any = req.body.cuerpo;
    const de: any = req.body.de;
    const id: any = req.params.id;
    res.json( {
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default router;