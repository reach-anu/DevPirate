import React, { useEffect, useState } from 'react'
import "../Styles/explore.css"
import { BiLeftArrowAlt, BiMenuAltLeft } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from 'react-icons/ci';
import axios from 'axios';

const FilterPanel = ({ setFilterPanel, filterPanel, appliedFilters, setAppliedFilters }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [filters, setFilters] = useState([]);
  const [secondaryFilters, setSecondaryFilters] = useState([]);
  const [secondaryFiltersCopy, setSecondaryFiltersCopy] = useState([]);

  useEffect(() => {
    const getFilters = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/filter/all-filters`);
      setFilters(await response.data.data);
    }
    getFilters();
  }, [])

  useEffect(()=>{
    setSecondaryFiltersCopy(secondaryFilters);
  },[secondaryFilters])

  const handleFilterClick = async (filterName) => {
    setActiveFilter(filterName);
    const response = await axios.post(`${process.env.REACT_APP_API}/filter/subfilters`, {
      filter: filterName
    });
    setSecondaryFilters(await response.data?.data);
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
        className={`${!filterPanel && "hidden"}`}
      >
        <div className="menu fixed p-4 pt-12 w-72 bg-[#202736] text-base-content rounded-box h-full">
          {!activeFilter ?
            <>
              <h1 className='text-center text-lg p-1 pt-0'>Filters</h1>
              <hr className='border-gray-500 opacity-50 w-4/5 mx-auto pb-4' />
              <div className='text-center relative h-4/5'>
                <ul className='filterPanel text-left'>
                  {
                    filters?.map((filter) => {
                      const subFilterLength = appliedFilters[filter]?.length;
                      return <li onClick={() => handleFilterClick(filter)} style={{ "color": subFilterLength && "#1b998b" }}>
                        {filter}
                        {subFilterLength && <span className='bg-gray-800'>{subFilterLength}</span>}
                      </li>
                    })
                  }
                </ul>
                {!!Object.keys(appliedFilters).length &&
                  <button type="button" className='bg-red-500 opacity-80 p-2 rounded-xl w-4/5 bottom-5 left-6 absolute' onClick={() => setAppliedFilters({})}>Remove all filters</button>}
              </div>
            </>
            :
            <>
              <h1 className='text-center text-lg p-1 pt-0'>{activeFilter}</h1>
              <hr className='border-gray-500 opacity-50 w-4/5 mx-auto pb-4' />
              <div className="mx-auto my-5">
                <label className="input input-bordered flex items-center gap-2 h-8">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Search"
                    onChange={(e) => {
                      setSecondaryFiltersCopy(
                        secondaryFilters.filter((filter) =>
                          (filter.toLowerCase()).includes(e.target.value.toLowerCase())
                        )
                      )
                    }}
                  />
                  <CiSearch />
                </label>
              </div>
              <div className='text-center overflow-y-auto'>
                <ul className='filterPanel text-left h-96'>
                  {secondaryFiltersCopy?.map((subFilter, key) => (
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