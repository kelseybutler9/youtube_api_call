const YOUTUBS_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_KEY = 'AIzaSyA6q8CLCawIKN7DqaeFnHRoHT-QiNWeJCI'

function getDataFromYouTube(searchVideo, callback) {
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    data: {
      part: 'snippet',
      key: YOUTUBE_KEY,
      q: `${searchVideo} in:name`,
      per_page: 10
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}

function renderResult(result) {
  return `
    <div>
      <p>${result.name}</p>
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
    const videoSearch = queryTarget.val();
    videoSearchTarget.val("");
    getDataFromYoutube(videoSearch, displayGitHubSearchData);
  });
}

$(userSubmits);
