const initialState = {
  fetchedUnits: [],
  modifiedUnitsByAge: [],
  modifiedUnitsByGoods: [],
  modifiedUnitsOverall: [],
};

const actionTypesAsync = {
  fetchDataAsync: "FETCH_DATA_ASYNC",
  filterDataAsync: "FILTER_DATA_ASYNC",
};

const ageTypes = {
  allAges: "All",
  darkAge: "Dark",
  feudalAge: "Feudal",
  castleAge: "Castle",
  imperialAge: "Imperial",
};

const rootReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypesAsync.fetchDataAsync:
      fetch(action.url)
        .then((response) => response.json())
        .then((data) => {
          newState.fetchedUnits = data.units;
          newState.modifiedUnitsByAge = data.units;
        });
      break;

    case actionTypesAsync.filterDataAsync:
      if (action.age !== undefined) {
        if (action.age === ageTypes.allAges) {
          newState.modifiedUnitsByAge = newState.fetchedUnits;
        } else {
          newState.modifiedUnitsByAge = newState.fetchedUnits.filter(
            (item) => item.age === action.age
          );
        }
      }

      newState.modifiedUnitsByGoods = newState.modifiedUnitsByAge;
      if (action?.wood?.checked) {
        newState.modifiedUnitsByGoods = newState.modifiedUnitsByGoods.filter(
          (item) =>
            item?.cost?.Wood <= action.wood.end &&
            item?.cost?.Wood >= action.wood.start
        );
      }
      if (action?.food?.checked) {
        newState.modifiedUnitsByGoods = newState.modifiedUnitsByGoods.filter(
          (item) =>
            item?.cost?.Food <= action.food.end &&
            item?.cost?.Food >= action.food.start
        );
      }
      if (action?.gold?.checked) {
        newState.modifiedUnitsByGoods = newState.modifiedUnitsByGoods.filter(
          (item) =>
            item?.cost?.Gold <= action.gold.end &&
            item?.cost?.Gold >= action.gold.start
        );
      }
      break;

    default:
      break;
  }
  newState.modifiedUnitsOverall = newState.modifiedUnitsByGoods;
  return newState;
};

export default rootReducer;
