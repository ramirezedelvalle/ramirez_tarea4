document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario
    const form = document.getElementById('dynamicForm');
    const inputContainer = document.getElementById('inputContainer');
    const addInputBtn = document.getElementById('addInputBtn');
    const removeInputBtn = document.getElementById('removeInputBtn');

    let inputCount = 0;

    // Función para crear un nuevo campo de entrada
    function createInput() {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const label = document.createElement('label');
        label.textContent = `Campo ${inputCount + 1}`;

        const input = document.createElement('input');
        input.type = 'text';
        input.name = `input${inputCount}`;
        input.placeholder = 'Ingrese un valor';
        input.classList.add('form-control');

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        inputContainer.appendChild(formGroup);

        inputCount++;
    }

    // Evento para agregar un nuevo campo de entrada
    addInputBtn.addEventListener('click', function() {
        createInput();
    });

    // Evento para eliminar el último campo de entrada
    removeInputBtn.addEventListener('click', function() {
        if (inputCount > 0) {
            inputContainer.removeChild(inputContainer.lastChild);
            inputCount--;
        }
    });

    // Evento para validar y enviar el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        // Verificar que todos los campos estén llenos
        const inputs = Array.from(inputContainer.getElementsByTagName('input'));
        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        // Verificar si hay al menos un campo antes de enviar el formulario
        const hasInputs = inputs.length > 0;
        if (!hasInputs) {
            event.preventDefault();
            alert('Debe existir al menos un campo para enviar el formulario.');
        } else if (isValid) {
            // Enviar el formulario
            alert('Formulario enviado exitosamente!');
            form.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
