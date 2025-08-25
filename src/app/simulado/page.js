import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const dados = [
  { title: "Enem - Conjuntos", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Funções", subject: "Afim, quadrática, modular e exponencial", description: "45 questões de matemática e suas tecnologias"},
  { title: "Enem - Sequências numéricas", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Função logarítmica", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Trigonometria", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Matrizes", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Sistemas Lineares", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Geometria", subject: "Plana e Espacial", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Análise combinatória", subject: "Probabilidade e Tratamento de informação", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Matemática Financeira", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Estatísticas Básicas", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Geometria Analítica", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Circunferência", description: "45 questões de matemática e suas tecnologias" },
  { title: "Enem - Crônicas", description: "45 questões de matemática e suas tecnologias" },
];

function Assuntos({ title, subject, description }) {
  return (
    <div className={styles.caixa}>  
      <div className={styles.organizacao}>
        <Image className={styles.grafico} src="/grafico-simulado.png" width="30" height="30" alt="Gráfico"/>
        <div className={styles.textos}>
          <h3>{title}</h3>
          <p className={styles.subject}> {subject}</p>
        </div>
      </div>
      <p>{description}</p>
      <button className={styles.botaoIniciar}>Iniciar</button>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/material"> 
        <div className={styles.voltar}>
          <Image className={styles.buttonVoltar} src="/voltar.png" width="20" height="20" alt="Voltar" />
       </div>
      </Link>
          <Image className={styles.logo} src="/logo-original.svg" width="150" height="150" alt="Logo" />
      <div className={styles.container}>
        {dados.map((assuntos, index) => (
          <Assuntos key={index} title={assuntos.title} subject={assuntos.subject} description={assuntos.description} />
        ))}
      </div>
    </div>
  );
}