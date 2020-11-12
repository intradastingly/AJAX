function fetchDaysWithAjax() {
   $.ajax ({
       url: 'https://api.dryg.net/dagar/v2.1/1991',
       type: 'GET', 
       success: function(response) {
           presentHolidays(response.dagar);
       },
       error: function(error){
           console.error(error);
       }
   });
}

async function fetchDaysWithAjaxAsyncAwait() {
    try {
        const result = await $.ajax('https://api.dryg.net/dagar/v2.1/1991');
        presentHolidays(result.dagar);
    } catch (error) {
        console.error(error);
    }
}