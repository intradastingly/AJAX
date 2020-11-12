async function fetchDaysWithFetch(){
    const url = 'https://api.dryg.net/dagar/v2.1/1990';
    const result = await fetch(url)
    const data = await result.json();
    presentHolidays(data.dagar);
}