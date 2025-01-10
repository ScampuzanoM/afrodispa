import { addKeyword, EVENTS } from '@builderbot/bot';
import { reset, start } from '../idle-custom';

import { clienteNuevoFlow } from './clienteNuevo.flow';

import { serviciosFlow } from './servicios.flow';

export const voiceNoteFlow = addKeyword(EVENTS.VOICE_NOTE)
.addAnswer(`🙌 ¡Hola! Bienvenid@ a Spa Afrodita. Soy tu asistente virtual, *AfroditaBot*.`)
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


