import db from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { nome, email, senha, genero, data_nascimento, role = "aluno" } = await request.json();

    if (!nome || !email || !senha) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const existe = await db.query(
      "SELECT id FROM aluno WHERE email = $1",
      [email]
    );

    if (existe.rowCount > 0) {
      return NextResponse.json({ error: "E-mail já cadastrado" }, { status: 409 });
    }

    const senhaHash = await bcrypt.hash(senha, 12);

    await db.query(
      `INSERT INTO aluno (nome, email, senha_hash, genero, data_nascimento, role)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [nome, email, senhaHash, genero, data_nascimento, role]
    );

    return NextResponse.json({ message: "Usuário criado com sucesso!" }, { status: 201 });

  } catch (error) {
    console.error("Erro ao adicionar aluno:", error);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
