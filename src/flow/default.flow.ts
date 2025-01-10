import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys';

import { reset, start } from '../idle-custom';
import { clienteNuevoFlow } from './clienteNuevo.flow';
import { serviciosFlow } from './servicios.flow';



export const defaulFlow = addKeyword(EVENTS.WELCOME)
.addAnswer(
    [
        '*Menú:*',
        '',
        '1. 🌐 Soy Nuev@',
        '2. 👋 Ya soy cliente.'
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
        const opcion = ctx.body
        switch (opcion) {
            case '1': {
                return gotoFlow( clienteNuevoFlow)
            }
            case '2': {
                return gotoFlow(serviciosFlow)
            }
            default: {
                return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
            }
        }
    },
    []
)


