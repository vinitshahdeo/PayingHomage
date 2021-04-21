import {createClient} from 'contentful-management';


export const useConentful = () => {
    const uploadWithoutImage = async (name, email, address) => {
        let client = createClient({
            accessToken: process.env.REACT_APP_CONTENT_MANAGEMENT_API_KEY
        })

        try {
            let space = await client.getSpace(process.env.REACT_APP_SPACE_ID);
            let enviornment = await space.getEnvironment(process.env.REACT_APP_ENVIORNMENT_ID);
            let entry = await enviornment.createEntry(process.env.REACT_APP_CONTENT_TYPE_ID, {
                fields: {
                    name: {
                        "en-US": name
                    },
                    email: {
                        "en-US": email
                    },
                    address: {
                        "en-US": address
                    }
                }
            });

            return entry;
        } catch (error) {
            throw error
        }
    }

    const uploadContentWithImage = async () => {

    }

    return {
        uploadWithoutImage
    }
}