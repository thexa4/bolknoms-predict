import * as tfc from '@tensorflow/tfjs-core';
import {loadFrozenModel} from '@tensorflow/tfjs-converter';

const MODEL_URL = 'https://noms.maxmaton.nl/2018-04-06/tensorflowjs_model.pb';
const WEIGHTS_URL = 'https://noms.maxmaton.nl/2018-04-06/weights_manifest.json';

const model = loadFrozenModel(MODEL_URL, WEIGHTS_URL);
model.then((model) => {
	model.execute({input: []});
})

