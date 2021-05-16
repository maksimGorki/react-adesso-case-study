import "./css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import UnitsPage from "./components/UnitsPage";
import UnitDetailPage from "./components/UnitDetailPage";

const actionTypes = {
  fetchData: "FETCH_DATA",
  filterData: "FILTER_DATA",
};

function App() {
  const dispatch = useDispatch();

  const url = "data/age-of-empires-units.json";
  useEffect(() => {
    dispatch({ type: actionTypes.fetchData, url: url });
  }, [url, dispatch]);

  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route exact strict path="/" component={HomePage} />
          <Route exact strict path="/unitsPage" component={UnitsPage} />
          <Route
            exact
            strict
            path="/unitDetailPage/:unitname"
            component={UnitDetailPage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
