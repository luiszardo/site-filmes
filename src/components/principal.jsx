import styled from "styled-components"

const Main = styled.main`
  /* border:solid green; */
  background-image: url("https://img.lovepik.com//photo/40010/6934.jpg_860.jpg");
  background-size: 100% 100%;
  height: 100vh;
`;
const TituloPrincipal = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  position: relative;
  top: 10px;
`;
const PrimeiraDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  position: relative;
  top: 30px;

  iframe {
    border: solid purple;
    border-radius: 15px;
  }
`;
const SegundaDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 40px;

  iframe {
    border: solid purple;
    border-radius: 15px;
  }
`;

function Principal() {
  return (
    <Main>
      <TituloPrincipal>Principais Destaques</TituloPrincipal>
      <PrimeiraDiv>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/fdLXS00zg3Y?si=GLBwuo1F1Xe_wkIL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/OGdwlGWR9tk?si=qHIm08QKgkf9huua"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </PrimeiraDiv>
      <SegundaDiv>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/Z3BkpGLa-7I?si=TbiSdOCmIrJpLErF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </SegundaDiv>
    </Main>
  );
}

export default Principal;