import axios from "axios"
import { CoinsAction } from "../Slices/Coins";
import { GlobalStateAction } from "../Slices/GlobalState";
import { NewsAction } from "../Slices/News";



/* --------------------------------------------------------------------------------
                        Global State Fetch From Repidapi
-------------------------------------------------------------------------------- */

export const globalStateData = () => {
    return async (dispatch) => {
        const globalStateRequest = async () => {
            axios.request(
                {
                    method: 'GET',
                    url: 'https://coinranking1.p.rapidapi.com/stats',
                    params: { referenceCurrencyUuid: 'yhjMzLPhuIDl' },
                    headers: {
                        'X-RapidAPI-Key': '646793bc93msh0a1f6f52bce9f9fp19c9b7jsn2262f92e3160',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                }
            ).then(function (response) {
                dispatch(GlobalStateAction.setGlobalstate(response.data));
            }).catch(function (error) {
                console.error(error);
            });
        }
        try {
            await globalStateRequest();
        } catch (error) {
            console.error(error);
        }
    }
}



/* --------------------------------------------------------------------------------
                        All Coins Fetch From Repidapi
-------------------------------------------------------------------------------- */

export const coinsData = () => {
    return async (dispatch) => {
        const coinsRequest = async () => {
            axios.request(
                {
                    method: 'GET',
                    url: 'https://coinranking1.p.rapidapi.com/coins',
                    params: {
                        referenceCurrencyUuid: 'yhjMzLPhuIDl',
                        timePeriod: '24h',
                        'tiers[0]': '1',
                        orderBy: 'marketCap',
                        orderDirection: 'desc',
                        limit: '50',
                        offset: '0'
                    },
                    headers: {
                        'X-RapidAPI-Key': '646793bc93msh0a1f6f52bce9f9fp19c9b7jsn2262f92e3160',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                }
            ).then(function (response) {
                dispatch(CoinsAction.setCoins(response.data));
            }).catch(function (error) {
                console.error(error);
            });
        }
        try {
            await coinsRequest();
        } catch (error) {
            console.error(error);
        }
    }
}


/* --------------------------------------------------------------------------------
                        Fetch Trending News From Repidapi
-------------------------------------------------------------------------------- */
export const newsData = () => {
    return async (dispatch) => {
        const newsRequest = async () => {
            axios.request(
                {
                    method: 'GET',
                    // url: 'https://bing-news-search1.p.rapidapi.com/news',
                    url: 'https://bing-news-search1.p.rapidapi.com/news/search?q="Cryptocurrency"',
                    params: {safeSearch: 'Off', textFormat: 'Raw'},
                    headers: {
                      'X-BingApis-SDK': 'true',
                      'X-RapidAPI-Key': '646793bc93msh0a1f6f52bce9f9fp19c9b7jsn2262f92e3160',
                      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                    }
                }
            ).then(function (response) {
                dispatch(NewsAction.setNews(response.data));
            }).catch(function (error) {
                console.error(error);
            });
        }
        try {
            await newsRequest();
        } catch (error) {
            console.error(error);
        }
    }
}