import  React, {useEffect} from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchDetails from './launchdetails'
import { useParams } from 'react-router-dom'

const LaunchDetailsContainer = () => {
    const { id } = useParams()
    const {data , error , loading } = useLaunchInfoQuery({variables: { id: String(id) }})   
    
    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error Occured</div>
    }

    if(!data) {
        return <div>Please select a mission for it's details</div>
    }

    return <LaunchDetails data={data} />
}

export default LaunchDetailsContainer;