/**
 * @param {'th'|'td'} tagname
 * @param {string} innerHTML
 * @param {HTMLElement} parentElement
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagname, innerHTML, parentElement) {
    const cell = document.createElement(tagname);
    cell.innerHTML = innerHTML;
    parentElement.appendChild(cell);
    return cell;
}

/**
 * @param {string} tag
 * @param {string} id
 * @param {HTMLElement} parentElement
 * @returns {HTMLElement}
 */
function createHTMLElement(tag, id, parentElement) {
    const element = document.createElement(tag);
    element.id = id;
    parentElement.appendChild(element);
    return element;
}

/**
 * @param {string} tag
 * @param {string} id
 * @param {string} parentId
 * @returns {HTMLElement}
 */
function createHTMLElementparentid(tag, id, parentId) {
    const parentElement = document.getElementById(parentId);
    if (parentElement) {
        return createHTMLElement(tag, id, parentElement);
    }
}

function renderTableHeader() {
    const thead = document.getElementById('personhead');
    const headerRow = createHTMLElement('tr', 'personthead', thead);

    createTableCell('th', 'Veznév', headerRow);
    const firstNameHeader = createTableCell('th', 'Kernev', headerRow);
    firstNameHeader.colSpan = 2;
    createTableCell('th', 'Házas-e', headerRow);
    createTableCell('th', 'Háziállat', headerRow);
}

/**
 * @param {Array} adat
 */
function renderTableBody(adat) {
    const tablebody = document.getElementById('personbody');
    tablebody.innerHTML = ''; 

    for (const person of adat) {
        const row = createHTMLElement('tr', '', tablebody);
        
        createTableCell('td', person.lastname, row);
        const firstNameCell = createTableCell('td', person.firstname1, row);
        
        if (person.firstname2) {
            createTableCell('td', person.firstname2, row);
        } else {
            firstNameCell.colSpan = 2;
        }

        createTableCell('td', person.married ? 'igen' : 'nem', row);
        createTableCell('td', person.pet, row);

        row.addEventListener('click', function () {
            const selected = tablebody.querySelector('.selected');
            if (selected) selected.classList.remove('selected');
            row.classList.add('selected');
        });
    }
}

/**
 * @param {HTMLFormElement} form
 */
function clearErrors(form) {
    const errorFields = form.querySelectorAll('.error');
    for (let errorField of errorFields) {
        errorField.innerHTML = '';
    }
}

/**
 * @param {HTMLInputElement} element
 * @param {string} errorMessage
 * @returns {boolean}
 */
function validateElement(element, errorMessage) {
    if (!element.value) {
        const errorField = element.parentElement.querySelector('.error');
        errorField.innerHTML = errorMessage;
        return false;
    }
    return true;
}

/**
 * @param {HTMLFormElement} form
 * @returns {boolean}
 */
function validateFields(form) {
    clearErrors(form);
    const lastNameValid = validateElement(form.lastname, "Kötelező vezetéknév");
    const firstNameValid = validateElement(form.firstname1, "Kötelező keresztnév");
    const petValid = validateElement(form.pet, "Kötelező háziállat");

    return lastNameValid && firstNameValid && petValid;
}