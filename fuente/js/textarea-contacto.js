document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todos los elementos textarea en el documento
    let textareas = document.getElementsByTagName("textarea");
  
    // Itera sobre la colección de textareas
    for (let i = 0; i < textareas.length; i++) {
      let textarea = textareas[i];
  
      // Añade el evento input a cada textarea
      textarea.addEventListener("input", function() {
        // Resetea la altura para calcular la altura del contenido correctamente
        this.style.height = "auto";
        
        // Establece la altura al scrollHeight del textarea
        this.style.height = this.scrollHeight + "px";
      });
    }
  });
  