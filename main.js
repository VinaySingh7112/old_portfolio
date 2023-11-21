
        // ##########  skills #############
        const skillsContent = document.getElementsByClassName('skills__content'),
            skillsHeader = document.querySelectorAll('.skills__header')
        function toggleSkills() {
            let itemClass = this.parentNode.className

            for (i = 0; i < skillsContent.length; i++) {
                skillsContent[i].className = 'skills__content skills__close'
            }
            if (itemClass === 'skills__content skills__close') {
                this.parentNode.className = ('skills__content skills__open');
            }

        }
        skillsHeader.forEach((el) => {
            el.addEventListener('click', toggleSkills)
        })


        // ########  Qualification #############


        const tabs = document.querySelectorAll('[data-target]'),
            tabContents = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('qualification__active')
                })
                target.classList.add('qualification__active')

                tab.forEach(tab => {
                    tab.classList.remove('qualification__active')
                })
                tab.classList.add('qualification__active')
            })
        })




        // ########  Services model #############

        document.addEventListener("DOMContentLoaded", function () {
            const modalButtons = document.querySelectorAll(".services__button");
            const modalCloses = document.querySelectorAll(".services__modal-close");

            modalButtons.forEach((modalButton) => {
                modalButton.addEventListener("click", function () {
                    const modal = modalButton.closest(".services__content").querySelector(".services__modal");
                    modal.classList.add("active-modal");
                });
            });

            modalCloses.forEach((modalClose) => {
                modalClose.addEventListener("click", function () {
                    const modal = modalClose.closest(".services__modal");
                    modal.classList.remove("active-modal");
                });
            });
        });




        //   #######  slide  ######

        let swiperPortfolio = new Swiper(".mySwiper", {
            loop: true,
            grabCursor: true,
            spaceBetween: 150,
            centeredSlides: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        //   #######  slide 2  ######

        let swiperTestimonial = new Swiper(".testimonial__container", {

            loop: true,
            grabCursor: true,
            spaceBetween: 48,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                688: {
                    slidesPerView: 2,
                }
            }

        });

