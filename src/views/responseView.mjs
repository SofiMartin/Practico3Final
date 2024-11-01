export function renderizarSuperheroe(superheroe){
    return {
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidades: superheroe.debilidad,
        Poderes: superheroe.poder,
        Aliados: superheroe.aliado,
        Enemigos: superheroe.enemigo
    };
}

export function renderizarListaSuperheroes(superheroes){
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}