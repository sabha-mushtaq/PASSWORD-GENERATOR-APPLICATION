# Password Generator

A web-based password generator that allows users to create secure passwords based on selected criteria and manage these passwords. This application uses HTML, CSS (including Tailwind CSS for styling), and vanilla JavaScript.

## Features

- **Login Simulation**: Simulates a login process with a visual effect.
- **Password Generation**: Generates random passwords based on user-selected criteria (uppercase, lowercase, numbers, symbols).
- **Password Copying**: Allows users to copy the generated password to the clipboard.
- **Password Storage**: Saves the generated password along with a device name to the browser's local storage.
- **View History**: Displays the stored passwords and associated device names.
- **Delete History**: Clears all stored passwords from local storage.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS & Tailwind CSS**: Styling the application with modern, utility-first CSS.
- **JavaScript**: Core logic for password generation, event handling, and local storage management.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. If not, you can download and install them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/sabha-mushtaq/PASSWORD-GENERATOR-APPLICATION/tree/main
    cd password-generator
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Install Tailwind CSS**:
    Install Tailwind CSS and its dependencies:
    ```bash
    npm install -D tailwindcss
    ```

4. **Initialize Tailwind CSS**:
    Create a `tailwind.config.js` file:
    ```bash
    npx tailwindcss init
    ```

5. **Configure Tailwind**:
    Update your `tailwind.config.js` file to include your template paths:
    ```javascript
    module.exports = {
      content: [
        "./*.{html,js}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

6. **Add Tailwind to Your CSS**:
    Create a CSS file (e.g., `styles.css`) and add the Tailwind directives and custom styles:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Custom styles using Tailwind's @apply directive */
    .active {
      @apply bg-sky-700;
    }
    ```

7. **Build Your CSS**:
    Build your CSS file using Tailwind:
    ```bash
    npx tailwindcss -i ./styles.css -o ./output.css --watch
    ```

8. **Include the Generated CSS**:
    In your HTML files, link to the generated CSS file (`output.css`):
    ```html
    <link href="output.css" rel="stylesheet">
    ```

### Running the Application

Open your HTML file in a web browser to see the application in action. You can interact with the password generator, copy passwords, and manage saved passwords.

## Usage

- **Login Simulation**: Click the login button to simulate a login process.
- **Generate Password**: Select the desired criteria and click the generate button to create a new password.
- **Copy Password**: Click the copy button to copy the generated password to the clipboard.
- **Store Password**: Enter a device name and click the save button to store the password in local storage.
- **View History**: Click the view history button to display all stored passwords.
- **Delete History**: Click the delete button to clear all stored passwords from local storage.

## Future Enhancements

- Implement a backend to securely store passwords.
- Add user authentication and account management features.
- Improve the UI/UX with more interactive elements and animations.



## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## Contact

For any questions or inquiries, feel free to contact [techexpert723@gmail.com].
