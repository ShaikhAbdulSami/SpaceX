import * as React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql'
import './style.css'
import { Link } from 'react-router-dom'


interface Props {
    data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <div className='item-margin'>
            <div className='box-item'>
                <div>
                    <div className='item-mission'>
                        <span className='sp-one'>{data.launch?.flight_number}. </span>
                        <span className='sp-two'>Mission: {data.launch?.mission_name}</span>
                    </div>
                    <div className='item-site'>
                        <span className='sp-one'>Launch date: </span><span className='sp-3'>{data.launch?.launch_date_local}</span>
                    </div>
                    <hr /> 
                    <div className='item-site'>
                        <span className='sp-one'>status: <span className={data.launch?.launch_success ? 'true' : 'false'}>{data.launch?.launch_success ? 'sucessful' : 'failed'}</span></span>
                    </div>
                    <hr /> 
                    <div className='item-site'>
                        <span className='sp-one'>Rocket: </span><span className='sp-3'>{data.launch?.rocket?.rocket_name}</span>
                    </div>
                    <hr /> 
                </div>
                <div className='item-p'>
                    <p>{data.launch?.details}</p>
                </div>
                <hr />
                {
                    !!data.launch?.links && !!data.launch.links.flickr_images && (
                        <div className='img-item'>
                            {data.launch.links.flickr_images.map((image, i) =>
                                image ? <div key={i}><img src={image}  height='300px' width="300px" alt={i.toString()} /></div> : null
                            )}
                        </div>
                    )
                }
                <hr />
                <div className='launch-btu'>
                        <Link to='/'>
                            <button className='hvr-bounce-to-bottom launch-btn btn'>
                                <span>Back</span>
                            </button>
                        </Link>
                    </div>
            </div >
        </div>
    )
}

export default LaunchDetails;