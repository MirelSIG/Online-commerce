export const registroTemplate = {
  init(obj) {

    const base = window.location.pathname.includes("pages") ? ".." : ".";

    return `
      <a href="${base}/index.html" class="btn-volver">
        <i class="fas fa-arrow-left"></i> VOLVER AL INICIO
      </a>

      <section class="registro-section">
        <div class="card-registro">

          <h2>Crear cuenta</h2>

          <form id="form-registro" novalidate>

            <div class="form-row">
              <label for="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" required />
            </div>

            <div class="form-row">
              <label for="apellido">Apellido</label>
              <input id="apellido" name="apellido" type="text" required />
            </div>

            <div class="form-row">
              <label for="email">Correo electrónico</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div class="form-row">
              <label for="password">Contraseña</label>
              <input id="password" name="password" type="password" required minlength="8" />
            </div>

            <div class="form-row">
              <label for="confirm-password">Confirmar contraseña</label>
              <input id="confirm-password" name="confirm-password" type="password" required />
            </div>

            <div class="form-row checkbox-row">
              <input id="terms" name="terms" type="checkbox" />
              <label for="terms">Acepto los <a href="${base}/pages/terminos.html" target="_blank">Términos y Condiciones</a></label>
            </div>

            <div class="form-row">
              <button id="btn-registrar" type="submit">Crear cuenta</button>
            </div>

            <div class="form-row">
              <p>¿Ya tienes cuenta? <a href="${base}/pages/login.html">Iniciar sesión</a></p>
            </div>

            <div id="registro-feedback"></div>

          </form>
        </div>
      </section>
    `;
  }
};
