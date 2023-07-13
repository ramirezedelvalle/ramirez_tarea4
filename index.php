<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Dinámico</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <style>
        .container {
            max-width: 500px;
            margin-top: 50px;
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        #submitBtn {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Formulario Dinámico</h1>
        <form id="dynamicForm" action="#" method="POST">
            <div id="inputContainer">
                <!-- Aquí se agregarán los inputs dinámicamente -->
            </div>
            <button id="addInputBtn" class="btn btn-primary" type="button">Agregar Campo</button>
            <button id="removeInputBtn" class="btn btn-danger" type="button">Eliminar Último Campo</button>
            <br><br>
            <button id="submitBtn" class="btn btn-success" type="submit">Enviar Formulario</button>
        </form>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
