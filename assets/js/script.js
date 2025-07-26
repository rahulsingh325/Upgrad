
window.onload = function () {
    const cards = document.querySelectorAll(".card-item");
    const image = document.getElementById("chart-image");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            // Remove 'active' class from all cards
            cards.forEach((c) => c.classList.remove("active"));

            // Add 'active' to clicked one
            card.classList.add("active");

            // Change image
            const imageSrc = card.getAttribute("data-image");
            if (imageSrc) {
                image.src = imageSrc;
            }
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

