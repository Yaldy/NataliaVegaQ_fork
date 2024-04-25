import incidentsActions from '../../actions/incidents/incidents'
import {body} from "koa/lib/response";

exports.addEvent = (ctx) =>{
    console.log(a)
    let evento = ctx.request.body

    if(!evento.event_id || !evento.context || !evento.metadata || !evento.timestamp){
        ctx.status = 400
        ctx.body = {message: "One or more attributes did no came on the request"}
        return ctx.body
    }
    let timestamp = Number(evento.timestamp)
    if(isNaN(timestamp)){
        ctx.status = 400
        ctx.body = {message: "Timestamp is not a number"}
        return  ctx.body
    }
    let segundos = Number(ctx.params.seconds)
    if(isNaN(segundos)){
        ctx.status = 400
        ctx.body = {message: "Threshold is not a number"}
        return  ctx.body
    }
    ctx.status = 200
    ctx.body = incidentsActions.addIncident(evento,segundos)

}
