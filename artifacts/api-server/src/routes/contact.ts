import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    logger.error("RESEND_API_KEY is not configured");
    res.status(503).json({ error: "Email service is not configured." });
    return;
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "AV.AI Portfolio <onboarding@resend.dev>",
      to: "avishek.chatterjee@aol.com",
      replyTo: email.trim(),
      subject: `New inquiry from ${name.trim()} via AV.AI`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f5f0; color: #1a1a1a;">
          <div style="border-left: 3px solid #e63324; padding-left: 16px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 4px; font-size: 18px;">New Portfolio Inquiry</h2>
            <p style="margin: 0; color: #666; font-size: 13px;">via AV.AI — avishek.chatterjee.com</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; width: 80px;">From</td>
              <td style="padding: 8px 0; font-size: 15px;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Email</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email.trim()}" style="color: #e63324;">${email.trim()}</a></td>
            </tr>
          </table>
          <div style="background: #fff; border: 1px solid #e0dbd5; padding: 16px;">
            <p style="margin: 0 0 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</p>
          </div>
          <p style="margin: 24px 0 0; font-size: 12px; color: #999;">Reply directly to this email to respond to ${name.trim()}.</p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
