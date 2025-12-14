var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write("<table border='1px'>");

document.write(`
<tr>
    <td>Students</td>
    <td>Scores</td>
</tr>
`);

for (let i = 0; i < students.length; i++) {
    document.write(`
        <tr>
            <td>${students[i]}</td>
            <td>${scores[i]}</td>
        </tr>
    `);
}

document.write("</table>");