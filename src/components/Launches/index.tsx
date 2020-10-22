import * as React from 'react';
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './launch';

const LaunchContainer = () => {

    const { data , error , loading } = useLaunchesQuery();

    if(loading){
        return <div className="loading">Loading...</div>
    }
    
    if(error || !data){
        return <div>Error Occured</div>
    }

    return <Launch data={data}  />
}

export default LaunchContainer;