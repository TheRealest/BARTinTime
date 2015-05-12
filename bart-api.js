var bartApi = {
  apiKey: 'BART_API_KEY',
  get: {
    root: 'http://api.bart.gov/api/',
    stations: {
      link: function() { return bartApi.get.root + 'stn.aspx?'; },
      data: function() { return { cmd: 'stns', key: bartApi.apiKey }; }
    },
    times: {
      link: function() { return bartApi.get.root + 'etd.aspx?'; },
      data: function(station,dir) { return { cmd: 'etd', orig: station, dir: dir, key: bartApi.apiKey }; }
    }
  }
}

var getStationList = function(cb) {
  var endpoint = bartApi.get.stations;
  $.get(endpoint.link(),endpoint.data()).done(cb);
};

var processStationList = function(rawXml) {
  var $xml = $(rawXml);
  var stations = $xml.find('station');
  var properties = ['name','abbr'];
  stations = stations.map(function(i,elem) {
    var obj = {};
    properties.forEach(function(prop) {
      obj[prop] = $(elem).find(prop).text();
    });
    return obj;
  }).get();
  return stations;
};

