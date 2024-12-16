(function($) {
    $.fn.guirnalda = function(numEsferas) {

        var container = $("<div class='guirnalda-container'></div>");
        this.append (container);

        $(".guirnalda-container").each (function () {
            
            // Variables
            var containerWidth = $(this).width();
            var containerHeight = $(this).height();
            var spacing = containerWidth / (numEsferas + 1); // Espaciado entre esferas
            var yCenter = (containerHeight - 20) / 2; // Centrar verticalmente las esferas (resta 20px del tamaño)

            // Crear las esferas
            for (var i = 0; i < numEsferas; i++) {
                // Calcular la posición X de cada esfera
                var x = spacing * (i + 1) - 10; // -10 para centrar la esfera

                // Crear la esfera
                var esfera = $('<div class="esfera"><div class="gorrito"></div></div>');

                // Establecer la posición y un color aleatorio
                esfera.css({
                    left: x + 'px',
                    top: yCenter + 'px',
                    backgroundColor: getRandomColor(), // Color aleatorio
                    animationDelay: (((i + 1) % 3)*0.5) + 's' // Desfase dinámico
                });

                if (window.console) console.log (i % 3);

                // Añadir la esfera al contenedor
                $(this).append(esfera);
            }
        });

        return this;
    };

    document.guirnalda = { ultimocolor : Math.floor(Math.random() * 3)}; 

    // Función para obtener un color aleatorio
    function getRandomColor() {
        var letters = ['00FF00', 'FF0000', 'FFFF00'];
        var color = '#';

        color += letters[document.guirnalda.ultimocolor ++ % 3];
        
        return color;
    }

})(jQuery);