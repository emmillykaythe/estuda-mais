import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { nome, email, senha, genero, data_nascimento, role = "aluno" } =
      await request.json();

    if (!nome || !email || !senha) {
      return NextResponse.json(
        { error: "Preencha todos os campos!" },
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
        { error: "A conta já existe!" },
        { status: 409 }
      );
    }

    const senhaHash = await bcrypt.hash(senha, 12);

    await client.query(
      `INSERT INTO aluno 
        (nome, email, senha_hash, genero, data_nascimento, role)
       VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [nome, email, senhaHash, genero, data_nascimento, role]
    );

    client.release();

    return NextResponse.json(
      { message: "Cadastro realizado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
