
import { createFlow } from '@builderbot/bot';


import { welcomeFlow } from "./welcome.flow";
import {defaulFlow} from "./default.flow"
import {mediaFlow} from "./media.flow"
import {blackListFlow} from './mute.flow'
import { idleFlow } from '../idle-custom'

import {voiceNoteFlow} from './voce.flow'
import * as dotenv from 'dotenv';
import { serviciosFlow } from './servicios.flow';
import { clienteNuevoFlow } from './clienteNuevo.flow';
import { direccionFlow } from './direccion.flow';

dotenv.config();

export const flow = createFlow([welcomeFlow, idleFlow,blackListFlow,defaulFlow,mediaFlow,voiceNoteFlow,clienteNuevoFlow,serviciosFlow,direccionFlow])