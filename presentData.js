function presentHolidays(allDaysForAYear) {
    const container = document.getElementById('holidays-container');
    container.innerHTML = ""; //empties container.

    const holidays = getHolidays(allDaysForAYear);
    const listItems = createListItems(holidays);

    container.append(...listItems);   
    
    console.log(holidays);
}

function createListItems(holidays) {
    const listItems = [];

    for (const day of holidays){
        const li = document.createElement('li');
        li.innerHTML = day.helgdag + ' - ' + day.datum + ' - ' + day['röd dag'];
        listItems.push(li);
    }
    return listItems;
}

function getHolidays(allDaysForAYear) {
    const holidays = [];
    for(const day of allDaysForAYear) {
        if(day.helgdag) {
            holidays.push(day);
        }
    }
    return holidays;
}