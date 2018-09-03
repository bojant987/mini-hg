const baseUrl = 'https://c.tutti.ch/gallery';

const getImageUrl = (subject, thumbName) => {
    const filteredSubject = subject.replace(' ', '-').replace('%', '');

    return `${baseUrl}/${filteredSubject}-${thumbName}`;
};

export default getImageUrl;