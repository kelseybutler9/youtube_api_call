const YOUTUBS_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromYouTube(searchVideo, callback) {
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    data: {
      part: 'snippet',
      key: 'AIzaSyA6q8CLCawIKN7DqaeFnHRoHT-QiNWeJCI',
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
