function cargarMenu(){
    fetch('menu.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('menu-container').innerHTML = html;
    });
}

window.addEventListener('DOMContentLoaded', cargarMenu);