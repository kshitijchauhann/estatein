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
