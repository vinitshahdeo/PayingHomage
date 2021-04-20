import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful-management';



// TODO: TO fetch all the entries

// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment_id>'))
// .then((environment) => environment.getEntries())
// .then((response) => console.log(response.items))
// .catch(console.error)

const useform = () => {

    const addEntryToContentful = async ({ name, phone, address, image }) => {
        const CONTENT_MANAGEMENT_API_KEY = ""
        const SPACE_ID = ""
        const ENVIORNMENT_ID = ""
        const CONTENT_TYPE_ID = ""

        let client = createClient({
            accessToken: CONTENT_MANAGEMENT_API_KEY
        });
        
        try {
            let space = await client.getSpace(SPACE_ID);
            let environment = await space.getEnvironment(ENVIORNMENT_ID)
            let entry = await environment.createEntry(CONTENT_TYPE_ID, {
                fields: {
                    name: {
                        "en-US": name
                    },
                    address: {
                        "en-US": address
                    },
                    phone: {
                        "en-Us": phone
                    }
                }
            });

            // create a new asset

            let asset = await environment.createAssetWithId("some random id", {
                fields: {
                    file: {
                        "en-US": {
                            contentType: 'image/jpeg',
                            fileName: image.fileName,
                            upload: image.file
                        }
                    }
                }
            })

            // updating the entry 

            entry.fields["image"]["en-US"] = {
                "sys": {
                    "id": asset.sys.id,
                    "linkType": "Asset",
                    "type": "Link"
                }
            }

            return entry.update();
            
        } catch (error) {
            throw error
        }
    }

    return {
        addEntryToContentful
    }
}