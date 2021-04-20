import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful-management';



// TODO: TO fetch all the entries

// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment_id>'))
// .then((environment) => environment.getEntries())
// .then((response) => console.log(response.items))
// .catch(console.error)

const useform = () => {

    const addEntryToContentful = ({ name, phone, address, image }) => {
        const CONTENT_MANAGEMENT_API_KEY = ""
        const SPACE_ID = ""
        const ENVIORNMENT_ID = ""
        const CONTENT_TYPE_ID = ""

        let client = createClient({
            accessToken: CONTENT_MANAGEMENT_API_KEY
        });
        
        client.getSpace(SPACE_ID)
            .then((space) => space.getEnvironment(ENVIORNMENT_ID))
            .then((environment) => environment.createEntry(CONTENT_TYPE_ID, {
                fields: {
                    name: {
                        'en-US': name
                    }
                },
                address: {
                    "en-US": address
                },
                phone: {
                    "en-US": phone
                }
            }))
            .then((entry) => entry)
            .catch(err => err)
    }

    return {
        addEntryToContentful
    }
}