import React from "react";
import styled from "styled-components";
const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;
const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
`;
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const TableCell = styled.td`
  padding: 8px;
`;
interface Product {
  name: string;
  priceKsh: string;
  priceUsd: string;
}
interface Props {
  products: Product[];
}
const ProductsTable: React.FC<Props> = ({ products }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Product</TableHeader>
            <TableHeader>Price (Ksh)</TableHeader>
            <TableHeader>Price (USD)</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.priceKsh}</TableCell>
              <TableCell>{product.priceUsd}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};
export default ProductsTable;
