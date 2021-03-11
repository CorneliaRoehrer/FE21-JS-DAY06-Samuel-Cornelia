
let mydata = JSON.parse(employees);
console.table(mydata);
// var col = []


function tableCreate(){

    //
    for(let i = 0; i < mydata.length; i++){
        //create an empty string so that JS doesnt close <tr> immediately (JS normally closes opening tags by itself)
        var string = "" 
        
        //open our string with <tr> creating a table row (no </tr> placed yet) and filling it with the loop in line 18.
        string += "<tr>";

        //this loop starts inside i with the first object which in our case is {1,Julia, Jasmin, ...} of the array employees. It runs six times (because we have 6 keys) inside the object and each time creates a td(tabledata) with the 6 values of our 6 different keys
        for(let x in mydata[i]){
            string += `<td> ${mydata[i][x]} </td>`;
        }

        //now we close the <tr>(filled with our loop) with a </tr>
        string += "</tr>";

        console.log(string)

        //no we print <tr>loop</tr> inside our tbody which has the id "result". And then our big loop (line10) starts again and runs in total 10 times because we have 10 objects in our array employees.
        document.getElementById("result").innerHTML += string;
    }
}
tableCreate();

