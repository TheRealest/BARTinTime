var bartApi = {
  apiKey: 'BART_API_KEY',
  url: {
    stations: function() {
       return 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=' + bartApi.apiKey;
    },
    time: function(stop, direction) {
      return ['http://api.bart.gov/api/etd.aspx?cmd=etd&orig=',stop,'&dir=',direction,'&key=',bartApi.apiKey].join('');
    }
  }
}
