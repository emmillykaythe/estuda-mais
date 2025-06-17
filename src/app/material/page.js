import db from "@/lib/db";

export default async () => {
    const materiais = await db.query("select * from material")
    return (
    <>
        <h1>Materiais</h1>
         {
         materiais.rows.map( 
            material => (
               <div key={material.id}>
                  <h2>{material.nome}</h2>
               </div>
            ) 
         )
      }
    </>
    );
}