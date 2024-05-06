import React, { useEffect, useState } from "react";
import "../Styles/explore.css";
import TeamCard from "../Components/TeamCard";
import FilterPanel from "../Components/FilterPanel";
import { CiSearch } from "react-icons/ci";
import PirateCard from "../Components/PirateCard";
import ninja from "../Assets/Images/ninja.png";
import pirat from "../Assets/Images/pirate.png";
import pirateUncle from "../Assets/Images/pirateUncle.png";

const Explore = () => {
  const [showTeams, setShowTeams] = useState(true);
  const [filterPanel, setFilterPanel] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    //Fetch call for the teams with applied Filters
    setTeams([{ id: 1 }, { id: 2 }]);
    setMembers([
      { id: 1, name: "Devansh", img: pirateUncle, bg: "#ff6b6b", github:"https://github.com/reach-anu/DevPirate/tree/devansh" },
      { id: 2, name: "Anushaka", img: ninja, bg: "#fefe52" },
      { id: 3, name: "Anjali", img: pirat, bg: "#B48EAD" },
      { id: 1, name: "Samurai", img: ninja, bg: "#ff85a2" },
      { id: 4, name: "Abcd", img: ninja, bg: "#A3D8A6" },
    ]);
  }, [appliedFilters]);

  return (
    <div className="min-h-svh">
      <div className="fixed w-full z-10">
        <label className="w-96 input input-bordered flex m-auto items-center gap-2 bg-[#202736a1]">
          <input type="text" className="grow" placeholder="Search" />
          <CiSearch />
        </label>
        <div
          role="tablist"
          className="tabs tabs-boxed absolute top-0 right-10 gap-2"
        >
          <a
            role="tab"
            className={`tab ${showTeams && "tab-active"}`}
            onClick={() => setShowTeams(!showTeams)}
          >
            Pirates
          </a>
          <a
            role="tab"
            className={`tab ${!showTeams && "tab-active"}`}
            onClick={() => setShowTeams(!showTeams)}
          >
            Teams
          </a>
        </div>
      </div>

      <div className="pt-10 flex justify-between">
        <FilterPanel
          setFilterPanel={setFilterPanel}
          filterPanel={filterPanel}
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
        />

        <div
          className={`flex gap-12 flex-wrap justify-center mt-16 mx-10
        ${filterPanel ? "w-[calc(100vw-350px)]" : "w-full"}`}
        >
          {showTeams
            ? members.map((member) => <PirateCard pirate={member} />)
            : teams.map((team) => <TeamCard team={team} />) }
        </div>
      </div>
    </div>
  );
};

export default Explore;
