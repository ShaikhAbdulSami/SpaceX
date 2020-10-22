import * as React from 'react';
import { LaunchesQuery } from '../../generated/graphql'
import './style.css'
import { Link } from 'react-router-dom'


interface Props{
    data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {

    // maping data 
    const displayData = data.launches?.map((launch, i) => {
        return (
            <div key={launch?.flight_number} className='launch-box'>
                <div className='launch-margin'>
                    <div className='launch-mission'>
                        <span className='sp-one'>{`${launch?.flight_number}. `}</span>
                        <Link to={`launch/${launch?.flight_number}`}>
                            <span className='sp-two'>Mission: {launch?.mission_name}</span>
                        </Link>
                    </div>
                    <div className='launch-site'>
                        <span className='sp-one'>LaunchSite: </span><span>{launch?.launch_site?.site_name}</span>
                    </div>
                    <div className='launch-site'>
                        <span className='sp-one'>Launch year: </span><span>{launch?.launch_year}</span>
                    </div>
                    <div className='launch-status'>
                        <span className='sp-one'>status: <span className={launch?.launch_success ? 'true' : 'false'}>{launch?.launch_success ? 'sucessful' : 'failed'}</span></span>
                    </div>
                    <div className='launch-btu'>
                        <Link to={`launch/${launch?.flight_number}`}>
                            <button className='hvr-bounce-to-bottom launch-btn'>
                                <span>details</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className='display-div-launch'>
            <div className='heading-space'>
                <h1>Launches</h1>
            </div>
            <div className='display-data-launch'>
                {displayData}
            </div>
        </div >
    )
}
export default Launch;