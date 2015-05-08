var bartApi = {
  apiKey: 'BART_API_KEY',
  url: {
    stations: function() {
       return 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=' + bartApi.apiKey;
    },
    time: function(station, direction) {
      return ['http://api.bart.gov/api/etd.aspx?cmd=etd&orig=',station,'&dir=',direction,'&key=',bartApi.apiKey].join('');
    }
  }
}
