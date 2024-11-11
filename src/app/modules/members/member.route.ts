import { Member } from "@prisma/client";
import express from "express";
import { MemberController } from "./member.controller";

const router = express.Router();

router.post("/members", MemberController.createMember);
router.get("/members", MemberController.getAllMember);
router.get("/members/:memberId", MemberController.getSingleMember);

router.put("/members/:memberId", MemberController.updateMember);

router.delete("/members/:memberId", MemberController.deleteMemebr);
export const MemberRoutes = router;
