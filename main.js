let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

createHTMLElement('table', 'persontable', document.body);
createHTMLElementparentid('thead', 'personhead', 'persontable');
createHTMLElementparentid('tbody', 'personbody', 'persontable');

renderTableHeader();
renderTableBody(array);

const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const lastname = form.lastname;
    const firstname1 = form.firstname1;
    const firstname2 = form.firstname2;
    const married = form.married;
    const pet = form.pet;

    const newPerson = {
        firstname1: firstname1.value,
        firstname2: firstname2.value || undefined,
        lastname: lastname.value,
        married: married.checked,
        pet: pet.value
    };

    if (validateFields(form)) {
        array.push(newPerson);
        renderTableBody(array);
        form.reset();
    }
});

