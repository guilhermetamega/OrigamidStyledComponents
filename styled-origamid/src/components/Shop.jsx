import styled from "styled-components";

const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Buy = styled.button`
  font-size: 1rem;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Value = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.2rem;
`;

export default function Shop() {
  return (
    <ProductsContainer>
      <Product>
        <Title>
          Notebook <Value>R$ 1999</Value>
        </Title>
        <Buy>Comprar</Buy>
      </Product>
      <Product>
        <Title>
          Smartphone <Value>R$ 2999</Value>
        </Title>
        <Buy>Comprar</Buy>
      </Product>
    </ProductsContainer>
  );
}
