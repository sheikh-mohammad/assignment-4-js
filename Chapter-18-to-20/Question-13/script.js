var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write("<table border='1px'>");

document.write(`<tr>
    <td>Students</td>
    <td>Scores</td>
</tr>`);

for (let i = 0; i < students.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < 1; j++) {
        document.write(`<td>${students[i]}`);
        document.write(`<td>${scores[i]}`);
    }
    document.write("</tr>");
}

document.write("</table>");