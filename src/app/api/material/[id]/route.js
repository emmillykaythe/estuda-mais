import db from "@/lib/db";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json({ error: "ID não enviado" }, { status: 400 });
    }

    await db.query(`DELETE FROM material WHERE id = $1`, [id]);

    return Response.json({ message: "Material removido com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar material:", error);
    return Response.json({ error: "Erro interno" }, { status: 500 });
  }
}