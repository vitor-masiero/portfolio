import { Request, Response } from "express";
import nodemailer from "nodemailer";

export async function handleContact(req: Request, res: Response) {
    try {
        const { nome, email, assunto, mensagem } = req.body;

        if (!nome || !email || !assunto || !mensagem) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        console.log("SMTP Config:", {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS ? "****" : "missing",
        });

        // Configure transporter using environment variables
        // Ideally, these should be set in your .env file
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${nome}" <${process.env.SMTP_USER || email}>`, // Sender address
            to: "masierojosevitor456@gmail.com", // List of receivers
            replyTo: email,
            subject: `[Contato Portfolio] ${assunto}`, // Subject line
            text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`, // Plain text body
            html: `
        <h3>Nova mensagem de contato do portfólio</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, "<br>")}</p>
      `, // HTML body
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return res.status(500).json({ error: "Falha ao enviar email. Tente novamente mais tarde." });
    }
}
