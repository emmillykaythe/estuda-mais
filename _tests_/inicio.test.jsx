import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/inicio/page'
 
describe('Página Início', () => {

  it('renderiza sem erros', () => {
    render(<Home/>)
  })

  it('renderiza o título da plataforma "Estuda+"', () => {
    render(<Home/>)
    const titulo = screen.getByText(/Plataforma Estuda\+/i)
    expect(titulo).toBeInTheDocument()
  })

  it('renderiza a seção de Materiais', () => {
    render(<Home/>)
    const materiais = screen.getAllByText('Materiais')
    expect(materiais.length).toBeGreaterThan(0)
  })

  it('renderiza a seção de Simulados', () => {
    render(<Home/>)
    const simulados = screen.getAllByText('Simulados')
    expect(simulados.length).toBeGreaterThan(0)
  })

  it('renderiza o texto descritivo de Materiais', () => {
    render(<Home/>)
    const textoMateriais = screen.getByText('Acesse conteúdos completos para reforçar seus estudos.')
    expect(textoMateriais).toBeInTheDocument()
  })

  it('renderiza o texto descritivo de Simulados', () => {
    render(<Home/>)
    const textoSimulados = screen.getByText('Faça simulados e acompanhe sua evolução no aprendizado.')
    expect(textoSimulados).toBeInTheDocument()
  })

  it('renderiza o texto descritivo da plataforma', () => {
    render(<Home/>)
    const textoDescritivo = screen.getByText('Tenha os assuntos mais importantes da grade curricular de matemática no enem.')
    expect(textoDescritivo).toBeInTheDocument()
  })

  it('renderiza links para Materiais', () => {
    render(<Home/>)
    const linksMateriais = screen.getAllByRole('link', { name: /Material/i })
    expect(linksMateriais.length).toBeGreaterThan(0)
  })

  it('renderiza links para Simulados', () => {
    render(<Home/>)
    const linksSimulados = screen.getAllByRole('link', { name: /Simulado/i })
    expect(linksSimulados.length).toBeGreaterThan(0)
  })

  it('renderiza o botão "Inicio" na navegação lateral', () => {
    render(<Home/>)
    const botoesComInicio = screen.getAllByRole('button')
    expect(botoesComInicio.length).toBeGreaterThan(0)
  })

  it('renderiza todas as imagens esperadas', () => {
    render(<Home/>)
    const imagens = screen.getAllByRole('img')
    expect(imagens.length).toBeGreaterThan(0)
  })

  it('renderiza imagem de voltar com alt correto', () => {
    render(<Home/>)
    const imagemVoltar = screen.getByAltText('Voltar')
    expect(imagemVoltar).toBeInTheDocument()
  })

  it('renderiza imagem da logo com alt correto', () => {
    render(<Home/>)
    const logo = screen.getByAltText('Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renderiza imagem(s) com alt "Simulados"', () => {
    render(<Home/>)
    const modelos = screen.getAllByAltText('Simulados')
    expect(modelos.length).toBeGreaterThan(0)
  })

  it('renderiza imagem do modelo com alt correto', () => {
    render(<Home/>)
    const modelo = screen.getByAltText('Modelo estuda+')
    expect(modelo).toBeInTheDocument()
  })

  it('renderiza imagem(s) com alt correto', () => {
    render(<Home/>)
    const modelos = screen.getAllByAltText('Material')
    expect(modelos.length).toBeGreaterThan(0)
  })

    it('renderiza imagem do modelo com alt correto', () => {
    render(<Home/>)
    const modelo = screen.getByAltText('linha')
    expect(modelo).toBeInTheDocument()
  })

  it('renderiza imagem do modelo com alt correto', () => {
    render(<Home/>)
    const modelo = screen.getByAltText('Inicio')
    expect(modelo).toBeInTheDocument()
  })
})
