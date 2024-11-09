import {useEffect, useState} from 'react';

// custom hooks must begin with 'use'
// we pass in a generic function that can be used for fetching the data
// it make fetchAvailablePlaces more generic.

export function useFetch(fetchFn, initialValue) {
    
    // need to add state into the custom hooks.
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    // original code

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
    
          try {
            const data = await fetchFn();
            setFetchedData(data);
    
          } catch (error) {
            setError({
              message:
                error.message || 'Could not fetch data, please try again later.',
            });
            setIsFetching(false);
          }
        }
    
        fetchPlaces();
      }, [fetchFn]);

    // code is useless unless we return the state that is being managed.   We can do
    // this via an array or object
    return {
        isFetching,
        error,
        fetchedData
    };
}

/*
Within the calling component you would need to do someting like this:
import {useFetch} from './hooks/useFetch.js';

function blah() {

    // initial value is passed in and set to an empty array.
    const {isFetching, error, fetchedData} = useFetch(fetchUserPlaces, []);

}

*/

/*
You might want external data to be able to modify data, well you can return the
state updating functions, eg:
return {
    isFetching,
    setIsFetching,
    error,
    setError,
    fetchedData,
    setFetchedData
};

You might need to return some dependencies.

Also, it might be useful to alias the state/functions in the parent code, eg:
const {isFetching, error, fetchedData: fetchedUsers} = useFetch(.....);

*/

/*
Within tutorial 249, he shows you how to wrap the non-http request to the navigator as
a function based promise.   COULD BE USEFUL:

// common javascript approach of turning non-promise based code into a promise based function.

async function fetchSortedPlaces() {
    const places = await fetch availablePlaces();

    return new Promis((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position)=> {
            const sortedPlaces = sortPlacesByDistance(
                places,
                position.coords.latitude,
                position.coords.longtitude,
            );

            resolve(sortedPlaces);
        });
    });
}
*/