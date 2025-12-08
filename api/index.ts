import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from "openai";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const path = req.url?.replace('/api', '') || '/';

  if (path === '/ping' && req.method === 'GET') {
    const ping = process.env.PING_MESSAGE ?? "ping";
    return res.json({ message: ping });
  }

  if (path === '/demo' && req.method === 'GET') {
    return res.status(200).json({ message: "Hello from Express server" });
  }

  if (path === '/chat' && req.method === 'POST') {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!process.env.OPENAI_API_KEY) {
        console.error("OPENAI_API_KEY not configured");
        return res.status(500).json({ error: "API key not configured" });
      }

      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Você é um consultor empresarial direto e objetivo. Sua missão é identificar rapidamente a necessidade do cliente e mostrar, com clareza e poucas palavras, como os serviços do José Vitor resolvem o problema.
                      Guia de comportamento:
                      - Responda de forma prática, concisa e firme.
                      - Evite rodeios, explicações longas ou linguagem informal demais.
                      - Mantenha coerência e foco no objetivo do cliente.
                      - Atue como um coach empresarial: identifique a dor, destaque oportunidades e direcione para uma solução clara.

                      Você pode oferecer apenas estes serviços:
                      1. Automação com IA
                      2. Agentes de IA personalizados (incluindo agentes de voz)
                      3. Chatbots e assistentes virtuais
                      4. Desenvolvimento de sites modernos e otimizados
                      5. Sistemas sob medida (Java, Spring Boot, Web)
                      6. Integrações com WhatsApp, APIs e Make.com
                      7. Consultoria e implementação de processos inteligentes

                      Diretrizes de resposta:
                      - Conecte o que o cliente precisa com um ou mais serviços acima.
                      - Destaque sempre o benefício imediato e objetivo.
                      - Seja assertivo na orientação do próximo passo.
                      - Não invente serviços que não estão na lista.
                      - Nunca fuja da necessidade apresentada pelo cliente.`,
          },
          { role: "user", content: message },
        ],
        model: "gpt-4o-mini",
      });

      const responseMessage = completion.choices[0].message.content;

      return res.json({ message: responseMessage });
    } catch (error: any) {
      console.error("OpenAI API error:", error);
      return res.status(500).json({ 
        error: "Internal server error",
        details: error.message 
      });
    }
  }

  if (path === '/send-contact' && req.method === 'POST') {
    try {
      const { nome, email, assunto, mensagem } = req.body;

      if (!nome || !email || !assunto || !mensagem) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${nome}" <${process.env.SMTP_USER || email}>`,
        to: "masierojosevitor456@gmail.com",
        replyTo: email,
        subject: `[Contato Portfolio] ${assunto}`,
        text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
        html: `
          <h3>Nova mensagem de contato do portfólio</h3>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${assunto}</p>
          <br/>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem.replace(/\n/g, "<br>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return res.status(500).json({ error: "Falha ao enviar email. Tente novamente mais tarde." });
    }
  }

  return res.status(404).json({ error: "Not found" });
}