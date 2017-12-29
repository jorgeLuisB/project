

 var array_users = [];

 var id=0;


function guardar() {
  //var nombre1 = primerNombre;
  
  firstname1=document.getElementById('txtNombre1').value;
  firstname2 = document.getElementById('txtNombre2').value;
  lastname1 = document.getElementById('txtApell1').value;
  lastname2 = document.getElementById('txtApell2').value;


/*guardar usuarios dentro del array*/
  
  let obj = {'id':id, 'nombre': firstname1, 'segundonombre': firstname2, 'apellido': lastname1, 'segundoapellido': lastname2 }

   id=id+1;
  array_users.push(obj);

  


    document.getElementById('txtNombre1').value=" ";  
    document.getElementById('txtNombre2').value=" ";
    document.getElementById('txtApell1').value=" ";
    document.getElementById('txtApell2').value=" ";


};



function borrar(dato){

  array_users.splice(dato,1)
  $( "#"+dato ).remove();

}



function ver(){


  $("#tbody").append(`<tr id="${array_users[array_users.length-1].id}">
    <td  >${array_users[array_users.length-1].nombre}</td>
    <td>${array_users[array_users.length-1].segundonombre}</td> 
    <td>${array_users[array_users.length-1].apellido}</td>
    <td>${array_users[array_users.length-1].segundoapellido}</td>
    <td> <input type="button" value="BORRAR" onclick="borrar(${array_users[array_users.length-1].id});">
  </tr>`);  


  
  $('#usertable').DataTable();  
 

 

};

function recargar(){
 
        $('#REC').click(function() {
            location.reload();
        });
    
}
