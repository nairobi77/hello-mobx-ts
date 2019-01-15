import axios from 'axios';

export interface INameData {
    surname: string;
    name: string;
    patronymic: string;
    gender: string;
}

export interface NameSuggestion {
    value: string;
    unrestricted_value: string;
    data: INameData;
}

export async function getSuggestions(guery: string): Promise<Array<NameSuggestion>> {
    const data = {
        query: guery,
        parts: ["NAME"],
        count: 10
    };

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token 6cb3e77f96456594b423c6e2b7781ad43aef6b7e'
        }
    };

    const result = axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio', data, config)
        .then(response => {return response.data.suggestions})
        .catch(e => {console.log('error ' + e); return []});
    return result;
}
