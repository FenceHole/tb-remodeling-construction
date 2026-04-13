import { Router, type IRouter } from "express";
import healthRouter from "./health";
import visualizeRouter from "./visualize";

const router: IRouter = Router();

router.use(healthRouter);
router.use(visualizeRouter);

export default router;
