console.log("Prueba ok")

const {Colonia, Claro, Castillo, parqueEncantado} = require("./ParqueEncantado");
const {Mascota, guardian, hechicero, Domador, Duende, Hada} = require("./criaturas"); 


const h1 = new Hada("Hada Azul", 60, 70, guardian);
const d1 = new Duende("Duende Enano",40, 30, new Domador([new Mascota(5,false)]))

const m2 = new Mascota(12, false);
const m3 = new Mascota(8, true);

const d2 = new Duende("Duende Norte", 5, 20, new Domador([m2,m3]));

const h2 = new Hada("Hada Eterna", 60, 70, hechicero);

const m4 = new Mascota(14, false);

const h3 = new Hada("Hada Dorada", 70, 50, new Domador([m4]) );
const d3 = new Duende("Duende Mágico", 20, 40, new Domador([new Mascota(1,true), new Mascota(12,true)]));


const h4 = new Hada("Hada mala", 160, 270, guardian);
const d4 = new Duende("Duende tremendo", 120, 240, new Domador([new Mascota(16,true), new Mascota(12,true)]));
const d5 = new Duende("Duende loco", 620, 200, new Domador([new Mascota(2,true), new Mascota(1,true)]))


console.log("🟢 Consultas Básicas de Criaturas");
console.log(h1.name," - Rol: ", h1.rol.name);
console.log(h1.name," - Poder mágico: ", h1.getPoderMagico());
console.log(h1.name," - Poder ofensivo: ", h1.getPoderOfensivo());
console.log(h1.name," - Es astuta?: ", h1.esAstuta());
console.log(h1.name," - Es formidable?: ", h1.esFormidable());
console.log(h1.name," - Es extraordinaria?: ", h1.esExtraordinaria());
console.log(h1.name," - Cuanto vuela?: ", h1.getVuelo(), "km.");
h1.aumentarVuelo(28);
h1.cambiarRol();
console.log("")
console.log(h1.name, "Aumenta vuelo y cambia de rol")
console.log(h1.name," - Rol: ", h1.rol.name);
console.log(h1.name," - Poder mágico: ", h1.getPoderMagico());
console.log(h1.name," - Poder ofensivo: ", h1.getPoderOfensivo());
console.log(h1.name," - Es astuta?: ", h1.esAstuta());
console.log(h1.name," - Es formidable?: ", h1.esFormidable());
console.log(h1.name," - Es extraordinaria?: ", h1.esExtraordinaria());
console.log(h1.name," - Cuanto vuela?: ", h1.getVuelo(), "km.");

console.log("")
console.log("")

console.log("🟢 Consultas Básicas de Criaturas");
console.log(d1.name," - Rol: ", d1.rol.name);
console.log(d1.name," - Poder mágico: ", d1.getPoderMagico());
console.log(d1.name," - Poder ofensivo: ", d1.getPoderOfensivo());
console.log(d1.name," - Es astuta?: ", d1.esAstuta());
console.log(d1.name," - Es formidable?: ", d1.esFormidable());
console.log(d1.name," - Es extraordinaria?: ", d1.esExtraordinaria());
console.log(d1.name," - Cuanto vuela?: ", d1.getVuelo(), "km.");
console.log("")
console.log(d1.name, "Aumenta vuelo y cambia dos veces de rol")
d1.aumentarVuelo(10);
d1.cambiarRol();
d1.cambiarRol();
console.log("")
console.log(d1.name," - Rol: ", d1.rol.name);
console.log(d1.name," - Poder mágico: ", d1.getPoderMagico());
console.log(d1.name," - Poder ofensivo: ", d1.getPoderOfensivo());
console.log(d1.name," - Es astuta?: ", d1.esAstuta());
console.log(d1.name," - Es formidable?: ", d1.esFormidable());
console.log(d1.name," - Es extraordinaria?: ", d1.esExtraordinaria());
console.log(d1.name," - Cuanto vuela?: ", d1.getVuelo(), "km.");

console.log("")
console.log("")

