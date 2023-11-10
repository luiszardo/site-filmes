import styled from "styled-components"

const SessaoInfantil = styled.section`
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
  background-color: black;
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
function Infantil() {
  return (
    <SessaoInfantil>
      <TituloPrincipal>Filmes Animados</TituloPrincipal>
      <PrimeiraDiv>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/uqWrwi3IdOE?si=HPU3wpVOsfCWiior"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/TWSEBJ2MGhg?si=jXTmxtM3s9KdY5D3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/6BGHPX90CZQ?si=TBVJpVhw1IzEH0wH"
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
          src="https://www.youtube.com/embed/u0A8XchmHuc?si=a__TmhRoz-kb8zVp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/PzkP78onuAc?si=LUtR1otK8r4JYVwn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/t_H_RiHrbNY?si=XKpnyAQ4QeRXsE-U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </SegundaDiv>
    </SessaoInfantil>
  );
}

export default Infantil;