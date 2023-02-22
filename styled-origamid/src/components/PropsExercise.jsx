import { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Title = styled.h1`
  color: ${(props) => props.color};
`;

export default function PropsExercise() {
  const [color, setColor] = useState(true);

  function handleChange() {
    setColor(!color);
  }
  return (
    <>
      <Title color={color ? "#86d" : "#13b"}>Banana</Title>
      
      <Switch onChange={handleChange} checked={color} />
    </>
  );
}
