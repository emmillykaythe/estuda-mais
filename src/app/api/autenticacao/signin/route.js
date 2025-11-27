  import { NextResponse } from "next/server";
  import db from "@/lib/db";
  import bcrypt from "bcryptjs";

  export async function POST(request) {
    try {
      const { email, senha } = await request.json();

      if (!email || !senha) {
        return NextResponse.json(
          { error: "Por favor, preencha todos os campos." },
          { status: 400 }
        );
      }

      const aluno = await db.connect();

      // Busca aluno
      const result = await aluno.query(
        "SELECT id, nome, email, senha_hash, genero, data_nascimento FROM aluno WHERE email = $1",
        [email]
      );

      aluno.release();

      if (result.rowCount === 0) {
        return NextResponse.json(
          { error: "Email ou senha inválidos." },
          { status: 401 }
        );
      }

      const user = result.rows[0];

      const senhaCorreta = await bcrypt.compare(senha, user.senha_hash);

      if (!senhaCorreta) {
        return NextResponse.json(
          { error: "Email ou senha inválidos." },
          { status: 401 }
        );
      }

      return NextResponse.json(
        {
          id: user.id,
          nome: user.nome,
          email: user.email,
        },
        { status: 200 }
      );

    } catch (error) {
      console.error("Erro ao logar:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
