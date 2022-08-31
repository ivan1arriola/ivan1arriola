import Image from "react-bootstrap/Image";

const SobreMi = () => {
  const foto = require("../img/selfie.jpg");

  /* Actualiza la edad automaticamente */
  const hoy = new Date();
  const cumpleanos = new Date("02/01/2000");
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  // ------

  return (
    <>
      <h2>Sobre Mi</h2>
      <div className="container">
        <Image
          id="selfie"
          roundedCircle="true"
          thumbnail="true"
          src={foto}
          alt="Selfie"
        />
        <p className="text">
          Mi nombre es Ivan Arriola, tengo {edad} años <br />
          Soy de Montevideo, Uruguay. <br />
          Estudio ingenieria en Computacion en la FING, UdelaR. <br />
          Tambien soy estudiante del programa de Jovenes a Programar de Ceibal{" "}
          <br />
        </p>
      </div>

      <hr />
    </>
  );
};
export default SobreMi;
