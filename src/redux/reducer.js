const initialState = {
  videogames: [],
  videogamesFilter: [],
  types: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        videogamesFilter: action.payload, // cuando trae los videogames, hace dos copias
      };

    case "GET_NAME_VIDEOGAMES":
      return {
        ...state,
        videogamesFilter: action.payload,
      };

    case "NO_NAME":
      return {
        ...state,
        videogamesFilter: [action.payload],
      };

    case "FILTER_BY_TYPES":
      const allCh = state.videogames;
      const filterAllCh =
        action.payload === "Types"
          ? allCh
          : allCh.filter((e) =>
              e.types.map((el) => el.name).includes(action.payload)
            );
      return {
        ...state,
        videogamesFilter: filterAllCh,
      };

    case "FILTER_CREATED":
      var filterCreatedDB;
      if (action.payload === "all") {
        filterCreatedDB = state.videogames;
      } else if (action.payload === "api") {
        filterCreatedDB = state.videogames.filter((poke) => !poke.createdInDb);
      } else if (action.payload === "db") {
        filterCreatedDB = state.videogames.filter((poke) => poke.createdInDb);
      }
      // console.log('Filtered videogames:', filterCreatedDB);
      return {
        ...state,
        videogamesFilter: filterCreatedDB,
      };

    case "POST_CHARACTER":
      return {
        ...state,
      };

    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };

    case "ORDER_BY_NAME":
      var uno = [...state.videogamesFilter];
      action.payload === "asc"
        ? uno.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return -1;
            }
            return 0;
          })
        : uno.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        videogamesFilter: uno,
      };

    case "ORDER_BY_ATTACK":
      let sortedArr1 =
        action.payload === "attackMin"
          ? state.videogamesFilter.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : state.videogamesFilter.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogamesFilter: sortedArr1,
      };

    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "CLEAN_FILTER":
      return {
        ...state,
        videogamesFilter: action.payload,
        detail: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
