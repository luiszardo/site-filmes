// import { useState } from 'react'
import styled, {createGlobalStyle} from "styled-components"
import Terror from "./components/terror";
import Infantil from "./components/infantil";
import Acao from "./components/acao";
import Principal from "./components/principal";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{margin:0;
padding:0;
box-sizing: border-box;
}
`;
const Header = styled.header`
/* border:solid red; */
width: 100%;
`
const PrimeiraSessao = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #1d262b;
`;
const Figure = styled.figure`
  /* border: solid red; */
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  top: 20px;

  img {
    width: 80px;
  }

  h1 {
    color: #ffffff;
  }
`;
const Ul = styled.ul`
  /* border: solid red; */
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  margin-left: 600px;
`;

const Li = styled(Link)`
  list-style: none;
  color: #ffffff;
  font-size: 23px;
  text-decoration: none;
  color: white;
`;
function App() {
  // const [count, setCount] = useState(0)
  return (
    <Header>
      <GlobalStyle />
      <PrimeiraSessao>
        <Figure>
          <img
            src="https://th.bing.com/th/id/OIG.iuasAJpcNChMzV_8hrcS?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            alt=""
          />
          <h1>Zardo Filmes</h1>
        </Figure>
        <BrowserRouter>
          <nav>
            <Ul>
              <Li>
                <Li to="/">Home</Li>
              </Li>
              <Li>
                <Li to="/acao">Ação</Li>
              </Li>
              <Li>
                <Li to="/infantil">Infantil</Li>
              </Li>
              <Li>
                <Li to="/terror">Terror</Li>
              </Li>
            </Ul>
          </nav>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/acao" element={<Acao />} />
            <Route path="/infantil" element={<Infantil />} />
            <Route path="/terror" element={<Terror />} />
          </Routes>
        </BrowserRouter>
        {/* <Terror /> */}
        {/* <Infantil/> */}
        {/* <Acao/> */}
        {/* <Principal /> */}
      </PrimeiraSessao>
    </Header>
  );
}

export default App
