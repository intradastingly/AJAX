window.addEventListener('load',main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    document.getElementById('ajax-button').addEventListener('click', fetchDaysWithAjaxAsyncAwait);
    document.getElementById('fetch-button').addEventListener('click', fetchDaysWithFetch);
    document.getElementById('fetch-promise').addEventListener('click', fetchDaysWithFetchPromise);
    document.getElementById('html-button').addEventListener('click', fetchHtmlDocument);
}

async function fetchHtmlDocument() {
    const response = await fetch('./index.html');
    console.log(await response.text());
}