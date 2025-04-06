
const parqueEncantado = {
    name: "Parque Encantado",
    colonias: [],
    areas: [],
    agregarColonia(colonia){
        this.colonias.push(colonia);
    },
    agregarArea(area){
        this.areas.push(area);
    },
    mostrarColonias(){
        return this.colonias.map((colonia) => colonia.name);
    },
    mostrarCriaturas(){
        return this.colonias.map(criatura => criatura.criaturas.map(criatura => criatura.name));
    },
    mostrarAreas(){
        return this.areas.map((area) => area.name);
    }

  }

class Colonia{
    constructor(name){
        this.name = name;
        this.criaturas = [];
        this.area = null;
        parqueEncantado.agregarColonia(this); 
    }
    agregarCriaturas(listaCriaturas){
        this.criaturas.push(...listaCriaturas)
    }
    conquistarArea(unArea){
        const conquistaExitosa = unArea.conquistarArea(this);

        if (conquistaExitosa) {
            this.area = unArea;
            console.log(`¡Conquista exitosa! ${this.name} ha conquistado el ${this.area.name}.`);
        } else {
            console.log(`La conquista del ${unArea.name} por ${this.name} ha fallado.`);
        }
    }
    getPoderOfensivo(){
        return this.criaturas.reduce( (a,criatura) => a + criatura.getPoderOfensivo(),0 )
    }
    getArea(){
        return this.area ? this.area.name : "La colonia no ocupa ningún área.";
    }
    mostrarCriaturas(){
        return this.criaturas.map((criatura) => criatura.name);
    }
    getPoderDefensivo(){       
        return this.area ? this.area.poderDefensivo() : 0;
    }

}

class Claro {
    constructor(name){
    this.name = name;
    this.tipoArea ='Los Claros';
    this.coloniaActual = null;
    parqueEncantado.agregarArea(this); 
    }
    poderDefensivo(){
        return this.coloniaActual == null ? 100 : this.coloniaActual.getPoderOfensivo() + 100
    }
    conquistarArea(coloniaAtacante) {
        const poderOfenstoAtacante = coloniaAtacante.getPoderOfensivo();
        if (this.coloniaActual === null) {
            this.coloniaActual = coloniaAtacante;
            return true; // Conquista exitosa
        } else if (this.poderDefensivo() < poderOfenstoAtacante) {    
            this.coloniaActual = coloniaAtacante;
            return true; // Conquista exitosa
        } else {
            this.coloniaActual.criaturas.forEach((criatura) => {criatura.poderMagico *= 0.85});
            return false; // Conquista fallida
        }
    }
    getColonia() {
        return this.coloniaActual ? this.coloniaActual.name : "El área no está ocupada por ninguna colonia.";
    }
    getCriaturas() {
        return this.coloniaActual ? this.coloniaActual.criaturas : [];
    }
}

class Castillo {  
    constructor(name){
        this.name = name;
        this.tipoArea ='Los Castillos';
        this.coloniaActual = null;
        parqueEncantado.agregarArea(this); 
    }
    poderDefensivo(){
        return this.coloniaActual == null ? 0 : this.coloniaActual.criaturas.reduce((a,criatura) => a + (criatura.getPoderOfensivo() * 200),0)
    }
    conquistarArea(coloniaAtacante) {
        const poderOfensivoActual = this.coloniaActual
        const poderOfenstoAtacante = coloniaAtacante.getPoderOfensivo();
        if (this.coloniaActual === null) {
            this.coloniaActual = coloniaAtacante;
            return true; // Conquista exitosa
        } else if (poderOfensivoActual < poderOfenstoAtacante) {    
            this.coloniaActual = coloniaAtacante;
            return true; // Conquista exitosa
        } else {
            coloniaAtacante.criaturas.forEach((criatura) => {criatura.poderMagico *= 0.85});
            return false; // Conquista fallida
        }
    }
    getColonia() {
        return this.coloniaActual ? this.coloniaActual.name : "El área no está ocupada por ninguna colonia.";
    }
    getCriaturas() {
        return this.coloniaActual ? this.coloniaActual.criaturas : [];
    }
}


module.exports = {Colonia, Claro, Castillo, parqueEncantado};






