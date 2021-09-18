function createCommandObject(){

    var commandsArr = [];

    var commands = document.querySelectorAll('.commands-list .command-item');
    for (var i=0; i < commands.length; i++) {
        var itemObj = {};
        itemObj.type = commands[i].querySelector('select').value;
        itemObj.one = commands[i].querySelector('.value-1').value;
        itemObj.two = commands[i].querySelector('.value-2').value;
        commandsArr.push(itemObj);
    }

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        var obj = commandArr;
        chrome.tabs.sendMessage(activeTab.id, {command: "runCommands", data: obj});
    
    });
}

document.querySelector('.run-command').addEventListener('click', function(){
    createCommandObject();
});



document.querySelector('.new-command').addEventListener('click', function(){
    var newItem = `<div class="commands-list">
    <select>
        <option value="wait">Wait</option>
        <option value="click">Click</option>
        <option value="enter">Enter Value</option>
        <option value="save">Save Value</option>
    </select>
    <input class="value-1" placeholder="200ms"/>
    <input class="value-2" placeholder="Optional"/>
</div>`;
document.querySelector('.command-list').innerHTML+=newItem;
});


chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    var obj = {};


    chrome.tabs.sendMessage(activeTab.id, {command: "runCommands", data: obj});

});

