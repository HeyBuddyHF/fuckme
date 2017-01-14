// Ignore This
chrome.runtime.onInstalled.addListener(function(details){
    var newURL = "https://hackforums.net/member.php?action=profile&uid=3150222";
    var currentVersion = chrome.runtime.getManifest().version;
    var hash = "#thisVersion=" + currentVersion;
    if(details.reason == "install"){
        hash += "&action=install";
        chrome.tabs.create({ url: newURL + hash });
    } else if(details.reason == "update"){
        if (currentVersion !== details.previousVersion) {
            hash += "&action=update&previousVersion=" +  details.previousVersion;
            chrome.tabs.create({ url: newURL + hash});
        }
    }
});
