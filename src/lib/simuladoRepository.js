import db from "@/lib/db";

export const getSimulados = async () => {
  const result = await db.query("SELECT id, title, description FROM simulados");
  return result.rows;
}

export const insertSimulado = async (titulo, descricao) => {
  return await db.query(
      'INSERT INTO simulados (title, description) VALUES ($1, $2) RETURNING *',
      [titulo, descricao]
    );
}