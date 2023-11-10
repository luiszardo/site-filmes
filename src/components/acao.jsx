import styled from "styled-components"

const SessaoAcao = styled.section`
  /* border: solid green; */
  height: 100vh;
  width: 100%;
  background-color: red;

  @media (max-width:750px){
    width: 100%;
    height:158vh;
  }
`;

const TituloPrincipal = styled.h1`
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  font-size: 40px;
  height: 8vh;
`;

const PrimeiraDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  position: relative;
  top: 30px;
  iframe {
    border: solid blue;
    border-radius: 15px;
  }

  @media (max-width:750px) {
    width: 100%;
    height: 70vh;
    flex-direction: column;
    align-items: center;

    iframe{
      width: 35vw;
      height: 20vh;
    
    }
  }
`;
const SegundaDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  position: relative;
  top: 45px;

  iframe {
    border: solid blue;
    border-radius: 15px;
  }

  @media (max-width:750px) {
    width: 100%;
    height: 70vh;
    flex-direction: column;
    align-items: center;

    iframe{
      width: 35vw;
      height: 20vh;
    
    }
  }
`;

function Acao() {
  return (
    <SessaoAcao>
      <TituloPrincipal>Filmes de Ação</TituloPrincipal>
      <PrimeiraDiv>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/zpDe78CNhZM?si=VsM-7hN7wzQaW7eS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/qZ8ylOdsOf4?si=koScswy0onMAavAr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/qeL_VswdlGo?si=kvxu9O95qMcj900p"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </PrimeiraDiv>
      <SegundaDiv>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/BZca4jyYZXE?si=eiS9HYLTZPNRnCJK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/-imSUhbD--w?si=Wbmn75pLGSxhgknV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/jBUaAHxS9NQ?si=fBpBuJ-qCGmiPoJf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </SegundaDiv>
    </SessaoAcao>
  );
}

export default Acao;