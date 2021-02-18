import * as Pawn from './oldsrc/Actor/Pawn.js';

import * as Grid from './oldsrc/Grid/Grid.js';
import * as CartesianGrid from './oldsrc/Grid/CartesianGrid.js';

import * as StringMap from './oldsrc/Map/StringMap.js';

import * as CartesianCT from './oldsrc/Vec/CartesianCT.js';
import * as CT from './oldsrc/Vec/CT.js';
import * as TLCartesianCT from './oldsrc/Vec/TLCartesianCT.js';
import * as Vec from './oldsrc/Vec/Vec.js';

export default {
  ...Pawn,
  ...Grid,
  ...CartesianGrid,
  ...StringMap,
  ...CartesianCT,
  ...CT,
  ...TLCartesianCT,
  ...Vec
};

export * from './oldsrc/Actor/Pawn.js';

export * from './oldsrc/Grid/Grid.js';
export * from './oldsrc/Grid/CartesianGrid.js';

export * from './oldsrc/Map/StringMap.js';

export * from './oldsrc/Vec/CartesianCT.js';
export * from './oldsrc/Vec/CT.js';
export * from './oldsrc/Vec/TLCartesianCT.js';
export * from './oldsrc/Vec/Vec.js';