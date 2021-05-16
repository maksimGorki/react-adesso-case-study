import React from "react";
import { useLocation } from "react-router";

const UnitDetailPage = () => {
  const location = useLocation();

  const descriptionArray = [
    { id: 1, name: "ID:" },
    { id: 2, name: "Name:" },
    { id: 3, name: "Description:" },
    { id: 4, name: "Min. Required Age:" },
    { id: 5, name: "Wood Cost:" },
    { id: 6, name: "Food Cost:" },
    { id: 7, name: "Gold Cost:" },
    { id: 8, name: "Build Time:" },
    { id: 9, name: "Reload Time:" },
    { id: 10, name: "Hit Points:" },
    { id: 11, name: "Attack:" },
    { id: 12, name: "Accuracy:" },
  ];

  const valueArray = [
    { id: 1, value: location?.state?.unitData?.id },
    { id: 2, value: location?.state?.unitData?.name },
    { id: 3, value: location?.state?.unitData?.description },
    { id: 4, value: location?.state?.unitData?.age },
    { id: 5, value: location?.state?.unitData?.cost?.Wood },
    { id: 6, value: location?.state?.unitData?.cost?.Food },
    { id: 7, value: location?.state?.unitData?.cost?.Gold },
    { id: 8, value: location?.state?.unitData?.build_time },
    { id: 9, value: location?.state?.unitData?.reload_time },
    { id: 10, value: location?.state?.unitData?.hit_points },
    { id: 11, value: location?.state?.unitData?.attack },
    { id: 12, value: location?.state?.unitData?.accuracy },
  ];

  return (
    <div className="unitDetailPageContainer">
      <div className="unitDetailPageTitleName">Unit Detail Page</div>
      <div className="unitDetailPageDetailBox">
        <div className="detailCol">
          {descriptionArray.map((item) => (
            <div key={item.id} className="detailRow">
              {item.name}
            </div>
          ))}
        </div>
        <div className="detailCol">
          {valueArray.map((item) => (
            <div key={item.id} className="detailRow">
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnitDetailPage;
