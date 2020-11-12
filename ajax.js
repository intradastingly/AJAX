function fetchDaysWithAjax(event) {
   $.ajax ({
       url: 'https://api.dryg.net/dagar/v2.1/1990',
       type: 'GET', 
       success: function(response) {
           presentHolidays(response.dagar);
       },
       error: function(error){
           console.error(error);
       }
   });
}

