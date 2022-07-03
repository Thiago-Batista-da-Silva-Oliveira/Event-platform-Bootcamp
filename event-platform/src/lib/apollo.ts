import { ApolloClient, InMemoryCache } from "@apollo/client";
/*
uri: import.meta.env.VITE_API_URL,
headers: {
   'Authorization' : `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
},
*/
export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4w2qeo11zv901ueha76664k/master',
    cache: new InMemoryCache()
})