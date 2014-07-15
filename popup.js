function GoToCachedPage (tabUrl) {
	var GoogleCache = "http://webcache.googleusercontent.com/search?q=cache%3A";
	var cachedPage = GoogleCache + encodeURIComponent(tabUrl);
	chrome.tabs.create({url: cachedPage});
};

function neva() {
	chrome.tabs.getSelected(null, function(tab) {
		GoToCachedPage(tab.url);})
;}

function GoToCachedPageTxtOnly (tabUrl) {
	var GoogleCache = "http://webcache.googleusercontent.com/search?q=cache%3A";
	var cachedPage = GoogleCache + encodeURIComponent(tabUrl) + "&strip=1";
	chrome.tabs.create({url: cachedPage});
};

function nevatxt() {
	chrome.tabs.getSelected(null, function(tab) {
		GoToCachedPageTxtOnly(tab.url);})
;}


function init() {
    clicker = document.querySelector('#full');
    clicker.addEventListener('click', neva);

    txtonlyclick = document.querySelector('#txtonly');
    txtonlyclick.addEventListener('click', nevatxt);
}
document.addEventListener('DOMContentLoaded', init);



