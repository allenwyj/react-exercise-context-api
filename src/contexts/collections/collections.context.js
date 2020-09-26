import { createContext } from 'react';

import SHOP_DATA from './shop.data';

// createContext is a method that can take anything (Strings, integers, objects, functions)
// what we are passing into it will be the INITIAL_DATA
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;