require('dotenv').config();
import { start } from './server'

import {mongoConnection} from "./db/db";
mongoConnection().then(r => start());