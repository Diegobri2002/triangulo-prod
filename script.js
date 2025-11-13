// --- Función para Generar URLs de Compra (NUEVA) ---
function generatePurchaseUrl(packageId, option, size) {
    // Objeto de mapeo de URLs. **REEMPLAZA ESTOS PLACEHOLDERS CON TUS ENLACES REALES.**
    const urlMap = {
        'medal-runner': { // Kit 1: No requiere talla, solo opción.
            'buy-pickup-1': 'https://trianguloproducciones.com.mx/products/kit-medal-runner', 
            'buy-ship-1': 'https://trianguloproducciones.com.mx/products/kit-medal-runner-envio'
        },
        'pet-runner': { // Kit 2: Requiere opción Y talla.
            'buy-pickup-2': {
                // Hombres - Recoger
                'H-CH': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-ch',
                'H-M': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-m',
                'H-G': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-g',
                'H-XG': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-xg',
                // Mujeres - Recoger
                'M-XCH': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-xch',
                'M-CH': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-ch',
                'M-M': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-m',
                'M-G': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-g',
                'M-XG': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-xg'
            },
            'buy-ship-2': {
                // Hombres - Envío
                'H-CH': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-ch-envio',
                'H-M': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-m-envio',
                'H-G': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-g-envio',
                'H-XG': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-hombre-xg-envio',
                // Mujeres - Envío
                'M-XCH': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-xch-envio',
                'M-CH': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-ch-envio',
                'M-M': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-m-envio',
                'M-G': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-g-envio',
                'M-XG': 'https://trianguloproducciones.com.mx/products/kit-pet-runner-playera-mujer-xg-envio'
            }
        },
        'runner': { // Kit 3: Requiere opción Y talla.
            'buy-pickup-3': {
                // Hombres - Recoger
                'H-CH': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-ch',
                'H-M': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-m',
                'H-G': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-g',
                'H-XG': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-xg',
                // Mujeres - Recoger
                'M-XCH': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-xch',
                'M-CH': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-ch',
                'M-M': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-m',
                'M-G': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-g',
                'M-XG': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-xg'
            },
            'buy-ship-3': {
                // Hombres - Envío
                'H-CH': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-ch-envio',
                'H-M': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-m-envio',
                'H-G': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-g-envio',
                'H-XG': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-hombre-xg-envio',
                // Mujeres - Envío
                'M-XCH': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-xch-envio',
                'M-CH': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-ch-envio',
                'M-M': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-m-envio',
                'M-G': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-g-envio',
                'M-XG': 'https://trianguloproducciones.com.mx/products/kit-runner-playera-mujer-xg-envio'
            }
        }
    };

    // --- Lógica de Retorno de URL ---
    
    // Si la tarjeta es Medal Runner (que no pide talla)
    if (packageId === 'medal-runner') {
        return urlMap[packageId][option] || '#'; 
    }

    // Para Pet Runner y Runner (que sí piden talla)
    if (urlMap[packageId] && urlMap[packageId][option] && urlMap[packageId][option][size]) {
        return urlMap[packageId][option][size]; 
    }

    // Retorno de seguridad si no se encuentra el URL
    console.error(`URL no encontrado para: Kit=${packageId}, Opción=${option}, Talla=${size}`);
    return '#'; 
}


document.addEventListener('DOMContentLoaded', function() {

    // --- NUEVO: ACTUALIZACIÓN AUTOMÁTICA DEL AÑO ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear(); 
    }
    // ------------------------------------------------
    
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;
    const navLinks = document.querySelectorAll('.main-nav a'); 

    // --- Funcionalidad del Menú (EXISTENTE) ---
    function closeMenu() {
        hamburgerButton.classList.remove('is-open');
        mainNav.classList.remove('is-open');
        body.classList.remove('nav-open');
        hamburgerButton.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
        hamburgerButton.classList.add('is-open');
        mainNav.classList.add('is-open');
        body.classList.add('nav-open');
        hamburgerButton.setAttribute('aria-expanded', 'true');
    }

    hamburgerButton.addEventListener('click', function() {
        const isOpen = hamburgerButton.classList.contains('is-open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // --- Funcionalidad de Paquetes y Tallas (NUEVA) ---
    const packageCards = document.querySelectorAll('.package-card');

    packageCards.forEach(card => {
        const select = card.querySelector('.kit-select');
        const sizeContainer = card.querySelector('.size-options-container');
        // Usa data-requires-sizes para saber si debe mostrar los botones de talla
        const requiresSizes = select.getAttribute('data-requires-sizes') === 'true'; 
        const sizeButtons = card.querySelectorAll('.btn-size');

        if (select) {
            select.addEventListener('change', function() {
                const selectedValue = this.value;

                // 1. Mostrar/Ocultar el contenedor de tallas
                if (requiresSizes && selectedValue) {
                    // Si la tarjeta requiere tallas Y se seleccionó una opción
                    if (sizeContainer) {
                        sizeContainer.style.display = 'block';
                    }
                } else if (sizeContainer) {
                    // Ocultar si la tarjeta no requiere tallas O no se ha seleccionado una opción
                    sizeContainer.style.display = 'none';
                }

                // 2. Gestionar la acción de compra
                if (!requiresSizes && selectedValue) {
                    // Tarjeta 1 (Kit Medal Runner) - Redirección directa
                    const packageId = card.getAttribute('data-package-id');
                    const finalUrl = generatePurchaseUrl(packageId, selectedValue, null); // null para la talla
                    
                    window.open(finalUrl, '_blank'); 

                } else if (requiresSizes && selectedValue) {
                    // Tarjetas 2 y 3 - La compra se gestiona al seleccionar la talla.
                    // Desmarcamos todas las tallas previamente seleccionadas al cambiar la opción
                    sizeButtons.forEach(button => {
                        button.classList.remove('active');
                    });
                }
            });
        }
        
        // Asignar el evento a los botones de talla
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const selectedSize = this.getAttribute('data-size');
                const selectedOption = select.value;

                // 1. Marcar el botón como activo
                sizeButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // 2. Ejecutar la acción de compra (si hay una opción de select elegida)
                if (selectedOption) {
                    const packageId = card.getAttribute('data-package-id');
                    const finalUrl = generatePurchaseUrl(packageId, selectedOption, selectedSize); 
                    
                    window.open(finalUrl, '_blank');
                } else {
                    alert('Por favor, primero selecciona una opción de compra (recoger o envío).');
                }
            });
        });
    });
});
