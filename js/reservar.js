window.onload = function()
{
 $("#reservar").click(enviar);
}

function enviar() 
{ 
  var cedula = $("#cedula").val(); 
  var piso = $("#piso").val(); 
  var datosHabitacion = $("#habitacion").val().split('-');
 
  $.ajax({ 
  async:true, 
  type: "POST", 
  dataType: "html", contentType: "application/x-www-form-urlencoded", 
  url:"https://elmorochobedoya.000webhostapp.com/reservar.php", 
  data:"piso="+piso+"&precio="+datosHabitacion[1]+"&numero="+datosHabitacion[0]+"&cedula="+cedula, beforeSend:inicioEnvio, success:llegadaDatos, 
  timeout:4000, 
  error:problemas }); 
  return false; 
} 

 function inicioEnvio(datos)
{
 
}

function llegadaDatos(datos)
{
  alert(datos);
}

function problemas()
{
 alert("error");
}