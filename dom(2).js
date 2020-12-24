let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')

// Form submit
form.addEventListener('submit', addItem);
// Delete items
itemList.addEventListener('click', removeItem)
// Filter items
filter.addEventListener('keyup', filterItems)
// Add item

function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create new btn
    let delateBtn = document.createElement('button');
    // Add class to btn
    delateBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Add text node
    delateBtn.appendChild(document.createTextNode('X'));
    // Append btn to li
    li.appendChild(delateBtn);

    itemList.appendChild(li)
}

// Remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filter items 
function filterItems(e){
    // convert lowercase
    let text = e.target.value.toLowerCase();
    // get list
    let items = itemList.getElementsByTagName('li');
    // convert to an arry
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none'
        }
    })
}


