$location.fetch({
    handler: function(location) {
       var query = location.lat + ',' + location.lng
       var url = 'http://maps.apple.com/?q=' + query + "&ll=" + query
       $share.sheet([url])
    }
})