export const START_QUERY = 'START_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';


export const startQuery = query => ({
  type: START_QUERY,
  query
})

export const clearQuery = () => ({
  type: CLEAR_QUERY
})