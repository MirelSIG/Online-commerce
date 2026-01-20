export const registroTemplate = {

  init(obj) {
    return `

       <!-- HTML (solo cambia la clase si quieres) -->
<a href="../index.html" class="btn-volver">
  <i class="fas fa-arrow-left"></i> <span data-idioma="register.backToHome">VOLVER AL INICIO</span>
</a>
                
           <section class="registro-section">
              <div class="card-registro">    
        <h2 data-idioma="register.createAccount">Crear cuenta</h2>

        <form id="form-registro" novalidate>
          <div class="form-row">
            <label for="nombre" data-idioma="register.firstName">Nombre</label>
            <input id="nombre" name="nombre" type="text" required />
            <small class="error" data-for="nombre"></small>
          </div>

          <div class="form-row">
            <label for="apellido" data-idioma="register.lastName">Apellido</label>
            <input id="apellido" name="apellido" type="text" required />
            <small class="error" data-for="apellido"></small>
          </div>

          <div class="form-row">
            <label for="email" data-idioma="register.email">Correo electrónico</label>
            <input id="email" name="email" type="email" required />
            <small class="error" data-for="email"></small>
          </div>

          <div class="form-row">
            <label for="password" data-idioma="register.password">Contraseña</label>
            <input id="password" name="password" type="password" required minlength="8" />
            <small class="error" data-for="password"></small>
          </div>

          <div class="form-row">
            <label for="confirm-password" data-idioma="register.confirmPassword">Confirmar contraseña</label>
            <input id="confirm-password" name="confirm-password" type="password" required />
            <small class="error" data-for="confirm-password"></small>
          </div>

          <div class="form-row checkbox-row">
            <input id="terms" name="terms" type="checkbox" />
            <label for="terms"><span data-idioma="register.acceptTerms">Acepto los</span> <a href="/pages/terminos.html" target="_blank" data-idioma="register.termsAndConditions">Términos y Condiciones</a></label>
            <small class="error" data-for="terms"></small>
          </div>

          <div class="form-row">
            <button id="btn-registrar" type="submit" data-idioma="register.createAccountBtn">Crear cuenta</button>
          </div>

          <div class="form-row">
            <p><span data-idioma="register.alreadyHaveAccount">¿Ya tienes cuenta?</span> <a href="/pages/login.html" id="link-login" data-idioma="register.login">Iniciar sesión</a></p>
          </div>

          <div id="registro-feedback" aria-live="polite"></div>
        </form>
        </div>
      </section>
        `
  }

}