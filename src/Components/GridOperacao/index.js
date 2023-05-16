import carteiraInstance from '../../Services/Api'

import { GridDiv, Table, THead, TBody, Tr, Td } from "./styles";
import useAxios from '../../Hook/axios-instance';
import Botao from '../Botao'


const GridOperacao = () => {

  const [operacaoList, loading, error] = useAxios({
    axiosInstance: carteiraInstance,
    method: 'get',
    url: '/carteira/bd21e028-16e2-4061-8d6a-20d65ef907b2',
  })

  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  const handleSubmitChange = async (event) => {
    event.preventDefault();
    try {
      console.log()
    }
    catch (err) {
    }
  }

  const handleSubmitRemove = (event) => {
    console.log()
  }

  return (
    <div>
      <GridDiv>
        <p>Operação</p>
      </GridDiv>
      <ul className="ativos">
        <Table>
          <THead>
            <Tr>
              <Td>Codigo do ativo</Td>
              <Td>quantidade</Td>
              <Td>valor Pago</Td>
              <Td>Tipo de Operação</Td>
              <Td>Data da Operação</Td>
            </Tr>
          </THead>
          <TBody>
            {operacaoList.operacao.map((ativo, index) => (
              <Tr key={index}>
                <Td>{ativo.codigo_ativo}</Td>
                <Td>{ativo.quantidade_ativo}</Td>
                <Td>{ativo.valor_operacao}</Td>
                <Td>{ativo.tipo_operacao}</Td>
                <Td>{ativo.data_operacao}</Td>
                <Td>
                  <Botao
                    type='submit'
                    text='Editar'
                    onClick={handleSubmitChange}
                  />
                </Td>
                <Td>
                <Botao
                    type='submit'
                    text='Remover'
                    onClick={handleSubmitRemove}
                  />
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </ul>
    </div>
  );
};

export default GridOperacao;
