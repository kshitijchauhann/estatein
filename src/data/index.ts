import type { Property, Review, FAQ, Stat } from '@/types';

export const PROPERTIES: Property[] = [
    {
        id: 1,
        image: "/building1.png",
        title: "Seaside Serenity Villa",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        beds: "4-Bedroom",
        baths: "3-Bathroom",
        type: "Villa",
        price: "$550,000",
    },
    {
        id: 2,
        image: "/building2.png",
        title: "Metropolitan Haven",
        description:
            "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
        beds: "2-Bedroom",
        baths: "2-Bathroom",
        type: "Villa",
        price: "$550,000",
    },
    {
        id: 3,
        image: "/building3.png",
        title: "Rustic Retreat Cottage",
        description:
            "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
        beds: "3-Bedroom",
        baths: "3-Bathroom",
        type: "Villa",
        price: "$550,000",
    },
];

export const FAQS: FAQ[] = [
    {
        id: 1,
        question: "How do I search for properties on Estatein?",
        description:
            "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
        id: 2,
        question: "What documents do I need to sell my property through Estatein?",
        description:
            "Find out about the necessary documentation for listing your property with us.",
    },
    {
        id: 3,
        question: "How can I contact an Estatein agent?",
        description:
            "Discover the different ways you can get in touch with our experienced agents.",
    },
];

export const REVIEWS: Review[] = [
    {
        id: 1,
        title: "Exceptional Service",
        description:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        user: {
            name: "Wade Warren",
            location: "USA, California",
            image: "/profile1.png", // Placeholder
        },
    },
    {
        id: 2,
        title: "Efficient and Reliable",
        description:
            "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        user: {
            name: "Emelie Thomson",
            location: "USA, Florida",
            image: "/profile2.png", // Placeholder
        },
    },
    {
        id: 3,
        title: "Trusted Advisors",
        description:
            "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were truly impressive. Thank you for your support!",
        user: {
            name: "John Mans",
            location: "USA, Nevada",
            image: "/profile3.png", // Placeholder
        },
    },
];

export const STATS: Stat[] = [
    { label: "Happy Customers", value: "200+" },
    { label: "Properties For Clients", value: "10k+" },
    { label: "Years of Experience", value: "16+" },
];
