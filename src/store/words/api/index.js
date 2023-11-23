import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase'

export const wordsApi = createApi({
    reducerPath: 'wordsApi',
    baseQuery: fetchBaseQuery({baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE}),
    tagTypes: ['words'],
    endpoints: (builder) => ({
        sendWords: builder.mutation ({
            query: ({enword, esword, enphrase, esphrase}) => ({
                url: '/words.json',
                method: 'POST',
                body: {
                    esphrase,
                    esword,
                    enword,
                    enphrase
                }
            })
        }),
        getWords: builder.query ({
            query: () => `/words.json`,
            transformResponse: (response) => {
                if ( !response ) return []
                return Object?.values(response)
            },
            providesTags: ['words']
        })
    })
})

export const { useSendWordsMutation, useGetWordsQuery } = wordsApi