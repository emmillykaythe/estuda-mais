import db from "@/lib/db";        
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { nome, email, senha, genero, data_nascimento, role = "aluno" } =
      await request.json();

    console.log("Recebi do frontend:", nome, email, senha, genero, data_nascimento);

    if (!nome || !email || !senha || !genero || !data_nascimento) {
      return NextResponse.json(
        { error: "Preencha todos os campos." },
        { status: 400 }
      );
    }

    const client = await db.connect();

    const existe = await client.query(
      "SELECT id FROM aluno WHERE email = $1",
      [email]
    );

    if (existe.rowCount > 0) {
      client.release();
      return NextResponse.json(
        { error: "E-mail já cadastrado." },
        { status: 409 }
      );
    }

    const senhaHash = await bcrypt.hash(senha, 12);

    await client.query(
      `INSERT INTO aluno 
        (nome, email, senha_hash, genero, data_nascimento, role)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [nome, email, senhaHash, genero, data_nascimento, role]
    );

    client.release(); // a conexão volta para o db, fica livre para outros usos

    return NextResponse.json(
      { message: "Usuário criado com sucesso!" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Erro ao criar aluno:", error.message, error.stack);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await db.connect();
    const result = await client.query("SELECT * FROM aluno");
    client.release();

    return NextResponse.json(result.rows);

  } catch (error) {
    console.error("Erro listando alunos:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
