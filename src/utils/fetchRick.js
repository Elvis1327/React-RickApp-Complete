import axios from 'axios';

const requests = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/character?page=2',
    'https://rickandmortyapi.com/api/character?page=3',
    'https://rickandmortyapi.com/api/character?page=4',
    'https://rickandmortyapi.com/api/character?page=5',
    'https://rickandmortyapi.com/api/character?page=6'
]

// Get aleatory API
export const fetchRick = async () => {
    const dataAleatory = requests[
        Math.floor(Math.random() * requests.length)
    ];
    const {data} = await axios.get(dataAleatory);
    return data;
};

// Get user by Name
export const getUserByName = (name, rickData) => {
    const info = rickData.filter(resp => resp.name.toLowerCase().includes(name.toLowerCase()))
    if(name.length === 0){
        return rickData;
    }else{
        return info;
    }
};





