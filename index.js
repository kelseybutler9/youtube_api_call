const YOUTUBS_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromYouTube(searchVideo, callback) {
  return 
}

function renderResult(result) {
  return `
    <div>
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
  });
}

$(userSubmits);
