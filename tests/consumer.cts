import * as api from '@lp-labs/ratio-simplifier';
import { simplifyRatio } from '@lp-labs/ratio-simplifier';
console.log(simplifyRatio(18, 24));
// @ts-expect-error invalid argument must be rejected by declarations
api.simplifyRatio(1, '2');
