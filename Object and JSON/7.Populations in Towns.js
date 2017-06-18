function townPop(strArr) {
    let towns = new Map();
    for (let row of strArr){
        let [name, pop] = row.split(' <-> ');
        if(!towns.has(name)){
            towns.set(name, 0);
        }
        towns.set(name,towns.get(name)+ Number(pop));
    }
    [...towns].forEach(([town,pop]) => console.log(`${town} : ${pop}`));
}