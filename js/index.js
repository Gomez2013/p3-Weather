//Run Tabslet
$('.tabs').tabslet();

//Get Weather
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#tab-1 .temp').text(weather.temp);
      $('#tab-1 .city').text(weather.city);
      $('#tab-1 img').attr('src', weather.forecast[0].image);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

//Get Spokane Weather
$.simpleWeather({
    location: '99201',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#tab-2 .temp').text(weather.temp);
      $('#tab-2 .city').text(weather.city);
      $('#tab-2 img').attr('src', weather.forecast[0].image);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

//Pasco Weather
$.simpleWeather({
    location: '99301'
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
     $('#tab-3 .condition').text(weather.forecast[0].text);
      $('#tab-3 img').attr('src', weather.forecast[0].image);
  $('#tab-3 .temp').text(weather.temp);
  
     
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });