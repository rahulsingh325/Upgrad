window.onload = function () {
    const cards = document.querySelectorAll(".card-item");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            cards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
};

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        Swal.fire({
            title: '🎉 Button Clicked!',
            text: 'You just clicked a button.', 
            icon: 'success',
            confirmButtonText: 'Got it!',
            confirmButtonColor: '#3085d6',
            background: '#f0f9ff',
            color: '#333',
        });
    });
});

