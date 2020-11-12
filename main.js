window.addEventListener('load',main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    document.getElementById('ajax-button').addEventListener('click', fetchDaysWithAjaxAsyncAwait);
    document.getElementById('fetch-button').addEventListener('click', fetchDaysWithFetch);
    document.getElementById('fetch-promise').addEventListener('click', fetchDaysWithFetchPromise);
}
