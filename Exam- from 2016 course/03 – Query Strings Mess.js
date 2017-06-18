function queryMess(queries) {
    for (let query of queries) {
        if (query.indexOf('?') >= 0) {
            query = query.split('?')[1];
        }

        let keys = new Map;
        let tokens = query
            .replace(/%20|\+/g, ' ')
            .split(/&|=/)
            .map(e => e.trim())
            .map(e => e.replace(/\s+/g, ' '));

        for (let i = 0; i < tokens.length; i += 2) {
            if (!keys.has(tokens[i])) {
                keys.set(tokens[i], [])
            }

            keys.get(tokens[i]).push(tokens[i + 1])
        }

        let output = '';
        [...keys.keys()].forEach(k => output += `${k}=[${keys.get(k).join(', ')}]`);
        console.log(output);
    }
}