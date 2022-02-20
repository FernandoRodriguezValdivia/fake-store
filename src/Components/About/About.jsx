import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #555;
  border-radius: 30px;
  margin: 30px;
  display: flex;
  justify-content: space-around;
  section {
    text-align: left;
  }
  .imagen {
    margin: 30px;

    img {
      border: 2px solid #777;
      border-radius: 20px;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default function About() {
  return (
    <Container>
      <div className="imagen">
        <img src="https://picsum.photos/id/237/300" alt="descripcion" />
      </div>
      <section>
        <h1>Fernando Rodriguez Valdivia</h1>
        <div>
          <p>
            Soy un estudiante de matemática, con una gran pasión por la
            programación. Me gusta leer y ver películas.
          </p>

          <p>En este programa he aprendido:</p>
          <ul>
            <li>Git</li>
            <li>React</li>
            <li>Node</li>
          </ul>
          <p>Correo: frodvaldivia@gmail.com</p>
          <a href="https://github.com/FernandoRodriguezValdivia">
            Enlace a mi Github
          </a>
        </div>
      </section>
    </Container>
  );
}
