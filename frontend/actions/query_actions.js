export const START_QUERY = 'START_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';


export const startQuery = query => {
  parseQueryLocation(query); 
  return {
    type: START_QUERY,
    query
  }
}


export const clearQuery = () => ({
  type: CLEAR_QUERY
})

const parseQueryLocation = query => {
   let str = query.location.replace(/[^a-zA-Z]/g, "").toLowerCase();
   if (isMatch(["ithaca"], str) || isMatch(["new", "york"], str)) query.location = "Ithaca, NY"
   else if (isMatch(["boulder"], str) || isMatch(["colorado"], str)) query.location = "Boulder, CO"
   else if (isMatch(["santa", "cruz"], str) || isMatch(["california"], str)) query.location = "Santa Cruz, CA"
   return query;
}

const isMatch = (location, queryStr) => {
  for (let i = 0; i < location.length; i++) {
    if (!queryStr.includes(location[i])) return false;
  }
  return true;
}



