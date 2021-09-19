    document.querySelector('.new-item').addEventListener('click', function(){
    var newItem = `<div class="command-item">
      <select>
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="priority">Priority</option>
        <option value="daily">Daily</option>
      </select>
      <input class="value-1" placeholder="text"/>
    </div>`;
    document.querySelector('.commands-list').innerHTML+=newItem;
  });
