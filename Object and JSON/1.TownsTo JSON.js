function townJSON(strArr) {
    strArr.shift();
    let  towns =[];

    for (let row of strArr){
         let townTokens = row.split('|')
            .filter(e => e != '')
            .map(e => e.trim());

         let town = {
             Town : townTokens[0],
             Latitude : Number(townTokens[1]) ,
             Longitude : Number(townTokens[2] )
         }
         towns.push(town);
    }
    return JSON.stringify(towns);
}
//townJSON(['| Town | Latitude | Longitude |',
  //  '| Sofia | 42.696552 | 23.32601 |',
   //  '| Beijing | 39.913818 | 116.363625 |']);

// result  [{"Town":"Sofia","Latitude":42.69,"Longitude":23.32},
//         {"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]