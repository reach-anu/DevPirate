import React, { useEffect, useState } from 'react'
import "../Styles/explore.css"
import { BiLeftArrowAlt, BiMenuAltLeft } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from 'react-icons/ci';

const FilterPanel = ({ setFilterPanel, filterPanel, appliedFilters, setAppliedFilters }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [filters, setFilters] = useState([]);
  const [secondaryFilters, setSecondaryFilters] = useState([]);

  useEffect(() => {
    // Fetch all the filters through an api endpoint
    setFilters(["Technology", "Theme", "Location", "Members"]);
  }, [])

  const handleFilterClick = async (filterName) => {
    //fetch secondary filters from backend based on filter Name
    setActiveFilter(filterName);
    setSecondaryFilters([
      'React',
      'Mongo',
      'A.I.',
      'Blockchain',
      'Express',
      'Python',
      'C++',
      'Rust',
      'Kotlin',
    ]);
  }

  const handleCloseSecondaryFilters = () => {
    setSecondaryFilters([]);
    setActiveFilter("")
  }

  const handletoggleFilters = (subFilterName) => {
    const allFilters = Object.keys(appliedFilters);
    if (!allFilters.includes(activeFilter)) {
      setAppliedFilters({ ...appliedFilters, [activeFilter]: [subFilterName] });
    } else {
      const newFilterValues = appliedFilters[activeFilter];
      if (newFilterValues.includes(subFilterName)) {
        setAppliedFilters({ ...appliedFilters, [activeFilter]: newFilterValues.filter((filter) => filter !== subFilterName) });
      } else {
        setAppliedFilters({ ...appliedFilters, [activeFilter]: [...newFilterValues, subFilterName] });
      }
    }
  }

  return (
    <div className="relative -top-10">
      <div
        className="z-10 btn bg-transparent text-xl fixed ml-3 hover:bg-[#202736a1] border-none"
        onClick={() => { !activeFilter ? setFilterPanel(!filterPanel) : handleCloseSecondaryFilters() }}
      >
        {filterPanel ? <>{!activeFilter ? <RxCross2 /> : <BiLeftArrowAlt />} </> : <BiMenuAltLeft />}
      </div>
      <div
        className={`${!filterPanel && "hidden"} relative`}
      >
        <div className="menu fixed p-4 pt-12 w-72 bg-[#202736a1] text-base-content rounded-box h-full">
          {!activeFilter ?
            <>
              <h1 className='text-center text-lg p-1 pt-0'>Filters</h1>
              <hr className='border-gray-500 opacity-50 w-4/5 mx-auto pb-4' />
              <div className='text-center'>
                <ul className='filterPanel text-left'>
                  {
                    filters.map((filter) => {
                      const subFilterLength = appliedFilters[filter]?.length;
                      return <li onClick={() => handleFilterClick(filter)} style={{ "color": subFilterLength && "#1b998b" }}>
                        {filter}
                        {subFilterLength && <span className='bg-gray-800'>{subFilterLength}</span>}
                      </li>
                    })
                  }
                </ul>
                {!!Object.keys(appliedFilters).length &&
                  <button type="button" className='bg-red-500 opacity-80 p-2 rounded-xl w-4/5 mt-60' onClick={() => setAppliedFilters({})}>Remove all filters</button>}
              </div>
            </>
            :
            <>
              <h1 className='text-center text-lg p-1 pt-0'>{activeFilter}</h1>
              <hr className='border-gray-500 opacity-50 w-4/5 mx-auto pb-4' />
              <div className="mx-auto my-5">
                <label className="input input-bordered flex items-center gap-2 h-8">
                  <input type="text" className="grow" placeholder="Search" />
                  <CiSearch />
                </label>
              </div>
              <div className='text-center overflow-y-auto'>
                <ul className='filterPanel text-left h-96'>
                  {secondaryFilters?.map((subFilter, key) => (
                    <li key={key} onClick={() => handletoggleFilters(subFilter)} style={{ "color": appliedFilters[activeFilter]?.includes(subFilter) && "#1b998b" }}>
                      {subFilter}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        </div>
      </div>
    </div >
  )
}

export default FilterPanel