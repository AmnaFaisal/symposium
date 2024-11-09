window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var menuIcon = document.querySelector('.menu-option');
    var logoImage = document.querySelector('.logo img');
    var hamburgermenu = document.querySelector('.hamburgermenu');
    
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
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        var menuIcon = document.querySelector('.menu-icon svg');
        var logoImage = document.querySelector('.logo img');
        var hamburgermenu = document.querySelector('.hamburgermenu');


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
        
        function toggleMenu() {
            const menu = document.getElementById("dropdown-menu");
            menu.style.display = menu.style.display === "flex" ? "none" : "flex";
        }
        
       
              