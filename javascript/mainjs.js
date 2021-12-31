// Header__sort-link mobile
var headerSortItems = document.querySelectorAll('.header__sort-item');
for (var i = 0; i < headerSortItems.length; i++) {
    headerSortItems[i].onclick = function (e) {
        for (var j = 0; j < headerSortItems.length; j++) {
            headerSortItems[j].classList.remove('header__sort-item--active');
        }
        e.target.parentElement.classList.add('header__sort-item--active');
    }
}

// Auth Login (Dang ky dang nhap)
var userItem = document.querySelector('.header__navbar-user');
var modal = document.querySelector('.modal');
// Click on usert
var modalOverplay = document.querySelector('.modal__overplay');
userItem.onclick = function () {
    modal.style.display = 'flex';
}
// Click close
modalOverplay.onclick = function () {
    modal.style.display = 'none';
}

// Switch Form
var authForms = document.querySelectorAll('.auth-form');
authForms[1].style.display = 'none';
var authSwitchBtns = document.querySelectorAll('.auth-form__switch-btn');
for (var i = 0; i < authSwitchBtns.length; i++) {
    authSwitchBtns[i].onclick = function (e) {
        if (e.target.innerText == "Đăng ký") {
            authForms[0].style.display = 'block';
            authForms[1].style.display = 'none';
        }
        else if (e.target.innerText == 'Đăng nhập') {
            authForms[0].style.display = 'none';
            authForms[1].style.display = 'block';
        }
    }
}

var filterE = document.querySelector('.home-filter__btn');
console.log(filterE);
function viec1() {
    console.log('function 1');
}
function viec2() {
    console.log('function 2');
}
filterE.addEventListener('click',viec1);
filterE.addEventListener('click',viec2);