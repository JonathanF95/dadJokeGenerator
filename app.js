const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


//Using Axios
async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        },
    };

    try {
        const response = await axios.get('https://icanhazdadjoke.com', config);
        jokeEl.innerHTML = response.data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error.message);
    }
}


//Using async/await


// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: "application/json"
//         },
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config)

//     const data = await res.json();

//     jokeEl.innerHTML = data.joke

// }

//Using fetch .then()


// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: "application/json"
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }

