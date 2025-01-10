import { addKeyword } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset, stop } from '../idle-custom'

import { addStringToBlacklist, enviarMensaje } from '../utils/utils';
import { direccionFlow } from './direccion.flow';

import { numberClean } from './mute.flow';

export const uñasFlow = addKeyword<Provider, Database>(['1'])
    .addAnswer(['👁️ Conoce un poco mas sobre nuestro trabajo en uñas',
        '🔗 https://www.instagram.com/stories/highlights/17848793218448182/'])
    .addAnswer([
        '*✨ Estos son nuestros servicios! ✨*',
        '📩 Por favor, escríbenos en cuál o cuáles de estos estás interesad@'
    ])
    .addAnswer([
        '1. 💅 Manicure y Pedicure',
        '2. 🌸 Tradicional',
        '3. 💎 Semipermanente',
        '4. ✨ Poligel',
        '5. 🖐️ PressOn',
        '6. 🔮 Acrílico esculpido',
        '7. 🖌️ Acrílico TIP',
        '8. 🎨 Barrido de acrílico',
        '9. 🛁 PediSpa']
        ,
        { capture: true },
        async (ctx, { gotoFlow, state, fallBack }) => {
            reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
            const opcion = ctx.body
            switch (opcion) {
                case '1': {
                     await state.update({ servicio: 'Manicure y Pedicure' })
                    return gotoFlow(direccionFlow)
                }
                case '2': {
                     await state.update({ servicio: 'Uñas tradicional' })
                     return gotoFlow(direccionFlow)
                }
                case '3': {
                     await state.update({ servicio: 'Uñas Semipermanente' })
                     return gotoFlow(direccionFlow)
                }
                case '4': {
                     await state.update({ servicio: 'Poligel' })
                     return gotoFlow(direccionFlow)
                }
                case '5': {
                     await state.update({ servicio: 'PressOn' })
                     return gotoFlow(direccionFlow)
                }
                case '6': {
                     await state.update({ servicio: 'Acrilico Esculpido' })
                     return gotoFlow(direccionFlow)
                }
                case '7': {
                     await state.update({ servicio: 'Acrilico TIP' })
                     return gotoFlow(direccionFlow)
                }
                case '8': {
                     await state.update({ servicio: 'Barrido de Acrilico' })
                     return gotoFlow(direccionFlow)
                }
                case '9': {
                     await state.update({ servicio: 'PediSpa' })
                     return gotoFlow(direccionFlow)
                }
                default: {
                    return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                }
            }
        })
