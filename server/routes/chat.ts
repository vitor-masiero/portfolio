import { Request, Response } from "express";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function handleChat(req: Request, res: Response) {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system", content: `Você é um consultor empresarial direto e objetivo. Sua missão é identificar rapidamente a necessidade do cliente e mostrar, com clareza e poucas palavras, como os serviços do José Vitor resolvem o problema.
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
                                            - Nunca fuja da necessidade apresentada pelo cliente.` },
                { role: "user", content: message },
            ],
            model: "gpt-4o-mini",
        });

        const responseMessage = completion.choices[0].message.content;

        res.json({ message: responseMessage });
    } catch (error) {
        console.error("OpenAI API error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
