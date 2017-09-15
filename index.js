const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_KEY = 'AIzaSyA6q8CLCawIKN7DqaeFnHRoHT-QiNWeJCI'

function getDataFromYouTube(searchVideo, callback) {
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    data: {
      part: 'snippet',
      key: YOUTUBE_KEY,
      q: `${searchVideo} in:name`
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
  //.fail(showErr);//adding this line for the fail?
}

function renderResult(result) {
  console.log(result);
  return `
    <div>
      <h2>
      <a class="js-result-name" href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">${result.snippet.title}</a></h2>
      <img src='${result.snippet.thumbnails.medium.url}' alt='search result image'>
    </div>
  `;
}

function displayGitHubSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results).prop('hidden', false);//added in for aria live
}

function showErr(err) {
  console.log(err);
  if(err === 404) {
    let errMsg = 'We couldn\'t find that video!';
  }
  if (err === 503) {
    let errMsg = 'We couldn\'t reach Youtube\'s servers!';
  }
  // $('js-result').empty()
  //   .append('<div class='error'><p>${errMsg}<p></div>')
  //   .prop('hidden',false);//erroring in console
}

function userSubmits() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const videoSearchTarget = $(event.currentTarget).find('.js-query');
    const videoSearch = videoSearchTarget.val();
    videoSearchTarget.val("");
    getDataFromYouTube(videoSearch, displayGitHubSearchData);
  });
}

$(userSubmits);
