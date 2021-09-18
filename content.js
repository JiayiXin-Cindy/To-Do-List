chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (msg.command == "runCommands"){
        window.ScraperExt=[];

        var scrapeObj=msg.data;
        getNextItem(obj,0);
        window.ScraperExt=[];
    }
});
function getNextItem(obj, index){
    if (typeof obj[index]!=='undefined'){
        if(obj[index].type=='click'){
            clickEvent(obj,index);
        }
    }
    else{
        chrome.runtime.sendMessage({command:"run-complete", data:window.ScraperExt=[]
    });
    }
}
function waitEvent(selector, obj, index, endItem){
    var item=obj[index];
    var waitTime=parseInt(item.one);
    setTimeout(function(){
        getNextItem(obj,(index+1));
    },waitTime);
}
function clickEvent(selector, obj, index, endItem){
    var item=obj[index];
    document.querySelector(item.one).click();
    getNextItem(obj,(index+1));
}

function saveEvent(selector, obj, index, endItem){
    var item=obj[index];
    var value=document.querySelector(item.one).innerText();
    window.ScraperExt.push(value);
    getNextItem(obj,(index+1));
}
function enterEvent(selector, obj, index, endItem){
    var item=obj[index];
    var value=document.querySelector(item.one).value=item.two();
    window.ScraperExt.push(value);
    getNextItem(obj,(index+1));
}
