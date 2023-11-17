console.log("Starting extension");
function printURL(requestDetails) {
  if (!requestDetails.url.includes("json") && requestDetails.url.includes("cdnapisec")) {
    console.log(requestDetails.url);
  } else if (requestDetails.url.includes("index")) {
    console.log(requestDetails.url);
  }
}

browser.webRequest.onBeforeSendHeaders.addListener (
  printURL,
  { urls: ["*://*.kaltura.com/*m3u8*"]},
  // { urls: ["<all_urls>"] }
);
