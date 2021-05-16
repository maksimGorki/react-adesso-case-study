import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const actionTypes = {
  fetchData: "FETCH_DATA",
  filterData: "FILTER_DATA",
};

const UnitsPage = () => {
  const units = useSelector((state) => state.modifiedUnitsOverall);
  const dispatch = useDispatch();

  const ageTypes = {
    allAges: "All",
    darkAge: "Dark",
    feudalAge: "Feudal",
    castleAge: "Castle",
    imperialAge: "Imperial",
  };

  const ages = [
    { id: 1, name: ageTypes.allAges },
    { id: 2, name: ageTypes.darkAge },
    { id: 3, name: ageTypes.feudalAge },
    { id: 4, name: ageTypes.castleAge },
    { id: 5, name: ageTypes.imperialAge },
  ];

  const [age, setAge] = useState(ageTypes.allAges);

  const [woodSliderValue, setWoodSliderValue] = useState(0);
  const [foodSliderValue, setFoodSliderValue] = useState(0);
  const [goldSliderValue, setGoldSliderValue] = useState(0);

  const [woodStepValue, setWoodStepValue] = useState(10);
  const [foodStepValue, setFoodStepValue] = useState(10);
  const [goldStepValue, setGoldStepValue] = useState(10);

  const [woodFilterChecked, setWoodFilterChecked] = useState(false);
  const [foodFilterChecked, setFoodFilterChecked] = useState(false);
  const [goldFilterChecked, setGoldFilterChecked] = useState(false);

  useEffect(() => {
    dispatch({
      type: actionTypes.filterData,
      currentAge: age,
      wood: {
        checked: woodFilterChecked,
        start: parseInt(woodSliderValue) - parseInt(woodStepValue),
        end: parseInt(woodSliderValue),
      },
      food: {
        checked: foodFilterChecked,
        start: parseInt(foodSliderValue) - parseInt(foodStepValue),
        end: parseInt(foodSliderValue),
      },
      gold: {
        checked: goldFilterChecked,
        start: parseInt(goldSliderValue) - parseInt(goldStepValue),
        end: parseInt(goldSliderValue),
      },
    });
  }, [
    dispatch,
    age,
    woodFilterChecked,
    woodSliderValue,
    woodStepValue,
    foodFilterChecked,
    foodSliderValue,
    foodStepValue,
    goldFilterChecked,
    goldSliderValue,
    goldStepValue,
  ]);

  return (
    <div className="unitsPageContainer">
      <div className="unitsPageTitleName">Units Page</div>
      <div className="unitsPageAgesBox">
        <div className="unitsPageAgesBoxTitleName">Ages</div>
        <div className="unitsPageAgesBoxAges">
          {ages.map((currentAge) => (
            <div
              key={currentAge.id}
              className={
                currentAge.name === age ? "ageButtonSelected" : "ageButton"
              }
              onClick={() => setAge(currentAge.name)}
            >
              {currentAge.name}
            </div>
          ))}
        </div>
      </div>
      <div className="unitsPageCostsBox">
        <div className="unitsPageCostsBoxTitleName">Costs</div>
        <div className="unitsPageCostsBoxCosts">
          <div className="costType">
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => setWoodFilterChecked(!woodFilterChecked)}
            />
            <div className="costTypeName">Wood</div>
            <input
              className="rangeFilter"
              type="range"
              disabled={woodFilterChecked ? false : true}
              min="0"
              max="200"
              step={woodStepValue}
              value={woodSliderValue}
              onChange={(e) => {
                setWoodSliderValue(e.target.value);
              }}
            />
            <div className="rangeText">
              {woodSliderValue - woodStepValue < 0
                ? 0
                : woodSliderValue - woodStepValue}{" "}
              - {woodSliderValue}
            </div>
            <div className="stepTxt">Step:</div>
            <input
              className="stepBox"
              type="text"
              disabled={woodFilterChecked ? false : true}
              value={woodStepValue}
              onChange={(e) =>
                setWoodStepValue(
                  e.target.value > 200
                    ? 200
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
            />
            <div className="alertText">Min: 0, Max: 200</div>
          </div>
          <div className="costType">
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => setFoodFilterChecked(!foodFilterChecked)}
            />
            <div className="costTypeName">Food</div>
            <input
              className="rangeFilter"
              type="range"
              disabled={foodFilterChecked ? false : true}
              min="0"
              max="200"
              step={foodStepValue}
              value={foodSliderValue}
              onChange={(e) => setFoodSliderValue(e.target.value)}
            />
            <div className="rangeText">
              {foodSliderValue - foodStepValue < 0
                ? 0
                : foodSliderValue - foodStepValue}{" "}
              - {foodSliderValue}
            </div>
            <div className="stepTxt">Step:</div>
            <input
              className="stepBox"
              type="text"
              disabled={foodFilterChecked ? false : true}
              value={foodStepValue}
              onChange={(e) =>
                setFoodStepValue(
                  e.target.value > 200
                    ? 200
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
            />
          </div>
          <div className="costType">
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => setGoldFilterChecked(!goldFilterChecked)}
            />
            <div className="costTypeName">Gold</div>
            <input
              className="rangeFilter"
              type="range"
              disabled={goldFilterChecked ? false : true}
              min="0"
              max="200"
              step={goldStepValue}
              value={goldSliderValue}
              onChange={(e) => setGoldSliderValue(e.target.value)}
            />
            <div className="rangeText">
              {goldSliderValue - goldStepValue < 0
                ? 0
                : goldSliderValue - goldStepValue}{" "}
              - {goldSliderValue}
            </div>
            <div className="stepTxt">Step:</div>
            <input
              className="stepBox"
              type="text"
              disabled={goldFilterChecked ? false : true}
              value={goldStepValue}
              onChange={(e) =>
                setGoldStepValue(
                  e.target.value > 200
                    ? 200
                    : e.target.value < 0
                    ? 0
                    : e.target.value
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="unitsPageTableBox">
        <div className="tableHeader">
          <div className="tableItemId">id</div>
          <div className="tableItemName">name</div>
          <div className="tableItemAge">age</div>
          <div className="tableItemCosts">costs</div>
        </div>
        <div className="horizontalRule"></div>
        <div className="unitsPageScrollBox">
          {units?.map((unit) => (
            <Link
              className="link"
              key={unit.id}
              to={{
                pathname: `/UnitDetailPage/${unit.name}`,
                state: { unitData: unit },
              }}
            >
              <div key={unit.id} className="tableItem">
                <div className="tableItemId">{unit.id}</div>
                <div className="tableItemName">{unit.name}</div>
                <div className="tableItemAge">{unit.age}</div>
                <div className="tableItemCosts">
                  {unit.cost === null && "-"}
                  {unit?.cost?.Wood ? `Wood: ${unit.cost.Wood}, ` : ""}
                  {unit?.cost?.Food ? `Food: ${unit.cost.Food}, ` : ""}
                  {unit?.cost?.Gold ? `Gold: ${unit.cost.Gold}, ` : ""}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitsPage;
