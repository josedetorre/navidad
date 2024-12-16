(function($) {
    $.fn.guirnalda = function(numEsferas) {

        var container = $("<div class='guirnalda-container'></div>");
        this.append (container);

        $(".guirnalda-container").each (function () {
            // Crear las esferas
            for (var i = 0; i < numEsferas; i++) {
                
                // Crear el contenedor de la esfera
                var separador = $('<div class="esfera-container"></div>');

                // Crear la esfera
                var esfera = $('<div class="esfera"><div class="gorrito"></div></div>');

                // Establecer la posición y un color aleatorio

                var color = getRandomColor();

                esfera.css({
                    backgroundColor: color, // Color aleatorio
                    animationDelay: (((i + 1) % 3)*0.5) + 's', // Desfase dinámico
                    rotate: getRandomInt(-30, 30) + 'deg',  // Rotación de la bombilla                
                    boxShadow: '0 0 0.25rem ' + color,                    
                });

                if (window.console) console.log (i % 3);

                // Añadir la esfera al contenedor
                $(separador).append(esfera);
                $(this).append(separador);
            }
        });

        return this;
    };

    document.guirnalda = { ultimocolor : Math.floor(Math.random() * 3)}; 

    // Función para obtener un color aleatorio
    function getRandomColor() {
        var bulbColor = ['00FF00', 'FF0000', 'E0E000'];
        var color = '#';

        color += bulbColor[document.guirnalda.ultimocolor ++ % 3];
        
        return color;
    }

    // Función para obtener un número aleatorio entre 2 valores
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

})(jQuery);