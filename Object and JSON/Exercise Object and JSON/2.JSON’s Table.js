function table(input) {
    let html = '<table>\n';

    for (let obj of input) {
        let parse = JSON.parse(obj);
        html += '  <tr>\n';

        html += '		<td>';
        html += parse['name'];
        html += '</td>\n';

        html += '		<td>';
        html += parse['position'];
        html += '</td>\n';

        html += '		<td>';
        html += parse['salary'];
        html += '</td>\n';

        html += '  <tr>\n';
    }


    html += '</table>';

    console.log(html);
}