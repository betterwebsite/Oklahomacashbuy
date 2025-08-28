module.exports = {
    name: "Oklahoma Cash Buy",
    email: "loganmayberry69@yahoo.com",
    phoneForTel: "573-344-6777",
    phoneFormatted: "(573) 344-6777",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Tulsa",
        state: "OK",
        zip: "74133",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://oklahomacashbuy.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
