window.onload = function()
{
    $("#buscarpre").click(buscarpre);
    $("#buscarcapa").click(buscarcapa);
    $("#buscarpiso").click(buscarpiso);
}

function buscarpre() 
{ 
  var precio = $("#precio").val(); 

  $.ajax({ 
  async:true, 
  type: "POST", 
  dataType: "html", contentType: "application/x-www-form-urlencoded", 
  url:"https://elmorochobedoya.000webhostapp.com/consulta.php", 
  data:"precio="+precio, beforeSend:inicioEnvio, success:llegadaDatos, 
  timeout:4000, 
  error:problemas }); 
  return false; 
} 

function buscarcapa() 
{ 
  
  var capacidad = $("#capacidad").val(); 
  
  

  $.ajax({ 
  async:true, 
  type: "POST", 
  dataType: "html", contentType: "application/x-www-form-urlencoded", 
  url:"https://elmorochobedoya.000webhostapp.com/sonsulcapa.php", 
  data:"capacidad="+capacidad, beforeSend:inicioEnvio, success:llegadaDatos, 
  timeout:4000, 
  error:problemas }); 
  return false; 
} 
function buscarpiso() 
{ 
  
  
  var piso = $("#piso").val(); 
  

  $.ajax({ 
  async:true, 
  type: "POST", 
  dataType: "html", contentType: "application/x-www-form-urlencoded", 
  url:"https://elmorochobedoya.000webhostapp.com/cosulpiso.php", 
  data:"piso="+piso, beforeSend:inicioEnvio, success:llegadaDatos, 
  timeout:4000, 
  error:problemas }); 
  return false; 
} 

 function inicioEnvio(datos)
{
}

function llegadaDatos(datos)
{
    $("#resultado").html(datos);
}

function problemas()
{
    $("#resultado").text('Problemas en el servidor.');
}

