import { async } from "q";

interface Response {
    data: any,
    error: any
}

export default class HTTP {
    static GET = async (url: string): Promise<Response> => {
        const promise = new Promise<Response>((resolve) => {
            fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                console.log('GET Request to url ' + url + ' response code', response.status)
                return response.json();

            }).then((responseJson) => {
                if (responseJson.error)
                    resolve({ data: null, error: responseJson })
                else
                    resolve({ data: responseJson, error: null })
            }).catch((error) => {
                resolve({ data: null, error: error })
            });
        })
        return promise;
    }

    static POST = async (url: string, data: any): Promise<Response> => {

        const promise = new Promise<Response>((resolve) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data,
            }).then((response) => {
                console.log('response', response)
                if (response.ok) {
                    return response.json();
                }
                return response.json();
            }).then((responseJson) => {
                if (responseJson.error)
                    resolve({ data: null, error: responseJson })
                else
                    resolve({ data: responseJson, error: null })
            }).catch((error) => {
                resolve({ data: null, error: error })
            });
        })
        return promise;
    }

    static sPOST = async () => {
        // When using token
    }

    static sGET = async () => {
        // When using token
    }
}