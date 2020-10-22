import gql from 'graphql-tag'

export const QUERY_LAUNCH_DETAILS = gql `
    query LaunchInfo($id: String!){
        launch(id: $id){
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
        details
        launch_site{
            site_name
        }
        rocket{
            rocket_name
            rocket_type
        }
        links{
            video_link
            flickr_images
        }
        }
    }
`