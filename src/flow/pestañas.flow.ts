import { addKeyword } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset, stop } from '../idle-custom'
import { MemoryDB as Database } from '@builderbot/bot';


export const pestañasFlow = addKeyword<Provider, Database>(['2'])
    .addAnswer([
        '👁️ Conoce un poco más sobre nuestro trabajo de pestañas',
        '🔗 https://www.instagram.com/stories/highlights/17848793218448182/']
    )
    .addAnswer([
        '*✨ Estos son nuestros servicios! ✨*',
        '📩 Por favor, escríbenos en cuál o cuáles de estos estás interesad@'
    ]
    )
    .addAnswer([
        '*📋 Menú:*',
        '',
        '1. 👁️ Pelo a pelo',
        '2. 🔹 Punto a punto',
        '3. 👁️‍🗨️ Pestañas en tira',
        '4. 💫 Lifting']
        ,
        { capture: true },
        async (ctx, { gotoFlow, state , fallBack}) => {
            reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
            const opcion = ctx.body;
            switch (opcion) {
                case '1': {
                    return await state.update({ servicio: 'Pestañas Pelo a Pelo' })
                }
                case '2': {
                    return await state.update({ servicio: 'Pestañas Punto a punto' })
                }
                case '3': {
                    return await state.update({ servicio: 'Pestañas en tira' })
                }
                case '4': {
                    return await state.update({ servicio: 'Pestañas Lifting' })
                }
                default: {
                    return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                }
            }
        })

