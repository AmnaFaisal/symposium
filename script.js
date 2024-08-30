window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var menuIcon = document.querySelector('.menu-option');
    var logoImage = document.querySelector('.logo img');
    
    
    var scrollThreshold = 425; 
    
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
        menuIcon.style.opacity = '1';
        logoImage.src = "images/golden_logo.png"; 
    } else {
        navbar.classList.remove('scrolled');
        menuIcon.style.opacity = '0';
        logoImage.src = "images/logo.png";
    }
});



     function countUp(elementId, target, duration) {
            let start = 0;
            const increment = target / (duration / 10); // Update every 10ms
            const counterElement = document.getElementById(elementId);
            
            function updateCounter() {
                start += increment;
                if (start >= target) {
                    counterElement.textContent = target;
                } else {
                    counterElement.textContent = Math.floor(start);
                    setTimeout(updateCounter, 10);
                }
            }

            updateCounter();
        }

        document.addEventListener("DOMContentLoaded", function() {
            const counterphd = document.getElementById('counterphd');
            const counterms = document.getElementById('counterms');
            const counteralumini = document.getElementById('counteralumini');
            
            const phdCount = parseInt("{{ phd_count }}", 10); 
            const msCount = parseInt("{{ master_count }}", 10); 
            const aluminiCount = parseInt("{{ alumini_count }}", 10);

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'counterphd') {
                            countUp('counterphd', phdCount, 2000); 
                        } else if (entry.target.id === 'counterms') {
                            countUp('counterms', msCount, 2000); 
                        } else if (entry.target.id === 'counteralumini') {
                            countUp('counteralumini', aluminiCount, 2000); 
                        }
                        observer.unobserve(entry.target); 
                    }
                });
            });

            observer.observe(counterphd);
            observer.observe(counterms);
            observer.observe(counteralumini);
        });
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        var menuIcon = document.querySelector('.menu-icon svg');
        var logoImage = document.querySelector('.logo img');

        if (scrollPercentage > 13) {
            navbar.style.backgroundColor = '#ffffff';
            navbar.style.borderBottomRightRadius = '20%';
            navbar.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
            menuIcon.style.fill = '#000000';
            logoImage.src = "images/logo_coloured.png";
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.borderBottomRightRadius = '0';
            navbar.style.boxShadow = 'none';
            menuIcon.style.fill = '#ffffff';
            logoImage.src = "images/logo.png";
        }
    });
    function toggleMenu() {
            var overlay = document.getElementById('overlay');
            overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';
        }

        function closeOverlay() {
            var overlay = document.getElementById('overlay');
            overlay.style.display = 'none';
        }

        function scrollToRegistration() {
            const registrationSection = document.querySelector('.registration');
            const offset = -150; 
        
            const topPosition = registrationSection.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }

        function scrollToFooter() {
            const registrationSection = document.querySelector('.footer');
            const offset = 0; 
        
            const topPosition = registrationSection.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
        
       