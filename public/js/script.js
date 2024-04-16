document.addEventListener('DOMContentLoaded', function(){
    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelectorAll('.searchBar');
    const searchInput = document.getElementById('.searchInput');

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function () {
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        })
    }
});