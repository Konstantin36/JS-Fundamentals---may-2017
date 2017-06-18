function main(input) {
    let heroData = [
    ];

    for (let i= 0; i < input.length ; i++){
        let currentHeroArguments = input[i].split(" / ");

        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = Number(currentHeroArguments[1]);
        let currentHeroItems = currentHeroArguments[2].split(", ");

        if(currentHeroArguments.length > 2){
            currentHeroItems = currentHeroArguments[2].split(", ");
        }

        let hero ={};
        hero['name'] = heroName;
        hero['level'] = heroLevel;
        hero['items'] = heroItems;

        heroData.push(hero);

    }
    console.log(JSON.stringify(heroData));
}

