export const detalleTemplate = {
  init(product) {

    const base = window.location.pathname.includes("pages") ? ".." : ".";

    const {
      id = 0,
      nombre = 'Producto sin nombre',
      categoria = 'Sin categoría',
      precio = 0,
      descuento = 0,
      IVA = 21,
      stock = 0,
      descripcion = 'Sin descripción disponible',
      caracteristicas = {},
      imagenes = []
    } = product || {};

    const tieneImagenes = Array.isArray(imagenes) && imagenes.length > 0;

    const imagenPrincipal = tieneImagenes
      ? `${base}/${imagenes[0]}`
      : 'https://via.placeholder.com/800x800?text=Sin+Imagen';

    const precioFinal = precio * (1 - descuento / 100);
    const precioConIVA = precioFinal * (1 + IVA / 100);

    return `
      <section class="product-detail">

        <div class="product-detail__gallery">
          <div class="main-image">
            <img src="${imagenPrincipal}" alt="${nombre}" loading="lazy">
          </div>

          ${imagenes.length > 1 ? `
            <div class="thumbnails">
              ${imagenes.map(img => `
                <img src="${base}/${img}" class="thumbnail" loading="lazy">
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="product-detail__info">
          <h1>${nombre}</h1>
          <p class="category">Categoría: <strong>${categoria}</strong></p>

          ${descuento > 0 ? `
            <p class="price-original"><del>€${precio.toFixed(2)}</del></p>
            <p class="price-discount">-${descuento}%</p>
          ` : ''}

          <p class="price-final"><strong>€${precioFinal.toFixed(2)}</strong></p>
          <p class="price-iva">Con IVA: €${precioConIVA.toFixed(2)}</p>

          <p class="description">${descripcion}</p>

          <button class="btn-add" data-id="${id}" ${stock === 0 ? 'disabled' : ''}>
            ${stock === 0 ? 'Agotado' : 'Añadir al carrito'}
          </button>

          ${Object.keys(caracteristicas).length > 0 ? `
            <div class="features">
              <h2>Características técnicas</h2>
              <ul>
                ${Object.entries(caracteristicas).map(([k, v]) => `
                  <li><strong>${k.replace(/_/g, ' ')}:</strong> ${v}</li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </div>

      </section>
    `;
  }
};
