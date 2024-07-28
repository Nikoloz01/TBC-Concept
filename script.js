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
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5, // For screens 600px and below
        },
        600: {
            slidesPerView: 2.23 // For screens between 600px and 992px
        },
        992: {
            slidesPerView: 3, // For screens 992px and above
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.custom-dropdown');

    // Load the saved selected value from local storage
    const savedValue = localStorage.getItem('selectedLanguage');
    if (savedValue) {
        selectElement.value = savedValue;
    }

    // Update the options based on the saved value
    updateOptions(selectElement);

    selectElement.addEventListener('change', function () {
        const selectedValue = selectElement.value;

        // Save the selected value to local storage
        localStorage.setItem('selectedLanguage', selectedValue);

        // Update the options based on the new selected value
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
            // Hide the selected option and show the other one
            options.querySelectorAll('.dropdown-option').forEach(option => {
                if (option.getAttribute('data-value') === selectedValue) {
                    option.style.display = 'none';
                } else {
                    option.style.display = 'block';
                }
            });
        }
    } else {
        // Set initial value if none is stored
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

            // Hide the selected option and show the other one
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
    handleResize(); // Initial check
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
            }, 300); // Ensure the transition duration matches the CSS transition
        } else {
            closeIcon.style.opacity = '0';
            closeIcon.style.transform = 'scale(0.8)';
            setTimeout(() => {
                openIcon.style.opacity = '1';
                openIcon.style.transform = 'scale(1)';
            }, 300); // Ensure the transition duration matches the CSS transition
        }
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookiesButton = document.getElementById('accept-cookies');
  
    // Show the cookie popup if the user hasn't accepted cookies yet
    if (!localStorage.getItem('cookiesAccepted')) {
      cookiePopup.classList.add('show');
    }
  
    // Handle the accept cookies button click
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
            }, 300); // Match this duration with the CSS transition duration
        } else {
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.classList.add('show');
            }, 10); // Slight delay to ensure display property is applied
        }
    });

    dropdownTitles.forEach(title => {
        title.addEventListener('click', function () {
            const dropdown = this.parentElement;
            const isOpen = dropdown.classList.contains('open');

            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));

            // Toggle the clicked dropdown
            if (!isOpen) {
                dropdown.classList.add('open');
            }
        });
    });

    // Close overlay when window is resized to greater than 991px
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 992) {
            overlay.classList.remove('show');
            overlay.classList.add('hide');
            setTimeout(() => {
                overlay.classList.remove('hide');
                overlay.style.display = 'none';
            }, 300); // Match this duration with the CSS transition duration
        }
    });
});
  

  




