function mostrarAlerta(event) {
    // Previne o envio do formulário padrão
    event.preventDefault();
    
    // Exibe um alerta para o usuário
    alert('Seu orçamento foi enviado!');
}

// Adiciona o listener para o evento de envio do formulário
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', mostrarAlerta);
    }
});




document.addEventListener('DOMContentLoaded', function() {
    // Obtém o URL da página atual
    var currentUrl = window.location.pathname;

    // Seleciona todos os links de navegação
    var navLinks = document.querySelectorAll('header nav ul li a');

    // Itera sobre os links
    navLinks.forEach(function(link) {
        // Verifica se o href do link corresponde ao URL atual
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
});
