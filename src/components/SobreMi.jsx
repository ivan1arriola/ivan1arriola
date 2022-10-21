import Image from "react-bootstrap/Image";

const SobreMi = () => {



  /* Actualiza la edad automaticamente */
  const hoy = new Date();
  const cumpleanos = new Date("02/01/2000");
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  // ------
  const foto = require("../img/selfie.jpg")
  return (
    <>
      <h2>Sobre Mi</h2>
      <div className="d-flex justify-content-center mx-2">

        <div className="col-md-9 d-flex justify-content-center align-items-center">
          <div>
            <p>Mi nombre es Ivan Arriola y tengo {edad} años.<br />
              Soy de  Montevideo, Uruguay.<br />
              Estudio Ingenieria en Computacion en la FING, UdelaR. <br />
              Tambien soy estudiante de Jovenes a Programar, un programa de Ceibal</p>
          </div>
        </div>

        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <div>
            <Image
              roundedCircle="true"
              thumbnail="true"
              src={foto}
              alt="Selfie"
            />
          </div>
        </div>



      </div>



      <hr />
    </>
  );
};
export default SobreMi;
