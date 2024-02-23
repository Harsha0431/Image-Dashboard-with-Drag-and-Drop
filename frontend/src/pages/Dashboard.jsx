import { useEffect } from "react";
import first from "../assets/moduleLogos/001.png";
import twoOne from "../assets/moduleLogos/002.png";
import twoTwo from "../assets/moduleLogos/003.png";
import twoThree from "../assets/moduleLogos/004.png";
import threeOne from "../assets/moduleLogos/005.png";
import threeTwo from "../assets/moduleLogos/006.png";
import threeThree from "../assets/moduleLogos/007.png";
import second from "../assets/moduleLogos/008.png";
import "../assets/styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleButtonClick = (index, title) => {
    navigate(`/${index}/${title}`);
  };

  useEffect(() => {
    document.title = "Image Dashboard";
  }, []);

  return (
    <div className="flex flex-col pt-8 max-md:pt-6 max-vsm:pt-4 max-vvsm:pt-4 px-6 max-vsm:px-4 max-vvsm:px-2 py-4 place-items-center overflow-x-hidden md:gap-y-6 max-md:gap-y-4">
      <button
        onClick={() =>
          handleButtonClick(1, "AWAKENING & HEALING PROGRAM SCHEDULE")
        }
        className="rounded-md single-image-container xxl:h-[400px]  xl:h-[300px] max-sm:h-[200px] max-ssm:h-[180px] max-vsm:h-[140px] max-vvsm:h-[120px] w-full object-fill overflow-hidden"
      >
        <div className="overflow-hidden object-fill h-full w-full">
          <img
            src={first}
            alt="AWAKENING & HEALING PROGRAM SCHEDULE"
            className="h-full w-full object-fill hover:scale-105 active:scale-100 transition-all"
          />
        </div>
      </button>
      <div className="grid-container grid gap-x-4 gap-y-4 md:gap-y-6">
        <button onClick={() => handleButtonClick(2, "WORKSHOP")}>
          <div className="rounded-md overflow-hidden h-full w-full">
            <img
              src={twoOne}
              alt="WORKSHOP"
              className="triplet-image-container-1 hover:scale-105 active:scale-100 transition-all"
            />
          </div>
        </button>
        <button onClick={() => handleButtonClick(3, "GET SUPPORT")}>
          <div className="rounded-md overflow-hidden h-full w-full">
            <img
              src={twoTwo}
              alt="GET SUPPORT"
              className="triplet-image-container-1 hover:scale-105 active:scale-100 transition-all"
            />
          </div>
        </button>
        <button onClick={() => handleButtonClick(4, "INSIGHTS")}>
          <div className="rounded-md overflow-hidden h-full w-full">
            <img
              src={twoThree}
              alt="INSIGHTS"
              className="triplet-image-container-1 hover:scale-105 active:scale-100 transition-all"
            />
          </div>
        </button>
        <button onClick={() => handleButtonClick(5, "MY BADGES")}>
          <div className="rounded-md overflow-hidden h-full w-full">
            <img
              src={threeOne}
              alt="MY BADGES"
              className="triplet-image-container-1 hover:scale-105 active:scale-100 transition-all"
            />
          </div>
        </button>
        <button onClick={() => handleButtonClick(6, "COMMUNITY")}>
          <div className="rounded-md overflow-hidden h-full w-full">
            <img
              src={threeTwo}
              alt="COMMUNITY"
              className="triplet-image-container-1 hover:scale-105 active:scale-100 transition-all"
            />
          </div>
        </button>
        <button onClick={() => handleButtonClick(7, "HELP TO TO IMPROVE")}>
          <div className="rounded-md overflow-hidden h-full w-full">
            <img
              src={threeThree}
              alt="HELP TO TO IMPROVE"
              className="triplet-image-container-1 hover:scale-105 active:scale-100 transition-all"
            />
          </div>
        </button>
      </div>
      <button
        onClick={() =>
          handleButtonClick(8, "INTENSIVE RETREATS & TEACHER TRAINING")
        }
        className="rounded-md single-image-container xxl:h-[400px]  xl:h-[300px] max-sm:h-[200px] max-ssm:h-[180px] max-vsm:h-[140px] max-vvsm:h-[120px] w-full object-fill overflow-hidden"
      >
        <div className="overflow-hidden object-fill h-full w-full">
          <img
            src={second}
            alt="INTENSIVE RETREATS & TEACHER TRAINING"
            className="h-full w-full object-fill hover:scale-105 active:scale-100 transition-all"
          />
        </div>
      </button>
    </div>
  );
}

export default Dashboard;