console.log("🟢 Consultas Básicas de Criaturas");
console.log(h2.name," - Rol: ", h2.rol.name);
console.log(h2.name," - Poder mágico: ", h2.getPoderMagico());
console.log(h2.name," - Poder ofensivo: ", h2.getPoderOfensivo());
console.log(h2.name," - Es astuta?: ", h2.esAstuta());
console.log(h2.name," - Es formidable?: ", h2.esFormidable());
console.log(h2.name," - Es extraordinaria?: ", h2.esExtraordinaria());
console.log(h2.name," - Cuanto vuela?: ", h2.getVuelo(), "km.");
h2.aumentarVuelo(10);
h2.cambiarRol();
console.log("")
console.log(h2.name, "Aumenta vuelo y cambia de rol")
console.log(h2.name," - Rol: ", h2.rol.name);
console.log(h2.name," - Poder mágico: ", h2.getPoderMagico());
console.log(h2.name," - Poder ofensivo: ", h2.getPoderOfensivo());
console.log(h2.name," - Es astuta?: ", h2.esAstuta());
console.log(h2.name," - Es formidable?: ", h2.esFormidable());
console.log(h2.name," - Es extraordinaria?: ", h2.esExtraordinaria());
console.log(h2.name," - Cuanto vuela?: ", h2.getVuelo(), "km.");

console.log("")
console.log("")
console.log("----------------------------");
console.log("")
console.log(d2.name," - Rol: ", d2.rol.name);
console.log(d2.name," - Poder mágico: ", d2.getPoderMagico());
console.log(d2.name," - Poder ofensivo: ", d2.getPoderOfensivo());
console.log(d2.name," - Es astuta?: ", d2.esAstuta());
console.log(d2.name," - Es formidable?: ", d2.esFormidable());
console.log(d2.name," - Es extraordinaria?: ", d2.esExtraordinaria());
console.log(d2.name," - Cuanto vuela?: ", d2.getVuelo(), "km.");
console.log("")
console.log(d2.name, "Aumenta vuelo y cambia dos veces de rol")
d2.aumentarVuelo(10);
d2.cambiarRol();
d2.cambiarRol();
console.log("")
console.log(d2.name," - Rol: ", d2.rol.name);
console.log(d2.name," - Poder mágico: ", d2.getPoderMagico());
console.log(d2.name," - Poder ofensivo: ", d2.getPoderOfensivo());
console.log(d2.name," - Es astuta?: ", d2.esAstuta());
console.log(d2.name," - Es formidable?: ", d2.esFormidable());
console.log(d2.name," - Es extraordinaria?: ", d2.esExtraordinaria());
console.log(d2.name," - Cuanto vuela?: ", d2.getVuelo(), "km.");


const claro1 = new Claro("Claro 1");
const claro2 = new Claro("Claro 2");
const claro3 = new Claro("Claro 3");
const castillo1 = new Castillo("Castillo 1");
const castillo2 = new Castillo("Castillo 2");
const castillo3 = new Castillo("Castillo 3");

const c1 = new Colonia("Colonia de Hadas");
c1.agregarCriaturas([h1,h2,h3])


const c2 = new Colonia("Colonia de Duendes");
c2.agregarCriaturas([d1,d2,d3])
//ParqueEncantado.agregarColonia(c1);
//ParqueEncantado.agregarColonia(c2);
console.log("")
console.log("----------------------------");
console.log("")
console.log("🟢 Consulta de colonias");
console.log(c1.name, "- Criaturas: ", c1.mostrarCriaturas())
console.log(c1.name, "- Poder Ofensivo: ", c1.getPoderOfensivo())
console.log(c1.name, "- Poder Defensivo: ", c1.getPoderDefensivo())

console.log(c1.name, " intenta conquitar clero")
c1.conquistarArea(claro1)
console.log(c1.name, "- Poder Ofensivo: ", c1.getPoderOfensivo())
console.log(c1.name, "- Poder Defensivo: ", c1.getPoderDefensivo())
console.log("Colonia actual que habita los claros :", claro1.coloniaActual.name)
console.log("Poder defensivo de los claros: ", claro1.poderDefensivo())
console.log("Poder defensivo de los castillos: ", castillo1.poderDefensivo())
console.log(c2.name, " intenta conquitar clero")
c2.conquistarArea(claro1)
console.log("Colonia actual que habita los claros :", claro1.coloniaActual.name)
console.log(c1.name, "- Poder Ofensivo: ", c1.getPoderOfensivo())
console.log(c1.name, "- Poder Defensivo: ", c1.getPoderDefensivo())
console.log(c2.name, " intenta conquitar clero")
c2.conquistarArea(claro2)
console.log("")
console.log("----------------------------");
console.log("")
const c3 = new Colonia("Colonia de Malvados");
c3.agregarCriaturas([d4,h4, d5])
console.log(c3.name, "- Poder Ofensivo: ", c3.getPoderOfensivo())
console.log(c3.name, "- Poder Defensivo: ", c3.getPoderDefensivo())
console.log("Colonia actual que habita los claros :", claro1.coloniaActual.name)
console.log("Poder defensivo de los claros: ", claro1.poderDefensivo())
console.log(c3.name, " intenta conquitar clero")
c3.conquistarArea(claro1)
console.log(`Colonia actual que habita ${claro1.name} : ${claro1.coloniaActual.name}`)
console.log(`Poder defensivo de ${claro1.name}: ${claro1.poderDefensivo()}`)
console.log("")
console.log("----------------------------");
console.log("")
console.log("🟢 Consulta del parque encantado");
console.log("Colonias del parque encantado: ", parqueEncantado.mostrarColonias())
console.log("Areas del parque encantado: ", parqueEncantado.mostrarAreas())
console.log("Criaturas del parque encantado: ", parqueEncantado.mostrarCriaturas())

