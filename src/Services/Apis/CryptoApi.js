import axios from "axios"
import { CoinsAction } from "../Slices/Crypto//Coins";
import { GlobalStateAction } from "../Slices/Crypto//GlobalState";
import { NewsAction } from "../Slices/Crypto//News";
import { CoinDetailsAction } from "../Slices/Crypto/CoinDetailSlice";
import { ExchnageAction } from "../Slices/Crypto//ExchangeSlice";
import { MarketsAction } from "../Slices/Crypto//MarketsSlice";



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
                    url: 'https://bing-news-search1.p.rapidapi.com/news/search?q="Cryptocurrency"',
                    params: { safeSearch: 'Off', textFormat: 'Raw' },
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


/* --------------------------------------------------------------------------------
                        Fetch Coin Details From Repidapi
-------------------------------------------------------------------------------- */
export const coinDetailData = ({ coinId }) => {
    return async (dispatch) => {
        const coinDetailRequest = async () => {
            axios.request(
                {
                    method: 'GET',
                    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
                    params: { referenceCurrencyUuid: coinId, timePeriod: '24h' },
                    headers: {
                        'X-RapidAPI-Key': '646793bc93msh0a1f6f52bce9f9fp19c9b7jsn2262f92e3160',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                }
            ).then(function (response) {
                dispatch(CoinDetailsAction.setCoins(response.data));
            }).catch(function (error) {
                console.error(error);
            });
        }
        try {
            await coinDetailRequest();
        } catch (error) {
            console.error(error);
        }
    }
}


/* --------------------------------------------------------------------------------
                        Coin Exchanges From Repidapi
-------------------------------------------------------------------------------- */
export const ExchangeData = ({ coinId }) => {
    return async (dispatch) => {
        const ExchangeRequest = async () => {
            axios.request(
                {
                    method: 'GET',
                    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/exchanges`,
                    params: {
                        referenceCurrencyUuid: 'yhjMzLPhuIDl',
                        limit: '50',
                        offset: '0',
                        orderBy: '24hVolume',
                        orderDirection: 'desc'
                    },
                    headers: {
                        'X-RapidAPI-Key': '646793bc93msh0a1f6f52bce9f9fp19c9b7jsn2262f92e3160',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                }
            ).then(function (response) {
                dispatch(ExchnageAction.setExchanges(response.data));
            }).catch(function (error) {
                console.error(error);
            });
        }
        try {
            await ExchangeRequest();
        } catch (error) {
            console.error(error);
        }
    }
}


/* --------------------------------------------------------------------------------
                        Coin Markets From Repidapi
-------------------------------------------------------------------------------- */
export const MarketsData = ({ coinId }) => {
    return async (dispatch) => {
        const MarketsRequest = async () => {
            axios.request(
                {
                    method: 'GET',
                    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/markets`,
                    params: {
                        referenceCurrencyUuid: coinId,
                        limit: '50',
                        offset: '0',
                        orderBy: '24hVolume',
                        orderDirection: 'desc'
                    },
                    headers: {
                        'X-RapidAPI-Key': '646793bc93msh0a1f6f52bce9f9fp19c9b7jsn2262f92e3160',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                }
            ).then(function (response) {
                dispatch(MarketsAction.setMarkets(response.data));
            }).catch(function (error) {
                console.error(error);
            });
        }
        try {
            await MarketsRequest();
        } catch (error) {
            console.error(error);
        }
    }
}
