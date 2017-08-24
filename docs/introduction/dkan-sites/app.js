url = 'https://getdkan.github.io/dkan-sites/sites.json';
$.getJSON(url, function (json) {
    count = new DKANCounter(json);
    $("#total").html(count.count);
    $("#cities").html(count.cities);
    $("#countries").html(count.countries);
    console.log(count);
    $(".render-bar").toggle();
    tables = new DKANTable(json);
    $.each(tables, function(key,table) {
      $("#tables").append(table);
    });
});


function DKANTable(data) {
  var tables = [];
  var headers = ["Organization", "City", "Country"]
  var formatted = {
    "Multinational": [],
    "United States of America": [],
    "Europe": [],
    "Americas": [],
    "Africa": [],
    "Asia & Oceania": []
  };

  $.each(data, function(key,site) {
    formatted[site.region].push([site.title, site.city, site.country, site.url])
  });

  $.each(formatted, function(region,rows) {
   var table = '<h3>' + region + '</h3><table class="table table-bordered table-striped table-condensed">';
   table = table + '<tr>';
   $.each(headers, function(key,header) {
     table= table + '<th>' + header + '</th>';
   });
   table = table + '</tr>';
   $.each(rows, function(key,row) {
     table = table + '<tr><td><a href="' + row[3] + '">' + row[0] + '</a></td><td>' + row[1] + '</td><td>' + row[2] + '</td></tr>'
   });
   table = table + '</table>'
   tables.push(table);
  });

  return tables;
}
function DKANCounter(data) {

  var count= 0;
  var cities = [];
  var agencies= [];
  var countries = [];

  $.each(data, function(key,site) {
    count = count + 1;
    cities = counter(cities, site.city);
    countries = counter(countries, site.country);
    agencies = counter(agencies, site.agency);
  });

  function counter(array, item) {
    if (array.indexOf(item) === -1) {
      array.push(item);
    }
    return array;
  }

  return {
    'count' : count,
    'agencies' : agencies.length,
    'countries' : countries.length,
    'cities' : cities.length
  }

}
