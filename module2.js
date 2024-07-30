// Import functions from other modules
import { randompassword, generatePassword } from './module3.js';
import { copyText } from './module4.js';

// Function to handle password generation on button click
export function generateaction() {
    console.log('generateaction called');
    const button = document.getElementById('generatebutton');
    if (button) {
        button.addEventListener('click', function() {
            console.log('Button clicked');
            this.classList.add('cursor-progress');
        
            // Wait for 2 seconds (corrected from 3 seconds in the description)
            setTimeout(() => {
                // Remove the classes after 2 seconds
                this.classList.remove('cursor-progress');
                generatePassword();
            }, 2000); // Changed to 2000 ms to match comment
        });
    } else {
        console.error('Button with id "generatebutton" not found');
    }
}

// Function to handle copying of generated password
export function copied() {
    console.log('copied');
    const copybutton = document.getElementById('copy-button');
    if (copybutton) {
        copybutton.addEventListener('click', function() {
            console.log('copy button clicked');
            this.classList.add('cursor-progress');
            
            setTimeout(() => {
                this.classList.remove('cursor-progress');
                
                
                const text = document.getElementById('password-div').innerText
                if (text === 'Click on generate button' || text === 'No character sets selected') {
                    alert('Click on the generate button to generate a password');
                } else {
                    copyText();
                }
            }, 2000);
        });
    } else {
        console.error('Button with id "copy-button" not found');
    }
}

