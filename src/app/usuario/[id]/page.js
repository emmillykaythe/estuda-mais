import db from "@/lib/db"; // para acessar o banco de dados

export default async ({params}) => { // dizendo que vai ser de forma assincrona, ou seja, lenta

    const usuario = await db.query("select * from usuario where id = " + params.id); // fazendo consulta

    return (        
        <>
            <h1> Pagina do aluno: {usuario.rows[0].nome} </h1>
            <p>O aluno faz parte do projeto {usuario.rows[0].cargo} </p>
        </>
    )
} 