interface Name {
    title: string;
    first: string;
    last: string;
}

interface Street {
    number: number;
    name: string;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: Coordinates;
    timezone: {
        offset: string;
        description: string;
    };
}

interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    picture: Picture;
    nat: string;
}

export interface Users {
    results: User[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}
