<?php

    header("Access-Control-Allow-Origin: *"); 
    include("conexion.php");
    
 
 $piso = $_POST["piso"];
 $cedula = $_POST["cedula"];
 $precio = $_POST["precio"];
 $numero = $_POST["numero"];
 
 
  $sql = "INSERT INTO habitacion(piso, numero, precio, cedula) VALUES ('" . $piso . "','" . $numero .  "','" . $precio . "','" . $cedula . "')";

 $query = mysqli_query($conexion, $sql);
 
 if($query)
 {
  echo "Se creo la reserva de la habitacion";
 }
 else
 {
  echo "No fue posible crear la reserva";
 }
 
 mysqli_close($conexion);
?>