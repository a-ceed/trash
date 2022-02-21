const ROOT_COMPANY = document.getElementById('company-container');
const ROOT_VOITE = document.getElementById('vote-container');


//voite
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let CONSTNAME = params.companyname; // "some_value"

//