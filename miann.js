var hieght= 8; 
var widght= 8; 

function genrate_table (hieght,widght)
 {
     table=""; 
     for (var i=0; i<hieght; i++)
     {
         table +="<tr>/n" ; 
         for(var j=0; j<widght; j++)
         {
             var addtable ="<td id=\"cell_row_col\" onclick=\"handle_click(row,col)\"></td>\n"
                .replace(/row/g, i)
                .replace(/col/g, j);
         }
            table += "<\tr>/n";
     }
 
return table; 
}
