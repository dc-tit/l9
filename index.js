function task1() {
    var items = ['T-shirt', 'Sweater'];
    var ques = prompt ('Welcome to our shop, what do you want', 'R/C/U/D');
    if (ques == 'R') {
        alert ('Our items: ' + items)
    }
    else if (ques == 'C') {
        var ans1 = prompt ('Enter new item(s)')
        items.push(ans1)
        alert ('Our items: ' + items)
    }
    else if (ques == 'U') {
        var p = prompt ('Update position')
        var ans2 = prompt ('Enter new item(s)')
        items[p] = ans2
        alert ('Our items: ' + items)
    }
    else if (ques == 'D') {
        var ans3 = prompt('Delete position')
        items.splice(ans3,1)
        alert ('Our items: ' + items)
    }
};

function task2() {

var inventory = {
    'gold' : 500,
    'pouch' : ['flint','twine','gemstone'],
    'backpack' : ['xylophone','dagger','bedroll','bread loaf']
};

    inventory.pocket = ['seashell','strange berry','lint'];
    inventory.backpack.splice(1,1); 
    inventory.gold += 50;
    delete inventory.pouch;
    console.log(inventory);    
};