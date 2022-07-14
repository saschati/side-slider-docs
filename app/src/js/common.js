import lozad from "lozad";

window.addEventListener('load', function () {
    /**
     * Scroll Up
     */
    {
        let prevKnownScrollPosition = 0;
        let lastKnownScrollPosition = window.pageYOffset;
        let ticking = false;
        let headerShow = false;

        const header = document.querySelector('.header');

        function showHeader(scrollPos, prevScrollPost, passed) {
            if (scrollPos < prevScrollPost && !headerShow) {
                header.classList.add('header_type_sticky');

                headerShow = true;
            } else if (scrollPos > prevScrollPost || passed > 150) {
                header.classList.remove('header_type_sticky');

                headerShow = false;
            }
        }

        document.addEventListener('scroll', function(e) {
            prevKnownScrollPosition = lastKnownScrollPosition;
            lastKnownScrollPosition = window.scrollY;

            const passed = Math.abs(prevKnownScrollPosition - lastKnownScrollPosition);

            if (passed > 50 && headerShow === false) {
                return;
            }

            if (!ticking) {
                window.requestAnimationFrame(function() {
                    showHeader(lastKnownScrollPosition, prevKnownScrollPosition, passed);
                    ticking = false;
                });

                ticking = true;
            }
        }, {passive: true});
    }

    /**
     * Layze
     */
    {
        const observer = lozad();
        observer.observe();
    }
});