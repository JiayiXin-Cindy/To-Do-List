chrome.runtime.onMessage.addListener((msg, sender, response) =>{
    if(msg.command == 'run-complete'){
        document.querySelector('textarea').value = JSON.stringify(msg.data);
        document.querySelector('textarea').style.display = 'block';
    }
});

function createMarker(){

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        var obj = document.querySelector('.commands-list .mark');
        chrome.tabs.sendMessage(activeTab.id, {command: "runMark", data: obj});

    
});
}

function findMarker(){

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        var obj = document.querySelector('.commands-list .find');
        chrome.tabs.sendMessage(activeTab.id, {command: "runFind", data: obj});

    
});
}


function deleteMarker(){

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        var obj = document.querySelector('.commands-list .delete');
        chrome.tabs.sendMessage(activeTab.id, {command: "runDelete", data: obj});

    
});
}

document.querySelector('.mark').addEventListener('click', function(){
    createMarker();
});

document.querySelector('.find').addEventListener('click', function(){
    findMarker();
});

document.querySelector('.delete').addEventListener('click', function(){
    deleteMarker();
    });

document.querySelector('.new-marker').addEventListener('click', function(){
var newItem = `<div class="commands-list">
<option value="mark">Mark</option>
<option value="find">Find Marker</option>
<option value="delete">Delete Marker</option>
</div>`;

document.querySelector('.command-list').innerHTML+=newItem;
});


