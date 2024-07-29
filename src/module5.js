export function storePassword() {
    document.getElementById('save-button').addEventListener('click', function () {
        this.classList.add('cursor-progress');

        setTimeout(() => {
            this.classList.remove('cursor-progress');
            let myDivDevice = document.getElementById('device-name');
            const text = document.getElementById('password-div').innerText.trim();

            if (myDivDevice.value.trim() === '') {
                alert('Please enter a device name');
            } else if (text === 'Click on generate button' || text === 'No character sets selected') {
                alert('Click on the generate button to generate a password');
            } else {
                // Create an object to store the device name and password
                let deviceData = {
                    deviceName: myDivDevice.value.trim(),
                    password: text
                };

                // Store the object in local storage
                localStorage.setItem('deviceData', JSON.stringify(deviceData));
                alert('Device name and password saved successfully!');

                // Retrieve and display the data in the table
                let myTableBody = document.querySelector('#table tbody');
                let row = myTableBody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);

                let retrievedData = localStorage.getItem('deviceData');
                let deviceObj = JSON.parse(retrievedData);

                cell1.innerText = deviceObj.deviceName;
                cell2.innerText = deviceObj.password;

                // Add Tailwind CSS classes to the new row and cells
                row.classList.add('bg-gray-100', 'border-b', 'border-gray-200');
                cell1.classList.add('px-4', 'py-2');
                cell2.classList.add('px-4', 'py-2');
            }
        }, 1000);
    });
}

// View history
export function viewhistory() {
    document.getElementById('view-history').addEventListener('click', function () {
        let myhistorydiv = document.getElementById('2nddiv');
        this.classList.add('cursor-progress');
        setTimeout(() => {
            this.classList.remove('cursor-progress');
            myhistorydiv.classList.remove('invisible');
        }, 2000);
    });
}

// Delete history
export function deletehistory() {
    document.getElementById('delete-button').addEventListener('click', function () {
        this.classList.add('cursor-progress');
        localStorage.clear();
        setTimeout(() => {
            this.classList.remove('cursor-progress');
            removeCellData();
            alert('Local storage cleared successfully!');
        }, 2000);
    });
}

function removeCellData() {
    // Select all rows in the table
    let rows = document.querySelectorAll("#table tbody tr");

    // Iterate over each row and clear the cell contents
    rows.forEach(row => {
        row.querySelectorAll('td').forEach(cell => {
            cell.innerText = '';
        });
    });
}

