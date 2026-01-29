export const COLORS = {
    primary: '#703BF7',
    primaryHover: '#5d2ed1',
    background: {
        dark: '#0a0a0a',
        medium: '#141414',
        light: '#1a1a1a',
    },
    text: {
        primary: '#ffffff',
        secondary: '#a1a1aa', // zinc-400
        tertiary: '#71717a', // zinc-500
    },
    border: {
        default: '#27272a', // zinc-800
        light: '#3f3f46', // zinc-700
    },
} as const;

export const NAVIGATION_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Properties', href: '#properties' },
    { label: 'Services', href: '#services' },
] as const;

export const FOOTER_LINKS = [
    {
        title: 'Home',
        links: ['Hero Section', 'Features', 'Properties', 'Testimonials', "FAQ's"],
    },
    {
        title: 'About Us',
        links: ['Our Story', 'Our Works', 'How It Works', 'Our Team', 'Our Clients'],
    },
    {
        title: 'Properties',
        links: ['Portfolio', 'Categories'],
    },
    {
        title: 'Services',
        links: [
            'Valuation Mastery',
            'Strategic Marketing',
            'Negotiation Wizardry',
            'Closing Success',
            'Property Management',
        ],
    },
    {
        title: 'Contact Us',
        links: ['Contact Form', 'Our Offices'],
    },
] as const;

export const SOCIAL_LINKS = [
    { icon: 'FaFacebookF', label: 'Facebook', href: '#' },
    { icon: 'FaLinkedinIn', label: 'LinkedIn', href: '#' },
    { icon: 'FaTwitter', label: 'Twitter', href: '#' },
    { icon: 'FaYoutube', label: 'YouTube', href: '#' },
] as const;

export const SPACING = {
    section: {
        padding: 'px-6 md:px-12 lg:px-24',
        vertical: 'py-16',
    },
} as const;
