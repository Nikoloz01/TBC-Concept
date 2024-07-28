const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        dragSize: 300
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        600: {
            slidesPerView: 2.23
        },
        992: {
            slidesPerView: 3,
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.custom-dropdown');
    const savedValue = localStorage.getItem('selectedLanguage');
    if (savedValue) {
        selectElement.value = savedValue;
    }

    updateOptions(selectElement);

    selectElement.addEventListener('change', function () {
        const selectedValue = selectElement.value;

        localStorage.setItem('selectedLanguage', selectedValue);

        updateOptions(selectElement);
    });

    function updateOptions(selectElement) {
        const selectedValue = selectElement.value;
        const options = selectElement.querySelectorAll('option');

        options.forEach(option => {
            if (option.value === selectedValue) {
                option.hidden = true;
            } else {
                option.hidden = false;
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown-container');
    const selected = dropdown.querySelector('.dropdown-selected');
    const options = dropdown.querySelector('.dropdown-options');
    const selectedValue = localStorage.getItem('selectedLanguage');

    if (selectedValue) {
        const selectedOption = dropdown.querySelector(`.dropdown-option[data-value="${selectedValue}"]`);
        if (selectedOption) {
            selected.querySelector('span').textContent = selectedOption.textContent;
            options.querySelectorAll('.dropdown-option').forEach(option => {
                if (option.getAttribute('data-value') === selectedValue) {
                    option.style.display = 'none';
                } else {
                    option.style.display = 'block';
                }
            });
        }
    } else {
        const initialValue = options.querySelector('.dropdown-option').getAttribute('data-value');
        localStorage.setItem('selectedLanguage', initialValue);
        options.querySelector('.dropdown-option').style.display = 'none';
    }

    options.addEventListener('click', function (e) {
        if (e.target.classList.contains('dropdown-option')) {
            const value = e.target.getAttribute('data-value');
            const text = e.target.textContent;

            selected.querySelector('span').textContent = text;
            localStorage.setItem('selectedLanguage', value);

            options.querySelectorAll('.dropdown-option').forEach(option => {
                if (option.getAttribute('data-value') === value) {
                    option.style.display = 'none';
                } else {
                    option.style.display = 'block';
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function handleResize() {
        const dropdownHeaders = document.querySelectorAll('.footer_dropdown h4:not(.contact)');
        if (window.innerWidth <= 768) {
            dropdownHeaders.forEach(header => {
                header.addEventListener('click', toggleDropdown);
            });
        } else {
            dropdownHeaders.forEach(header => {
                header.removeEventListener('click', toggleDropdown);
                header.parentElement.classList.remove('open');
            });
        }
    }

    function toggleDropdown() {
        const parent = this.parentElement;
        parent.classList.toggle('open');
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});

document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.querySelector('.menu_trigger');
    const menuTriggerCircles = document.querySelector('.menu_trigger_circles');
    const closeIcon = menuTrigger.querySelector('.close-icon');
    const openIcon = menuTrigger.querySelector('.open-icon');

    menuTrigger.addEventListener('click', function () {
        menuTrigger.classList.toggle('active');
        menuTriggerCircles.classList.toggle('active');

        if (menuTrigger.classList.contains('active')) {
            openIcon.style.opacity = '0';
            openIcon.style.transform = 'scale(0.8)';
            setTimeout(() => {
                closeIcon.style.opacity = '1';
                closeIcon.style.transform = 'scale(1)';
            }, 300);
        } else {
            closeIcon.style.opacity = '0';
            closeIcon.style.transform = 'scale(0.8)';
            setTimeout(() => {
                openIcon.style.opacity = '1';
                openIcon.style.transform = 'scale(1)';
            }, 300);
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookiesButton = document.getElementById('accept-cookies');
  
    if (!localStorage.getItem('cookiesAccepted')) {
      cookiePopup.classList.add('show');
    }
    acceptCookiesButton.addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      cookiePopup.classList.remove('show');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.getElementById('overlay');
    const dropdownTitles = document.querySelectorAll('.dropdown-title');

    menuIcon.addEventListener('click', function () {
        if (overlay.classList.contains('show')) {
            overlay.classList.remove('show');
            overlay.classList.add('hide');
            setTimeout(() => {
                overlay.classList.remove('hide');
                overlay.style.display = 'none';
            }, 300);
        } else {
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.classList.add('show');
            }, 10);
        }
    });

    dropdownTitles.forEach(title => {
        title.addEventListener('click', function () {
            const dropdown = this.parentElement;
            const isOpen = dropdown.classList.contains('open');

            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));

            if (!isOpen) {
                dropdown.classList.add('open');
            }
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 992) {
            overlay.classList.remove('show');
            overlay.classList.add('hide');
            setTimeout(() => {
                overlay.classList.remove('hide');
                overlay.style.display = 'none';
            }, 300);
        }
    });
});
  

  




