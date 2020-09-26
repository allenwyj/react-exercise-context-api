export const getKeyFromCollections = collections =>
  collections ? Object.keys(collections).map(key => collections[key]) : [];
