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
  stations = stations.map(function(i,elem) {
    var obj = {}, $elem = $(elem);
    obj.name = $elem.find('name').text();
    obj.abbr = $elem.find('abbr').text();
    return obj;
  }).get();
  return stations;
};

var getTimeList = function(station, direction, cb) {
  var endpoint = bartApi.get.times;
  $.get(endpoint.link(),endpoint.data(station,direction)).done(cb);
};

var processTimeList = function(rawXml) {
  var $xml = $(rawXml);
  var times = $xml.find('etd');
  times = times.map(function(i,elem) {
    var obj = {}, $elem = $(elem);
    obj.line = $elem.find('destination').text();
    obj.abbr = $elem.find('abbreviation').text();
    obj.etd = $elem.find('estimate').map(function(i,est){
      var $est = $(est), estObj = {};
      $est.children().each(function(i,child){
        var $child = $(child);
        if ($child.prop('tagName') === 'length') return;
        estObj[$child.prop('tagName')] = $child.text();
      });
      return estObj;
    }).get();
    return obj;
  }).get();
  return times;
};

var withStations = function(cb) {
  getStationList(function(data) {
    cb(processStationList(data));
  });
};

var withTimes = function(station, direction, cb) {
  getTimeList(station, direction, function(data) {
    cb(processTimeList(data));
  });
};
