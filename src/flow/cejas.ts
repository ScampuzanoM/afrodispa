import { addKeyword } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset, stop } from '../idle-custom'
import { direccionFlow } from './direccion.flow';


export const cejasFlow = addKeyword<Provider, Database>(['3'])
    .addAnswer(['👁️ Conoce un poco mas sobre nuestro trabajo de cejas',
        '🔗 https://www.instagram.com/stories/highlights/17848793218448182/'])
    .addAnswer([
        '*✨ Estos son nuestros servicios! ✨*',
        '📩 Por favor, escríbenos en cuál o cuáles de estos estás interesad@'
    ])
    .addAnswer([
        '*📋 Menú:*',
        '',
        '1. 🎨 Diseño y epilación',
        '2. ✨ Laminado',
        '3. 🌿 Hena']
        ,
        { capture: true },
        async (ctx, { gotoFlow, state , fallBack}) => {
            reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
            const opcion = ctx.body;
            switch (opcion) {
                case '1': {
                     await state.update({ servicio: 'Cejas con Diseño y epilación' })
                     return gotoFlow(direccionFlow)
                }
                case '2': {
                     await state.update({ servicio: 'Cejas con Laminado' })
                     return gotoFlow(direccionFlow)
                }
                case '3': {
                    await state.update({ servicio: 'Cejas con Hena' })
                    return gotoFlow(direccionFlow)
                }
                default: {
                    return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                }
            }
        })

