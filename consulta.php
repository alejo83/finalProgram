<?php
header("Access-Control-Allow-Origin: *"); 
    include("conexion.php");
    
    include("conexion.php");

 
 $precio = $_POST["precio"];
 
    
    $sql = "SELECT * FROM consultar WHERE precio = '" . $precio . "'";


    
    $query = mysqli_query($conexion, $sql);
    
    $cantidadRegistros = mysqli_num_rows($query);
    
    if($cantidadRegistros > 0)
    {
        $tabla = "<table class='table table-striped'>";
        $tabla = $tabla . "<tr><th>Cedula</th><th>Capacidad</th><th>Habitacion</th><th>Piso</th><th>Precio</th></tr>";
        while($row = mysqli_fetch_array($query))
        {
            $tabla = $tabla . "<tr><td>" . $row["cedula"] . "</td>";
            $tabla = $tabla . "<td>" . $row["capacidad"] . "</td>";
            $tabla = $tabla . "<td>" . $row["habitacion"] . "</td>";
            $tabla = $tabla . "<td>" . $row["piso"] . "</td>";
            $tabla = $tabla . "<td>" . $row["precio"] . "</td></tr>";
        }        

        $tabla = $tabla . "</table>";
        echo $tabla;
    }
    else
    {
        echo "No hay registros";
    }

    mysqli_close($conexion);
?>

