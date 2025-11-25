import Titulo from '../../components/Titulo'
import Paragrafo from '../Paragrafo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com Vue.js</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
