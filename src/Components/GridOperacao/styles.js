import styled from "styled-components";


export const GridDiv = styled.div`
  display: flex;
  padding: 5px;
`

export const Table = styled.table`
  width: 98%;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  color: white;
  background-color: #201d1d;
`

export const THead = styled.thead`
  text-align: right;
  background-color: #314d4a;
  color: #c4c8c5;
`
export const TBody = styled.thead`
  text-align: right;
  background-color: transparent;
  color: #c4c8c5;
`

export const Tr = styled.tr`
  border-style: solid;
  border-width: 0;
`

export const Td = styled.td`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #6a6a6a;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`