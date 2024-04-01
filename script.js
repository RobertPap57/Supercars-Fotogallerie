let images = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg',
    './img/img7.jpg', './img/img6.jpg', './img/img5.jpg', './img/img4.jpg',
    './img/img8.jpg', './img/img9.jpg', './img/img10.jpg', './img/img11.jpg',
    './img/img15.jpg', './img/img14.jpg', './img/img13.jpg', './img/img12.jpg',
    './img/img16.jpg', './img/img17.jpg', './img/img18.jpg', './img/img19.jpg',
    './img/img20.jpg', './img/img21.jpg', './img/img22.jpg', './img/img23.jpg']

let currentImageIndex = 0;

function load() {
    let imgContainer = document.getElementById('img');
    for (let i = 0; i < images.length; i++) {
        imgContainer.innerHTML += `
        <<div class="imgbox" onclick="openModal('${images[i]}', ${i})">
        <img src="${images[i]}">
        <div class="overlay">
        <div class="overlay-content">View Image</div>
        <div>
        `;
    }
}

function openModal(imageUrl, index) {
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById('modalImage');
    modal.style.display = "flex";
    modalImg.src = imageUrl;
    currentImageIndex = index;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('modalImage').src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('modalImage').src = images[currentImageIndex];
}