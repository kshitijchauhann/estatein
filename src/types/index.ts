export interface Property {
    id: number;
    image: string;
    title: string;
    description: string;
    beds: string;
    baths: string;
    type: string;
    price: string;
}

export interface Review {
    id: number;
    title: string;
    description: string;
    user: {
        name: string;
        location: string;
        image: string;
    };
}

export interface FAQ {
    id: number;
    question: string;
    description: string;
}

export interface Stat {
    label: string;
    value: string;
}

export interface Section {
    id: number;
    title: string;
    icon: React.ComponentType;
}

export interface User {
    id: number;
    username: string;
    email: string;
    created_at?: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}
