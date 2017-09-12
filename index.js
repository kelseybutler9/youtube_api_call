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
  $('.js-search-results').html(results);
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
