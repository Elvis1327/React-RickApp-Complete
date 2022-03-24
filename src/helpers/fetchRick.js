import axios from 'axios';

const requests = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/character?page=2',
    'https://rickandmortyapi.com/api/character?page=3',
    'https://rickandmortyapi.com/api/character?page=4',
    'https://rickandmortyapi.com/api/character?page=5',
    'https://rickandmortyapi.com/api/character?page=6'
]


export const fetchRick = async () => {
    const dataAleatory = requests[
        Math.floor(Math.random() * requests.length)
    ];
    const {data} = await axios.get(dataAleatory);
    return data;
}





