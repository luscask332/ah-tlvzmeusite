// Lógica do botão de compartilhar
const shareButton = document.querySelector('.share-button');
shareButton.addEventListener('click', function() {
    const poem = document.querySelector('.poem-container').innerText;
    const url = window.location.href;

    // Simulando o compartilhamento em uma rede social
    alert(`Compartilhando o poema:\n${poem}\n\nURL: ${url}`);
});
