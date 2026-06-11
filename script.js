/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    // 1. Handle Hamburger Menu Toggle (Task 1 Requirement)
    var hamburger = document.getElementById('hamburger-icon');
    var navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Handle On-Page Search (Task 2 Requirement)
    var searchInput = document.getElementById('site-search');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            var filter = searchInput.value.toLowerCase();
            var cards = document.querySelectorAll('.sport-card');

            for (var i = 0; i < cards.length; i++) {
                var text = cards[i].textContent.toLowerCase();
                if (text.indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
        });
    }

    // 3. Simple Visitor Counter (Task 1 Requirement)
    var counterDisplay = document.getElementById('visitor-count');
    if (counterDisplay) {
        var visits = localStorage.getItem('page_view');
        if (visits) {
            visits = parseInt(visits, 10) + 1;
        } else {
            visits = 1;
        }
        localStorage.setItem('page_view', visits);
        counterDisplay.innerHTML = visits;
    }
});




