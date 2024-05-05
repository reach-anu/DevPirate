import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/pirateCard.css"

const PirateCard = ({ pirate }) => {
  const navigate = useNavigate();

  return (
    <div className='pirateCardContainer flex flex-col' onClick={() => navigate(`/profile/${pirate.id}`)}>
      <div className="h-3/5 flex items-center justify-center" style={{ "backgroundColor": pirate.bg }}>
        <img className='h-[200px]' src={pirate.img} alt="" />
      </div>
      <div className='p-3'>
        <div>
          <h3 className="w-fit m-auto font-bold text-xl"> {pirate.name ?? "Ramlal"} </h3>
          <h3 className="m-auto text-nowrap w-4/5 text-sm text-ellipsis overflow-hidden">Lock up your chests before we loot them all.</h3>
        </div>

        <div className="flex justify-between mt-3">
          <Link className="w-2/5" target='_blank' to={pirate.github}>
            <div className="btn btn-outline" onClick={(e) => { e.stopPropagation() }}>Github</div>
          </Link>
          <div className="w-2/5 btn btn-accent" onClick={(e) => { e.stopPropagation() }}>Invite</div>
        </div>
      </div>

    </div>
  )
}

export default PirateCard