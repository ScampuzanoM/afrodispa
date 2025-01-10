import { addKeyword } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset, stop } from '../idle-custom'


export const rostroFlow = addKeyword<Provider, Database>(['4'])
    .addAnswer(['👁️ Conoce un poco mas sobre nuestro trabajo en rostros',
        '🔗 https://www.instagram.com/stories/highlights/17848793218448182/'])
        .addAnswer([
            '*✨ Estos son nuestros servicios! ✨*',
            '📩 Por favor, escríbenos en cuál o cuáles de estos estás interesad@'
        ])
    .addAnswer([
        '*📋 Menú:*',
        '',
        '1. 🧖‍♀️ Limpieza facial profunda',
        '2. ✨ Peeling']
        ,
        { capture: true },
        async (ctx, { gotoFlow, state , fallBack}) => {
            reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
            const opcion = ctx.body
            switch (opcion) {
                case '1': {
                    return await state.update({ servicio: 'Limpieza facial profunda' })
                }
                case '2': {
                    return await state.update({ servicio: 'Peelling' })
                }
                default: {
                    return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                }
            }
        })

