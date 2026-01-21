import { cart } from "../components/cart/cart.js";

const form = document.getElementById("checkoutForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // VALIDACIÓN DEL PAGO 
  const nombreTarjeta = document.getElementById("cname").value.trim();
  const numeroTarjeta = document.getElementById("ccnum").value.trim();
  const mes = document.getElementById("expmonth").value.trim();
  const año = document.getElementById("expyear").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  // VALIDACIÓN DEL CLIENTE
  const nombre = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const direccion = document.getElementById("adr").value.trim();
  const ciudad = document.getElementById("city").value.trim();
  const estado = document.getElementById("state").value.trim();
  const zip = document.getElementById("zip").value.trim();

  // Validación de campos vacíos
  if (
    nombreTarjeta === "" ||
    numeroTarjeta === "" ||
    mes === "" ||
    año === "" ||
    cvv === "" ||
    nombre === "" ||
    email === "" ||
    direccion === "" ||
    ciudad === "" ||
    estado === "" ||
    zip === ""
  ) {
    alert("Pago rechazado: Por favor complete todos los campos.");
    return;
  }

  // Validación número tarjeta
  const numeroTarjetaLimpio = numeroTarjeta.replace(/\s+/g, "");
  if (numeroTarjetaLimpio.length !== 16 || isNaN(Number(numeroTarjetaLimpio))) {
    alert("Pago rechazado: Número de tarjeta inválido.");
    return;
  }

  // Validación mes
  const mesNumero = Number(mes);
  if (isNaN(mesNumero) || mesNumero < 1 || mesNumero > 12) {
    alert("Pago rechazado: Mes de expiración inválido.");
    return;
  }

  // Validación año
  const añoActual = new Date().getFullYear();
  const añoIngresado = Number(año);
  if (isNaN(añoIngresado) || añoIngresado < añoActual) {
    alert("Pago rechazado: Año de expiración inválido.");
    return;
  }

  // Validación CVV
  if (isNaN(Number(cvv)) || cvv.length !== 3) {
    alert("Pago rechazado: CVV inválido.");
    return;
  }

  // VALIDAR QUE EL CARRITO NO ESTÉ VACÍO
  if (cart.items.length === 0) {
    alert("No puedes pagar: el carrito está vacío.");
    return;
  }

  // CREAR OBJETO ORDEN
  const orden = {
    cliente: {
      nombre,
      email,
      direccion,
      ciudad,
      estado,
      zip
    },
    pago: {
      nombreTarjeta,
      numeroTarjeta,
      mes,
      año,
      cvv
    },
    productos: cart.items, // ← CONECTA EL CARRITO
    fecha: new Date().toISOString()
  };

  // GUARDAR EN LOCALSTORAGE
  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];

  // Evitar duplicar emails
  if (ordenes.some(o => o.cliente.email === orden.cliente.email)) {
    return alert("Este email ya ha sido registrado. Por favor usa otro.");
  }

  ordenes.push(orden);
  localStorage.setItem("ordenes", JSON.stringify(ordenes));

  // VACIAR CARRITO DESPUÉS DEL PAGO
  cart.clear();

  form.reset();

  alert("Pago aceptado. ¡Gracias por su compra!");
  console.log(localStorage.getItem("ordenes"));
});
