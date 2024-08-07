import images from './images';

const Menu = [
    {
        text: 'About',
        link: '#',
    },
    {
        text: 'Call For Artists',
        link: '#call',
    },
    {
        text: 'Events',
        link: '#services',
    },
    {
        text: 'Winners spotlight',
        link: '#team',
    },

    {
        text: 'News & Media',
        link: '#',
    },
    {
        text: 'Gallary',
        link: '#',
    },
    {
        text: 'Register',
        link: '#',
    }
];
const ServicesData = [
    {
        titleone: 'Art ',
        titletwo: 'Exhibition',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Art ',
        titletwo: 'Workshops',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Panel ',
        titletwo: 'Discussions',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Live ',
        titletwo: 'Performances',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'Awards ',
        titletwo: 'Ceremony',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Networking ',
        titletwo: 'Sessions',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
        link: '#',
    },
    {
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
        link: '#',
    },
    {
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'Announcement and Call for Submissions (July 19, 2024) ',
        description: 'The official announcement of the contest will be made. Artists are invited to participate, with the call for submissions publicized through various channels including our website, social media, press releases, and partner organizations.',
    },
    {
        title: 'Submission Period (July 20 - August 15, 2024)',
        description: 'Artists have a two-week window to submit their entries. Visit our competition website to fill out the submission form, provide your contact information, a brief description of your artwork, and the chosen medium of expression. Multiple entries across different mediums are welcome.',
    },
    {
        title: 'Evaluation and Judging (August 16 - August 25, 2024)',
        description: 'After submissions close, artworks will be accessible to the public for viewing and voting online. The public will select their favorite pieces, followed by an expert jury panel evaluating the top-voted entries based on artistic merit, environmental significance, message clarity, and technical proficiency.',
    },
    {
        title: 'Award Announcement (September 7, 2024)',
        description: 'Winners will be announced on the International Day of Clean Air for Blue Skies at a ceremony held at the Embassy of the Republic of Azerbaijan. Winners will be notified in advance and invited to the prestigious event to receive their awards.',
    },
   
];

const Team = [
    {
        name: 'Yared Gebre',
        position: 'Painter',
        info: 'Participating with a series of paintings that explore the effects of climate change on natural landscapes. With over 10 years of artistic experience, Yared uses vibrant colors to depict environmental transformations and advocate for sustainability.',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Desta Girma',
        position: 'Singer-Songwriter',
        info: 'Entering the contest with original compositions that address environmental issues through music. With 7+ years in the industry, Desta’s songs blend traditional and modern elements to raise awareness and inspire action for a sustainable future.',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Mekonnen Tadese',
        position: 'Photographer',
        info: 'Showcasing a collection of photographs that capture the impact of pollution and habitat destruction. With over 5 years of experience, Mekonnen’s work highlights critical environmental issues and promotes conservation through striking visual storytelling.',
        foto: images.team03,
        linkedin: '#',
    },
    // {
    //     name: 'Emily Johnson',
    //     position: 'PPC Manager',
    //     info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    //     foto: images.team04,
    //     linkedin: '#',
    // },
    // {
    //     name: 'Brian Williams',
    //     position: 'Social Media Specialist',
    //     info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    //     foto: images.team05,
    //     linkedin: '#',
    // },
    // {
    //     name: 'Sarah Kim',
    //     position: 'Content Creator',
    //     info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    //     foto: images.team06,
    //     linkedin: '#',
    // },

];

const Testimonials = [
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
];
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };