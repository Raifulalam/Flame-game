
// const check = document.getElementById('check');

// check.addEventListener('click', () => {
//     // Get values from input fields and convert to lowercase
//     let firstName = document.getElementById('firstName').value.toLowerCase().split("");
//     let secondName = document.getElementById('secondName').value.toLowerCase().split("");

//     // Save values to localStorage
//     localStorage.setItem('first', document.getElementById('firstName').value);
//     localStorage.setItem('second', document.getElementById('secondName').value);

//     if (firstName.length > 0 && secondName.length > 0) {
//         // Compute relationship
//         for (let i = 0; i < firstName.length; i++) {
//             if (secondName.indexOf(firstName[i]) !== -1) {
//                 secondName.splice(secondName.indexOf(firstName[i]), 1);
//             }
//         }
//         const difference = firstName.length + secondName.length;
//         const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];
//         const relation = flames[difference % 6];
//         document.getElementById('result').innerText = `Relationship: ${relation}`;

//     } else {
//         document.getElementById('result').innerText = `Please enter both names`;
//     }
// });
// window.addEventListener('load', () => {
//     const storedFirstName = localStorage.getItem('firstName');
//     const storedSecondName = localStorage.getItem('secondName');

//     if (storedFirstName) {
//         document.getElementById('firstName').value = storedFirstName;
//     }
//     if (storedSecondName) {
//         document.getElementById('secondName').value = storedSecondName;
//     }
// });


const check = document.getElementById('check');

// Function to compute relationship
const computeRelationship = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) !== -1) {
            b.splice(b.indexOf(a[i]), 1);
        }
    }
    const difference = a.length + b.length;
    const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];
    return flames[difference % 6];
};

check.addEventListener('click', () => {
    // Get values from input fields and convert to lowercase
    let firstName = document.getElementById('firstName').value.toLowerCase();
    let secondName = document.getElementById('secondName').value.toLowerCase();
    if (firstName && secondName) {
        // Compute relationship
        let a = firstName.split("");
        let b = secondName.split("");
        const relation = computeRelationship(a, b);
        // Retrieve existing data from localStorage
        let storedData = JSON.parse(localStorage.getItem('namePairs')) || [];

        // Save current pair
        storedData.push({ firstName, secondName, relation });
        localStorage.setItem('namePairs', JSON.stringify(storedData));



        // Display result
        document.getElementById('result').innerText = `Relationship: ${relation}`;

        // Optional: Display stored pairs
        const displayStoredPairs = () => {
            const list = document.getElementById('storedPairs');
            list.innerHTML = ''; // Clear existing list
            storedData.forEach(pair => {
                const listItem = document.createElement('li');
                // listItem.textContent = `First Name: ${pair.firstName}, Second Name: ${pair.secondName}`;
                listItem.textContent = `Relations:${pair.relation}`;
                list.appendChild(listItem);
            });
        };

        displayStoredPairs();

    } else {
        document.getElementById('result').innerText = `Please enter both names`;
    }
});

// Optional: Load and display stored pairs on page load
window.addEventListener('load', () => {
    const storedData = JSON.parse(localStorage.getItem('namePairs')) || [];
    const displayStoredPairs = () => {
        const list = document.getElementById('storedPairs');
        // list.innerHTML = ''; // Clear existing list
        storedData.forEach(pair => {
            const listItem = document.createElement('li');
            listItem.textContent = `First Name: ${pair.firstName}, Second Name: ${pair.secondName}, Relation: ${pair.relation}`;
            list.appendChild(listItem);
        });
    };

    displayStoredPairs();
});
