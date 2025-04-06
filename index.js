console.log("Prueba ok")
const parque = require("./ParqueEncantado");
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

parque.agregarCriatura(h1);
parque.agregarCriatura(h2);
parque.agregarCriatura(h3);
parque.agregarCriatura(d1);
parque.agregarCriatura(d2);
parque.agregarCriatura(d3);


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

console.log("🟢 Consultas Básicas de Criaturas");
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

console.log("")
console.log("")

/*




console.log(d1.name, "Poder Mágico: ", d1.getPoderMagico());
console.log(h1.name, "Vuela: ", h1.getVuelo(), "km.");
console.log(d1.name, "Vuela: ", d1.getVuelo()); // Debería dar error
console.log(h2.name, "es formidable?", h2.esFormidable());
console.log(d2.name, "es formidable?", d2.esFormidable());
h1.aumentarVuelo(2)
console.log(h1.name, "Ahora vuela: ", h1.getVuelo(), "km.");

console.log('')
console.log("\n🟢 Consultas sobre Roles");
console.log(h1.name, "tiene el rol:", h1.rol.constructor.name);
console.log(d1.name, "tiene el rol:", d1.rol.constructor.name);
console.log(h2.name, "tiene el rol:", h2.rol.constructor.name);

console.log('')
console.log("\n🟢 Poder ofensivo de Criaturas");
console.log(h1.name, "tiene poder ofensivo de:", h1.poderOfensivo());
console.log(d1.name, "tiene poder ofensivo de:", d1.poderOfensivo());
console.log(h2.name, "tiene poder ofensivo de:", h2.poderOfensivo());


console.log('')
console.log("\n🟢 Cambio de Rol");
console.log(h1.name, "tenía el rol:", h1.rol.constructor.name);
h1.cambiarRol();
console.log(h1.name, "ahora tiene el rol:", h1.rol.constructor.name);



console.log('')
console.log("\n🟢 Consultas sobre Mascotas");
console.log("Mascota 1 tiene cuernos?", m1.tieneCuernos());
console.log("Mascota 2 tiene cuernos?", m2.tieneCuernos());
console.log("Mascota 3 tiene cuernos?", m3.tieneCuernos());
console.log("Mascota 3 es veterana?", m3.esVeterana());

console.log('')
console.log("\n🟢 Entrenamiento de Mascotas");
console.log(d1.name, "intenta entrenar una mascota:", d1.entrenarMascota(new Mascota(6, true)));
console.log(h2.name, "intenta entrenar una mascota:", h2.entrenarMascota(new Mascota(3, false))); // No debería poder


console.log('')
console.log("\n🟢 Evaluación de Criaturas Extraordinarias");
console.log(h1.name, "es extraordinaria?", h1.esExtraordinaria());
console.log(d1.name, "es extraordinario?", d1.esExtraordinaria());

console.log('')
console.log("\n🟢 Evaluación de Criaturas Formidables");
console.log(h1.name, "es formidable?", h1.esFormidable());
console.log(d1.name, "es formidable?", d1.esFormidable());

console.log('')
console.log("\n🟢 Criaturas dentro del Parque Encantado");
console.log(parque);
parque.mostrarCriaturas(); // Si corriges el método `mostrarCriaturas`

*/