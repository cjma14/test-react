const inputs = document.querySelectorAll(".form-control");

inputs.forEach((input) => {
    // Si el input tiene un valor, agregar la clase "focus"
    if (input.value) {
        input.parentNode.classList.add("focus");
    }

    // Agregar eventos "focus" y "blur"
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
});


function handleFocus(event) {
    const input = event.target;
    setFocus(true, input);
}

function handleBlur(event) {
    const input = event.target;
    setFocus(false, input);
}

function setFocus(on, input) {
    if (on) {
        // Agregar la clase "focus" después de un breve retraso
        setTimeout(() => {
            input.parentNode.classList.add("focus");
        }, 100);
    } else {
        // Eliminar la clase "focus" y actualizar otros elementos
        const box = input.closest(".form-group");
        box.classList.remove("focus");

        updateFocusClasses();
    }
}


function updateFocusClasses() {
    const inputs = document.querySelectorAll(".form-control");

    inputs.forEach((input) => {
        const parent = input.closest(".form-group");

        if (input.value) {
            parent.classList.add("focus");
        } else {
            parent.classList.remove("focus");
        }
    });
}


function triggerEvent(input, eventName) {
    const event = new Event(eventName);

    if (input.value !== "") {
        input.dispatchEvent(event);
    }
}
