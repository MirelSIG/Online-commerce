export const loginTemplate = {
  init() {

    const base = window.location.pathname.includes("pages") ? ".." : ".";

    return `
      <section class="login-section">
        <div class="login-bg"></div>

        <div class="login-container">
          <div class="login-card">

            <div class="login-header">
              <h2>Bienvenido de vuelta</h2>
              <p class="subtitle">Inicia sesión en tu cuenta</p>
            </div>

            <form id="form-login" novalidate>

              <div class="form-row">
                <label for="email">Correo electrónico</label>
                <input type="email" id="email" name="email" required placeholder="tucorreo@ejemplo.com"/>
                <small class="error" data-for="email"></small>
              </div>

              <div class="form-row">
                <label for="password">Contraseña</label>
                <div class="password-wrapper">
                  <input type="password" id="password" name="password" required minlength="8" placeholder="••••••••"/>
                  <button type="button" id="toggle-password" class="toggle-eye">
                    <i class="fas fa-eye"></i>
                  </button>
                </div>
                <small class="error" data-for="password"></small>
              </div>

              <div class="form-options">
                <label class="checkbox-custom">
                  <input type="checkbox" id="remember"/>
                  <span class="checkmark"></span>
                  Recordarme
                </label>
                <a href="#" class="forgot-link">¿Olvidaste tu contraseña?</a>
              </div>

              <button type="submit" id="btn-login" class="btn-primary">Iniciar sesión</button>
            </form>

            <div class="divider"><span>o continúa con</span></div>

            <div class="login-footer">
              <p>¿Primera vez aquí? 
                <a href="${base}/pages/registro.html" class="link-highlight">Crear cuenta</a>
              </p>

              <a href="${base}/index.html" class="btn-volver">
                <i class="fas fa-arrow-left"></i> Volver al inicio
              </a>
            </div>

            <div id="login-feedback" aria-live="polite"></div>
          </div>
        </div>
      </section>
    `;
  }
};
