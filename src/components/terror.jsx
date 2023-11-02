import styled from "styled-components"

const SessãoFilmes = styled.section`
  /* border: solid green; */
  height: 100vh;
  width: 100%;
  background-color: red;
`;

const TituloPrincipal = styled.h1`
  text-align: center;
  color: #ffffff;
  background-color: black;
  height: 8vh;
  font-size: 40px;
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
`;

function Terror() {
  return (
    <SessãoFilmes>
      <TituloPrincipal>Filmes de Terror</TituloPrincipal>
      <PrimeiraDiv>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/6tG_M9dBGWc?si=R7llYYkf4yA44NQh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/gMEd96jI_QI?si=N2qJ5vAv1ZTwmOA9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/gGjcXSLTRGY?si=x-OOhKLpwLGOU5bv"
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
          src="https://www.youtube.com/embed/FgjqBjwhm7Q?si=IgoJEiWmapQaxoot"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/KqIWe3I4LLo?si=n1rjXOik7hdm50Ki"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/GV-gVbO4RWc?si=i2-4u5s8pqVxXaqi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </SegundaDiv>
    </SessãoFilmes>
  );
}

export default Terror;