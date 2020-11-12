async function fetchDaysWithFetch(){
    try {
        const url = 'https://api.dryg.net/dagar/v2.1/2022';
        const result = await fetch(url)
        const data = await result.json();
        presentHolidays(data.dagar);
    } catch (error) {
        console.error(error)
    }
}

function fetchDaysWithFetchPromise(){
    const url = 'https://api.dryg.net/dagar/v2.1/1990';
    fetch(url).then(function(result) {
        return result.json()
    }) 
    .then (function(data) {
        presentHolidays(data.dagar);
    })
    .catch(function(error){
        console.log(error);
    })
}
//no separate libraries needed. 


