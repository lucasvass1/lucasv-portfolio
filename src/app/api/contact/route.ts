import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação simples
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfólio Lucas Vasconcelos <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO as string,
      replyTo: email,
      subject: subject ? `[Portfólio] ${subject}` : "[Portfólio] Nova mensagem de contato",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Nova mensagem pelo portfólio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          ${subject ? `<p><strong>Assunto:</strong> ${subject}</p>` : ""}
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}