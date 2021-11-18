function ajax(){

    var xhttp=new XMLHttpRequest();
    var table=document.getElementById("protb");
     var rowCount=table.rows.length;
     for(var i=rowCount - 1; i>0;i--){
         tblCustomers.deleteRow(i);
     }
    xhttp.onreadystatechange=function(){

        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var g= response.Grocery;
           
            for (var i=0;i<g.length;i++){
               var row = table.insertRow(i+1);


               var cell1=row.insertCell(0);
               var cell2=row.insertCell(1);
               var cell3=row.insertCell(2);
               var cell4=row.insertCell(3);
               var cell5=row.insertCell(4);
               var cell6=row.insertCell(5);

               cell1.innerHTML= g[i].Serial;
               cell2.innerHTML= g[i].Name;
               cell3.innerHTML= g[i].Quantity;
               cell4.innerHTML= g[i].Unit;
               cell5.innerHTML= g[i].Department;
               cell6.innerHTML= g[i].Notes;

            }
           
        }
    }

    xhttp.open("GET","grocery.json",true);
    xhttp.send();

}