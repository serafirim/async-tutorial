/*
::::::::::::::::::[ NOTES ]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* The ? after riverInformation is part of "defensive programming" which uses a design principle that
  emphasizes high availablity for the application. To ensure that the component will render even if the
  data is not in the correct shape or if you do not get any data at all from the API request. This helps it
  not throw an error. To test if it works, remove the default object {} from the useState function.
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getRiverInformation } from '../../../services/rivers'

export default function RiverInformation({ name }) {
    const [ riverInformation, setRiverInformation ] = useState({})

    useEffect(() => {
        let mounted = true

        getRiverInformation(name)
        .then(data => {
            if (mounted) {
                setRiverInformation(data)
            }
        })
        return () => {
            mounted = false
        }
    }, [ name ])

    return (
        <div>
            <h2>River Information</h2>
            <ul>
                <li>Continent: {riverInformation?.continent}</li>
                <li>Length: {riverInformation?.length}</li>
                <li>Outflow: {riverInformation?.outflow}</li>
            </ul>
        </div>
    )
}

RiverInformation.propTypes = {
    name: PropTypes.string.isRequired
}