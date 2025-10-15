import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/inicio/page'
 
describe('Home', () => {
  it('renderiza sem erros', () => {
    render(<Home/>)
  })
})
