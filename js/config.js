// Configuración de rutas base para GitHub Pages y desarrollo local
export const config = {
    // Detecta automáticamente si estamos en GitHub Pages o desarrollo local
    getBasePath() {
        const path = window.location.pathname;
        const isGitHubPages = path.includes('/Online-commerce/');
        const isInPages = path.includes('/pages/');
        
        if (isGitHubPages) {
            // En GitHub Pages
            return isInPages ? '/Online-commerce' : '/Online-commerce';
        } else {
            // Desarrollo local
            return isInPages ? '..' : '.';
        }
    },
    
    // Obtiene la ruta relativa según la ubicación actual
    getRelativePath() {
        return window.location.pathname.includes('/pages/') ? '..' : '.';
    }
};
