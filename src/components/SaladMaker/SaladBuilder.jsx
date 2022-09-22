import styled from "styled-components";
import { useContext } from "react";

import SaladItem from "./SaladItem";
import SaladContext from "../../context/SaladContext";

/* const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 50px;
  justify-content: center;
`; */

const BuilderWrapper = styled.div`
  max-width: 1000px;
  max-height: 70vh;
  overflow-y: scroll;
  margin: 0 auto;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  &::-webkit-scrollbar {
    /* display: none; */
    width: 10px;
    background-color: #ede6e6;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bfbebc;
    border-radius: 5px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  @media (max-width: 920px) and ((min-width: 700px)) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;

const SaladBuilder = () => {
  const { ingredients } = useContext(SaladContext);

  return (
    <BuilderWrapper>
      {ingredients.map(({ name, image }) => (
        <SaladItem key={name} image={image} name={name} />
      ))}
    </BuilderWrapper>
  );
};

export default SaladBuilder;
