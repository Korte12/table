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

const table = document.createElement('table')
document.body.appendChild(table)

const tablehead = document.createElement('thead')
table.appendChild(tablehead)

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

const th = document.createElement('th')
tableheadrow.appendChild(th)

const th2 = document.createElement('th')
tableheadrow.appendChild(th2)

const thazas = document.createElement('th')
tableheadrow.appendChild(thazas)

const thallat = document.createElement('th')
tableheadrow.appendChild(thallat)

th.innerHTML="Vezetéknév"
th2.innerHTML="Keresztnév"

thazas.innerHTML="Házas-e"
thallat.innerHTML="Házi állat"

th2.colSpan = 2



const tablebody = document.createElement('tbody')
table.appendChild(tablebody)
for(const person of array){
    const tr = document.createElement('tr')
    const lastname = document.createElement('td')
    tablebody.appendChild(tr)
    tr.appendChild(lastname)
    lastname.innerHTML = person.lastname

    const firstname = document.createElement('td')
    tablebody.appendChild(tr)
    tr.appendChild(firstname)
    firstname.innerHTML = person.firstname1

    if(person.firstname2===undefined){
        firstname.colSpan = 2
    }
    else{
        const firstname2 = document.createElement('td')
        firstname2.innerHTML = person.firstname2
        tr.appendChild(firstname2)

    }

    const married = document.createElement('td')
    tablebody.appendChild(tr)
    tr.appendChild(married)
    married.innerHTML = person.married

    if (person.married === true) {
        married.innerHTML = "igen"
    }
    else {
        married.innerHTML = "nem"
    }

    const pet = document.createElement('td')
    tablebody.appendChild(tr)
    tr.appendChild(pet)
    pet.innerHTML = person.pet
    
    
    tablebody.appendChild(tr)
    




    tr.addEventListener('click', function(e)
    {
        let valasz = tablebody.querySelector('.selected')

        if (valasz != undefined)
        {
            valasz.classList.remove('selected');
        }
        
        console.log(e); 
        e.currentTarget.classList.add('selected');

        
    })

    
    

}
const form = document.getElementById("form")
form.addEventListener('submit', 
    function(e) 
    {
        e.preventDefault()
        let lastn = document.getElementById('lastname')
        let firstn1 = document.getElementById('firstname1')
        let firstn2 = document.getElementById('firstname2')
        let marry = document.getElementById('married')
        let pett = document.getElementById('pet')

        const lastnValue = lastmane.value
        const firstn1Value = firstname1.value
        const firstn2Value = firstname2.value
        const marryValue = married.check
        const pettValue = pet.value

        
    })


