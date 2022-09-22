import styled from "styled-components";
import { GiFullPizza } from "react-icons/gi";
import SaladBuilder from "./SaladBuilder";
import SaladSummary from "./SaladSummary";

import { SaladProvider } from "../../context/SaladContext";

const Heading = styled.h1`
  text-align: center;
`;

const SaladMaker = () => {
  return (
    <SaladProvider>
      <Heading>
        <GiFullPizza style={{ color: "red" }} />
        <span> Build Your Own Custom Salade </span>
        <GiFullPizza style={{ color: "red" }} />
      </Heading>
      <SaladBuilder />
      <SaladSummary />
    </SaladProvider>
  );
};

export default SaladMaker;
