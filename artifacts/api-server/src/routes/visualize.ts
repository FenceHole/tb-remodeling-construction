import { Router } from "express";
import multer from "multer";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { editImages } from "@workspace/integrations-openai-ai-server/image";

const router = Router();

const upload = multer({
  dest: os.tmpdir(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(_req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are accepted"));
    }
  },
});

router.post("/visualize", upload.single("image"), async (req, res) => {
  const file = req.file;
  const prompt = req.body?.prompt as string | undefined;

  if (!file) {
    res.status(400).json({ error: "No image provided" });
    return;
  }

  if (!prompt || prompt.trim().length === 0) {
    res.status(400).json({ error: "No description provided" });
    return;
  }

  const tempPngPath = file.path + ".png";

  try {
    fs.renameSync(file.path, tempPngPath);

    const enhancedPrompt =
      `You are a professional home remodeling visualization artist. Transform this photo to realistically show the following remodeling work: ${prompt.trim()}. ` +
      `Make the result photorealistic, maintaining the same camera angle, lighting direction, and room dimensions. ` +
      `Keep all unchanged areas identical to the original. Apply professional-grade finishes and materials. ` +
      `The transformation should look like an actual completed renovation, not a rendering or sketch.`;

    const imageBuffer = await editImages([tempPngPath], enhancedPrompt);
    const base64 = imageBuffer.toString("base64");

    res.json({ image: base64 });
  } catch (err: unknown) {
    req.log.error({ err }, "Image visualization failed");
    const message = err instanceof Error ? err.message : "Visualization failed";
    res.status(500).json({ error: message });
  } finally {
    try {
      fs.unlinkSync(tempPngPath);
    } catch {
    }
  }
});

export default router;
