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




