// Script jQuery modal
$(document).ready(function(){
    $('#Enviar').click(function(){
        alert("El Formulario fue enviado correctamente.");
    });
  });
  // Script jQuery para ocultar la sección en tamaños pequeños de pantalla
  $(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() <= 768) {
            $('#quienes-somos').addClass('hidden-sm');
        } else {
            $('#quienes-somos').removeClass('hidden-sm');
        }
    });
});