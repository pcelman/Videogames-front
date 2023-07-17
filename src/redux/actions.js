import axios from "axios"
// axios.defaults.baseURL = "https://videogames-back-production-4a4a.up.railway.app/"

export const actionTypes = {
    ORDER_BY_NAME: "ORDER_BY_NAME",
}


export function getVideogames(){
    return async function(dispatch){
        var json = await axios.get("https://videogames-back-production-4a4a.up.railway.app/pokemon");
        await dispatch({
            type: "GET_VIDEOGAMES",
            payload: json.data
        })
    }
}


export function filterVideogamesByTypes(payload){
    return {
        type: "FILTER_BY_TYPES",
        payload
    }
}

export function filterCreated(payload){
    return {
        type: "FILTER_CREATED",
        payload
    }
}

export function orderByDefault(payload) {
    return {
        type: "ORDER_BY_DEFAULT",
        payload
    };
};
export function orderByName(payload) {
    return {
        type: "ORDER_BY_NAME",
        payload
    };
};

export function orderByAttack(payload) {
    return {
        type: "ORDER_BY_ATTACK",
        payload
    };
};

  export function getNameVideogames(name) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`https://videogames-back-production-4a4a.up.railway.app/pokemon?name=${name}`);
  
        if (response.data === "no results") {
          return dispatch({
            type: "NO_NAME",
            payload: response.data,
          });
        }
  
        return dispatch({
          type: "GET_NAME_VIDEOGAMES",
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  

export function getTypes(){
    return async function (dispatch) {
        var info = await axios.get ("https://videogames-back-production-4a4a.up.railway.app/types", {
        })
        return dispatch({ type: "GET_TYPES", payload: info.data})
    }
}

export function postVideogame(payload){
    return async function (dispatch) {
        const response = await axios.post("/pokemon", payload)
        return response;
    }
}

export function getDetail (id){
    return async function (dispatch){
        try {
            var json = await axios.get(`https://videogames-back-production-4a4a.up.railway.app/pokemon/${id}`)
            return dispatch({
                type:"GET_DETAILS",
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function cleanFilter(){
    return {
        type: "CLEAN_FILTER",
        payload: []
    }
}


