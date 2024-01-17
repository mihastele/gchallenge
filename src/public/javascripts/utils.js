
document.getElementById('search-button').addEventListener('click', (e) =>
{
    e.preventDefault();
    let search = document.getElementById('search-input').value;
    window.location.href = `/search/?q=${search}`;
});

function revealOrHideGameUpdateButton(event) {
    
}