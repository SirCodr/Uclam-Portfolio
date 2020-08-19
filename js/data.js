async function setData() {
  const res = await fetch("./data/info.json");
  const data = await res.json();

  /* PORTAFOLIO CABECERA */
  document.querySelector("#nameUser").textContent =
    data.nombre + " " + data.apellido;
  document.querySelector("#career").textContent = data.ocupacion + " de " + data.carrera;

  /* HABILIDADES */ /* POP-UP */
  document.querySelector("#portfolioModal1Label").textContent =
    data.habilidades[0].habilidad;
  document.querySelector("#portfolioModal2Label").textContent =
    data.habilidades[1].habilidad;
  document.querySelector("#portfolioModal3Label").textContent =
    data.habilidades[2].habilidad;
  document.querySelector("#portfolioModal1Image").src =
    "../assets/img/portfolio/vscode.png"
  document.querySelector("#portfolioModal2Image").src =
  "../assets/img/portfolio/jscode.gif"
  document.querySelector("#portfolioModal3Image").src =
  "../assets/img/portfolio/minifiedcode.png"

    /* NO POP-UP */
  document.querySelector("#portfolio1Image").src = data.habilidades[0].logo;
  document.querySelector("#portfolio2Image").src = data.habilidades[1].logo;
  document.querySelector("#portfolio3Image").src = data.habilidades[2].logo;

  const cssInfo = `
        Diseño de interfaces modernas y responsive. Manejo de frameworks como <strong>Bootstrap</strong> .
    `;
  const jsInfo = `
        Promación asincrona y funcional.
         Manejo de <strong>REST Apis</strong>.
    `;
  const webPackInfo = `
        Empaquetación de modulos.
    `;
  document.querySelector("#abilityInfo1").innerHTML = cssInfo;
  document.querySelector("#abilityInfo2").innerHTML = jsInfo;
  document.querySelector("#abilityInfo3").innerHTML = webPackInfo;

  /* SOBRE MI */

  const aboutMeLeft = `
        Mi nombre es ${data.nombre}, soy ${data.ocupacion.toLowerCase()} de ${data.semestreActual.toLowerCase()} semestre
         en ${data.carrera.toLowerCase()} de la ${data.universidad},
         tengo 19 años.
          <p>
          Soy un ${data.nacionalidad.toLowerCase()} bilingue (${data.idiomas[0]} e ${data.idiomas[1]}).
          </p>
    `; 

  const aboutMeRight = `
        Soy un apasionado por el ${data.pasion[0].actividad.toLowerCase()} en el area del Frontend. Además de la programación manejo
         tecnologias de creación y edición multimedia como ${data.otrasHabilidades[0]}, ${data.otrasHabilidades[1]},
          ${data.otrasHabilidades[2]}, ${data.otrasHabilidades[3]}.
    `;


document.querySelector("#sobre-mi-1").innerHTML = aboutMeLeft;
document.querySelector("#sobre-mi-2").innerHTML = aboutMeRight;

/* FOOTER */

const locacion = `${data.municipio}, ${data.departamento}. <br> ${data.ip}`
document.querySelector("#locacion-p").innerHTML = locacion;

}

function setRangeLove(value){
    document.querySelector("#spanRangeLove").innerHTML = `¡ ` + value + ` <span> Puntos ! </span> `
}

window.onload = function () {
  setData();

};
