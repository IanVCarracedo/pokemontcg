import axios from "axios";

const domain = "https://api.pokemontcg.io/v2/";

const request = axios.create({
    baseURL: domain,
    params: {
        api_key: "d883b978-70e7-4a67-81de-b43b40f27aac"
    }
});

export const pokeApi = {
    /*Request that get card details */
    cardDetail: (id) => request.get(`cards/${id}`),

    /*Request that search for cards */
    searchCard: (query) => request.get(`cards/`, {
        params: {
            q: "name:"+query
        }
    }),

    /*Request that get all types */
    types: request.get(`types`),

    /*Request that get all subtypes */
    subtypes: request.get(`subtypes`),

    /*Request that get all supertypes */
    supertypes: request.get(`supertypes`),

    /*Request that get all card rarities */
    rarities: request.get(`rarities`)
}