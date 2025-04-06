/*
class Colonia{
    constructor(name){
        this.name = name
        this.criaturas = []
        this.area = NaN
    }
    agregarCriaturas(listaCriaturas){
        this.criaturas.push(...listaCriaturas)
    }
    conquistarArea(unArea){
        unArea.conquistarArea(this)
    }
    getPoderOfensivo(){
        this.criaturas.reduce( (a,criatura) => a + criatura.getPoderOfensivo(),0 )
    }
    getArea(){

    }

}


const clero = {
    coloniaActual: NaN,
    poderDefensivo(){
        return this.coloniaActual == NaN ? 100 : this.coloniaActual.getPoderOfensivo() + 100
    },
    conquistarArea(coloniaAtacante){
        this.coloniaActual == NaN ? this.coloniaActual = coloniaAtacante :
        this.poderDefensivo() < coloniaAtacante.getPoderOfensivo() ? 
            this.coloniaActual = coloniaAtacante
            

    }
}
*/

class ParqueEncantado {
    constructor() {
      this.colonias = [];
    }
    agregarColonia(colonia) {
      this.criaturas.push(criatura);
    }
    mostrarCriaturas() {
        this.criaturas.forEach((criatura) => console.log(criatura));  // ✅ Así muestra las criaturas correctamente
    }
    eliminarCriaturas() {
      this.criaturas = [];
    }
  }

module.exports = new ParqueEncantado();

/*

colonia tiene criaturas

areas de colonias:
- losClaros --> zonas abiertas y acogedoras
    - 100 + la suma del poder ofensivo de cada criatura de la colonia 
- losCastillos
    - poderDefensivo = 200 * cada criatura formidable

colonia conquista área 
luchar()
  - gana quien tenga mayor poder poderDefensivo
  - si es la invasora se queda con el area
  - si gana la q vive AuthenticatorAssertionResponse, mantiene su control pero cada criatura pierde el 15% de su poderMagico


*/




