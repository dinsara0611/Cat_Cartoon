function changeimage() {
    var character = document.getElementById('character').value;
    var image = document.getElementById('characterImage');
    image.src = `Cat_image/${character}.jpg`;
}