import { Phone } from "lucide-react";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { company, email, phone, name, more } = await req.json();

    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // 2. Define mail options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // your email to receive messages
      subject: `New message from ${name}`,
      message: { message: more || "no Message Entered" },
      phone: { phone: phone },
      company: { company: company },
      email: { email: email },
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
