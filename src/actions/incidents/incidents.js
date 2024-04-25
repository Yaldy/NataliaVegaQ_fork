let incidentesOcurridos = [] //Sustituir [] por la carga del archivo ubicado en data/products.js (importar el archivo y asignar)

exports.addIncident = (event,tresh) => {
    console.log(tresh)
    //creo struct evento
    let evento ={
        event_id: event.event_id,
        context: event.context,
        metadata: event.metadata.replace(/ /g, ""),
        timestamp: event.timestamp
    }
    //verifico si existe suceso con la patente del evento
    var patente = incidentesOcurridos.find((suceso)=>suceso.incident_id == evento.metadata)
    // si no existe la creo y la agrego
    if (!patente){
        const suceso = {
            incident_id: evento.metadata,
            incidents: [evento]
        }
        incidentesOcurridos.push(suceso)
    }
    //si existe verifico el último timestamp y veo si cumple el tresh

    else{
        if ((evento.timestamp-patente.incidents[0].timestamp)/1000<=tresh && (evento.timestamp-patente.incidents[0].timestamp)/1000>=0){
            patente.incidents.push(evento)

        }
    }
    return incidentesOcurridos

}