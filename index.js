// fetch('./data.json')
// .then((res)=>res.json())
// .then((event)=>{
//     console.log(event);
// })
// .catch((error)=>{
//     console.log('error while fatching response',error);
// });

fetch('./jData.json')
    .then((res) => res.json())
    .then((event) => {
        const userList = document.getElementById('userList');
        event.users.forEach((user) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error('Error while fetching response', error);
    });