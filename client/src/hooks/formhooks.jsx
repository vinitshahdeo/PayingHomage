import React, {useState, useEffect} from 'react';

// Constants we need to make the API call 
const CONTENT_MANAGEMENT_API_KEY = ""
const SPACE_ID = ""
const ENVIORNMENT_ID = ""
const CONTENT_TYPE_ID = ""

// TODO: TO create Client

// const client = contentful.createClient({
//   accessToken: '<content_management_api_key>'
// })


// TODO: TO create a new Entry //

// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment_id>'))
// .then((environment) => environment.createEntry('<content_type_id>', {
//   fields: {
//     title: {
//       'en-US': 'Entry title'
//     }
//   }
// }))
// .then((entry) => console.log(entry))
// .catch(console.error)

// TODO: TO fetch all the entries

// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment_id>'))
// .then((environment) => environment.getEntries())
// .then((response) => console.log(response.items))
// .catch(console.error)

const useform = () => {

    const addEntryToContentful = ({name, phone, address, image}) => {
    }

    return {
        addEntryToContentful
    }
}