import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, senha } = await req.json();

    if (!email || !senha) { //faltando campos
      return NextResponse.json(
        { error: "Por favor, preencha todos os campos." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) { //texto @ texto . texto
      return NextResponse.json(
        { error: "Formato de e-mail inválido." },
        { status: 400 }
      );
    }

    const result = await db.query( 
      "SELECT id, nome, email, senha_hash FROM aluno WHERE email = $1",
      [email]
    );
 
    if (result.rowCount === 0) { // aluno não encontrado
      return NextResponse.json(
        { error: "Email ou senha inválidos." },
        { status: 401 }
      );
    }

    const usuario = result.rows[0];

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaCorreta) {
      return NextResponse.json(
        { error: "Email ou senha inválidos." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Login realizado com sucesso!",
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
