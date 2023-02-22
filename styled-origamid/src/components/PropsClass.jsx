import { useState } from "react";
import styled from "styled-components";

const Value = styled.p`
  background: ${(props) => props.color};
  font-size: ${(props) => props.size};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? "#53d" : "#29f")};
`;

export default function PropsClass() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Value color="#12d">R$ 2999</Value>
      <Value color="#84e" size="50px">
        R$ 1999
      </Value>
      <Button active={active} onClick={() => setActive(!active)}>
        {active ? "Desativado" : "Ativado"}
      </Button>
    </div>
  );
}
