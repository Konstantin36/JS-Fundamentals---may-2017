function solve(dataRows) {
    let initialsMap = new Map();
    for(let dataRow of dataRows){
        let[productName, productPrice] =
            dataRow.split(/\s:\s/g);
        let  initial = productName[0];
        if(!initialsMap.has(initial)){
            initialsMap.set(initial, new Map())
        }
        let  productMap = initialsMap.get(initial);
        productMap.set(productName, productPrice);
    }
    let sortedInitials = [...initialsMap.entries()].sort();
    for(let [initial, productMap] of sortedInitials){
        console.log(initial);
        let sortedProducts = [...productMap.entries()]
            .sort(sortAlphabetically);
        for(let [name, price] of sortedProducts){
            console.log(`${name}: ${price}`);
        }
    }
    function sortAlphabetically(a, b) {
        return a[0].localeCompare(b[0]);
    }
}