let carrito = {
    pan_comun: { precio: 0.20, cantidad: 0 },
    pan_espelta: { precio: 3.05, cantidad: 0 },
    pan_trigo_sarraceno: { precio: 2.55, cantidad: 0 },
    pan_integral: { precio: 3.50, cantidad: 0 },
    pan_sin_gluten: { precio: 1.75, cantidad: 0 },
    pan_molde: { precio: 2.20, cantidad: 0 },
    pan_molde_sin_gluten: { precio: 8.55, cantidad: 0 }
};

function cambiarCantidad(id, cambio) {
    if (carrito[id].cantidad + cambio >= 0) {
        carrito[id].cantidad += cambio;
    }
    document.getElementById(id).textContent = carrito[id].cantidad;
    actualizarTotal();
}

function actualizarTotal() {
    let total = 0;
    for (let pan in carrito) {
        total += carrito[pan].cantidad * carrito[pan].precio;
    }
    document.getElementById("total").textContent = total.toFixed(2) + "€";
}

function procesarCompra() {
    let resumen = "Resumen de tu compra:\n";
    let tieneProductos = false;

    for (let pan in carrito) {
        if (carrito[pan].cantidad > 0) {
            resumen += `${carrito[pan].cantidad} x ${pan.replace("_", " ")} = ${(carrito[pan].cantidad * carrito[pan].precio).toFixed(2)}€\n`;
            tieneProductos = true;
        }
    }

    if (tieneProductos) {
        alert(resumen + "\nTotal: " + document.getElementById("total").textContent);
    } else {
        alert("No has seleccionado ningún producto.");
    }
}
