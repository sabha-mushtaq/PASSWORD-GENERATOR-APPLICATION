import { loginaction } from './module1.js';
import { generateaction } from './module2.js';
import { copied } from './module2.js';
import{storePassword,viewhistory,deletehistory} from './module5.js'
// Add changes to generate button
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('loginbutton')) {
        loginaction();
    }
    if (document.getElementById('generatebutton')) {
        generateaction();

    }
    if (document.getElementById('copy-button')) {
        copied();
    }
    if (document.getElementById('save-button')) {
        storePassword();
    }
    if (document.getElementById('view-history')) {
        viewhistory();
    } 
    if (document.getElementById('delete-button')) {
        deletehistory();
    } 

});

// Utility function to toggle 'active' class on click
function toggleActiveClass(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    toggleActiveClass('inlcl');
    toggleActiveClass('inlc');
    toggleActiveClass('inn');
    toggleActiveClass('ins');
});






