import React, { useEffect, useState } from "react";
import "../Styles/explore.css";
import TeamCard from "../Components/TeamCard";
import FilterPanel from "../Components/FilterPanel";
import { CiSearch } from "react-icons/ci";

const Explore = () => {
  const [showTeams, setShowTeams] = useState(true);
  const [filterPanel, setFilterPanel] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    //Fetch call for the teams with applied Filters
    setTeams([{ id: 1 }, { id: 2 }]);
  }, [appliedFilters]);

  return (
    <div className="mx-0">
      <div className="w-96 m-auto mt-10">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <CiSearch />
        </label>
      </div>

      <div className="flex justify-between">
        <FilterPanel
          setFilterPanel={setFilterPanel}
          filterPanel={filterPanel}
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
        />

        <div
          className={`flex gap-12 flex-wrap justify-center mt-10
        ${filterPanel ? "w-4/5" : "w-full"}`}
        >
          {teams.map((team) => (
            <TeamCard team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;