console.log("")
console.log("----------------------------");
console.log("")
// Crear nuevas criaturas
const h5 = new Hada("Hada Celeste", 80, 90, guardian);
const d6 = new Duende("Duende Oscuro", 100, 50, new Domador([new Mascota(10, true), new Mascota(5, false)]));
const h6 = new Hada("Hada Brillante", 120, 110, hechicero);
const d7 = new Duende("Duende del Sur", 70, 60, new Domador([new Mascota(8, true), new Mascota(6, false)]));

// Crear nuevas colonias
const c4 = new Colonia("Colonia de Luz");
c4.agregarCriaturas([h5, h6]);

const c5 = new Colonia("Colonia de Sombras");
c5.agregarCriaturas([d6, d7]);

// Crear nuevas áreas
const claro4 = new Claro("Claro 4");
const castillo4 = new Castillo("Castillo 4");

// Mostrar información inicial de las colonias y áreas
console.log("🟢 Colonias y áreas");
console.log(c4.name, "- Criaturas: ", c4.mostrarCriaturas());
console.log(c4.name, "- Poder Ofensivo: ", c4.getPoderOfensivo());
console.log(c4.name, "- Poder Defensivo: ", c4.getPoderDefensivo());
console.log(c5.name, "- Criaturas: ", c5.mostrarCriaturas());
console.log(c5.name, "- Poder Ofensivo: ", c5.getPoderOfensivo());
console.log(c5.name, "- Poder Defensivo: ", c5.getPoderDefensivo());
console.log("Áreas del parque encantado: ", parqueEncantado.mostrarAreas());


// Colonia de Luz intenta conquistar Claro 4
console.log(c4.name, " intenta conquistar ", claro4.name);
c4.conquistarArea(claro4);
console.log(`Colonia actual que habita ${claro4.name}: ${claro4.coloniaActual.name}`);
console.log(`Poder defensivo de ${claro4.name}: ${claro4.poderDefensivo()}`);
console.log("")
console.log("----------------------------");
console.log("")

// Colonia de Sombras intenta conquistar Claro 4
console.log(c5.name, " intenta conquistar ", claro4.name);
c5.conquistarArea(claro4);
console.log(`Colonia actual que habita ${claro4.name}: ${claro4.coloniaActual.name}`);
console.log(`Poder defensivo de ${claro4.name}: ${claro4.poderDefensivo()}`);
console.log("")
console.log("----------------------------");
console.log("")

// Colonia de Luz intenta conquistar Castillo 4
console.log(c4.name, " intenta conquistar ", castillo4.name);
c4.conquistarArea(castillo4);
console.log(`Colonia actual que habita ${castillo4.name}: ${castillo4.coloniaActual ? castillo4.coloniaActual.name : "Ninguna"}`);
console.log(`Poder defensivo de ${castillo4.name}: ${castillo4.poderDefensivo()}`);
console.log("")
console.log("----------------------------");
console.log("")
// Colonia de Sombras intenta conquistar Castillo 4
console.log(c5.name, " intenta conquistar ", castillo4.name);
c5.conquistarArea(castillo4);
console.log(`Colonia actual que habita ${castillo4.name}: ${castillo4.coloniaActual ? castillo4.coloniaActual.name : "Ninguna"}`);
console.log(`Poder defensivo de ${castillo4.name}: ${castillo4.poderDefensivo()}`);
console.log("")
console.log("----------------------------");
console.log("")

// Mostrar estado final del parque encantado
console.log("🟢 Estado final del parque encantado");
console.log("Colonias del parque encantado: ", parqueEncantado.mostrarColonias());
console.log("Áreas del parque encantado: ", parqueEncantado.mostrarAreas());
console.log("Criaturas del parque encantado: ", parqueEncantado.mostrarCriaturas());