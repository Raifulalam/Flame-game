const check = document.getElementById('check');
let data = [];
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
    let firstName = document.getElementById('firstName').value.trim().toLowerCase();
    let secondName = document.getElementById('secondName').value.trim().toLowerCase();
    if (firstName && secondName) {
        // Compute relationship
        let a = firstName.split("");
        let b = secondName.split("");
        const relation = computeRelationship(a, b);
        // Retrieve existing data from localStorage
        let storedData = JSON.parse(localStorage.getItem('namePairs')) || [];
        data.push(storedData);

        // Save current pair
        storedData.push({ firstName, secondName, relation });
        localStorage.setItem('namePairs', JSON.stringify(storedData));



        // Display result
        document.getElementById('result').innerText = `Relationship: ${relation}`;

        // Optional: Display stored pairs
        // const displayStoredPairs = () => {
        //     const list = document.getElementById('storedPairs');
        //     list.innerHTML = ''; // Clear existing list
        //     storedData.forEach(pair => {
        //         const listItem = document.createElement('li');
        //         listItem.textContent = `First Name: ${pair.firstName}, Second Name: ${pair.secondName},Relations:${pair.relation}`;
        //         // listItem.textContent = ``;
        //         list.appendChild(listItem);
        //     });
        // };

        // displayStoredPairs();

    } else {
        document.getElementById('result').innerText = `Please enter both names`;
    }
});

// Optional: Load and display stored pairs on page load
// window.addEventListener('load', () => {
//     const storedData = JSON.parse(localStorage.getItem('namePairs')) || [];
//     // const displayStoredPairs = () => {
//     //     const list = document.getElementById('storedPairs');
//     //     // list.innerHTML = ''; // Clear existing list
//     //     storedData.forEach(pair => {
//     //         const listItem = document.createElement('li');
//     //         listItem.textContent = `First Name: ${pair.firstName}, Second Name: ${pair.secondName}, Relation: ${pair.relation}`;
//     //         // listItem.textContent = `Relation: ${pair.relation}`
//     //         list.appendChild(listItem);
//     //     });
//     // };

//     displayStoredPairs();
// });
