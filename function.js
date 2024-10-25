/**
 * @param {'th'|'td'} tagname
 * @param {string} innerHTML
 * @param {HTMLElement} parentElement
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagname, innerHTML, parentElement)
{
    const elso = document.createElement(tagname);
    elso.innerHTML = innerHTML
    parentElement.appendChild(elso)
    return elso;
}

function createHTMLElement(tag,idd,parentElement) {
    const elso = document.createElement(tag)
    elso.id = idd
    parentElement.appendChild(elso)

}

function createHTMLElementparentid(tag, id, parentId){
    const masodik = document.getElementById(parentId)
    if (parentId != undefined){
        createHTMLElement(tag, id, masodik)
    }


}