import db from "@/lib/db"
import {NextResponse} from "next/server"

export async function POST() {
    const result = await db.query('SELECT * FROM aluno')
    return NextResponse.json(result.rows)
}