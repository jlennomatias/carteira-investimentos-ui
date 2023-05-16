import carteiraInstance from '../../Services/Api'

import { GridDiv, Table, THead, TBody, Tr, Td } from "./styles";
import useAxios from '../../Hook/axios-instance';
import Botao from '../Botao';

const GridAtivo = () => {

  const [ativoList, loading, error] = useAxios({
    axiosInstance: carteiraInstance,
    method: 'get',
    url: '/carteira/bd21e028-16e2-4061-8d6a-20d65ef907b2',
  })
  console.log(ativoList)
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <GridDiv>
        <p>Ativos</p>
      </GridDiv>
      <ul className="ativos">
        <Table>
          <THead>
            <Tr>
              <Td>Codigo do ativo</Td>
              <Td>quantidade</Td>
              <Td>preço medio</Td>
              <Td>preço atual</Td>
            </Tr>
          </THead>
          <TBody>
            {ativoList.ativos_carteira.map((ativo, index) => (
            <Tr key={index}>
              <Td>{ativo.codigo_ativo}</Td>
              <Td>{ativo.quantidade_ativos}</Td>
              <Td>{ativo.preco_medio}</Td>
              <Td>{ativo.preco_atual}</Td>
              <Td>
                  <Botao
                    type='submit'
                    text='Editar'
                    // onClick={handleSubmit}
                  />
                </Td>
                <Td>
                <Botao
                    type='submit'
                    text='Remover'
                    // onClick={handleSubmit}
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

export default GridAtivo;
