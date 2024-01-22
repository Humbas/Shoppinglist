const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn=document.getElementById('clear');

// functions
function addItem(e){
    e.preventDefault();
    // valifdateion

    if(itemInput.value===''){
        alert('Please add a item');
        return;

    }

    // create list
    const li = document.createElememt('li');
    li.appendChild(document.createTextNode(itemInput));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);

    itemInput.value = '';

    console.log('success');
}


// create elements
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    return button;

}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;

}

// remove item
function removeItem(e){
   if(e.target.parentElement.classList.contains('remove-item')){
    e.target.parentElement.parentElement.remove();
   }  

}

// clear items
function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

//listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearItems);
