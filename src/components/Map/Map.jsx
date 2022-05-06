import GoogleMapReact from "google-map-react"
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'


import useStyles from './styles'

export function Map() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:60px)')
    const coordinates = { lat: 0, lng: 0 };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAjaE9UwX9nKxpheK5jW_vKNBZm2zbD8fE' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                matgin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}