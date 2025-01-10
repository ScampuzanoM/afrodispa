import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'

import { addStringToBlacklist, enviarMensaje } from '../utils/utils';

import { numberClean } from './mute.flow';

export const direccionFlow = addKeyword<Provider, Database>('DIREFJSDJFD')
.addAnswer(
    [
        '¡Gracias por compartir tus datos! Para completar tu solicitud y agendar tu cita, por favor confirmemos lo siguiente:',
        '',
        '• Servicio(s) solicitado(s) 🌸',
        '• Fecha y hora preferida ⏰',
        '• Método de pago 💳',
        '',
        'Tu información será revisada por uno de nuestros asesores, quien se pondrá en contacto contigo en breve para confirmar los detalles y asegurarte la mejor experiencia en nuestro spa.',
        '',
        '*¡Gracias por elegirnos y confiar en nosotros para tu bienestar! 🌿*'
    ]
    .join('\n'),
    { delay: 0, capture: false }
)
.addAction(async (ctx, { blacklist }) => {
    const toMute = numberClean(ctx.from);
    console.log("entro")
    await  addStringToBlacklist(toMute);
    blacklist.add(toMute);
    await  ejemploEnviarMensaje(toMute);
    return;
})


// Ejemplo de uso de la función enviarMensaje
async function ejemploEnviarMensaje(numeroAtencion) {
    const numero = process.env.NUMERO;
    const mensaje = `*Agente*: ${numeroAtencion}`;
    await enviarMensaje(numero, mensaje, null);
}


