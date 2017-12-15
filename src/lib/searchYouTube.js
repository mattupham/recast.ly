var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'q': options.query,
      'part': 'snippet',
      'maxResults': 5,
      'key': window.YOUTUBE_API_KEY,
      'type': ''
    },
    success: function (data) {
      console.log('video received', data);
      callback(data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('failed to get video', data);
    }
  });
} 

window.searchYouTube = searchYouTube;
