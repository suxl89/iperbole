//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
/************************************************************************** INIZIO OPERAZIONI SULLE LISTE     **************************************************************************/
//************************************************************LE FUNZIONI SONO AUTO CONTROLLATE SUI PARAMETRI IN INPUT******************************************************************************************************************
//**************************************************************************************************************************************************************************************



/**
*
* any[] addObjToListByAttribute (obj: any, list: any[], attribute: string): any[]
* Aggiunge un oggetto ad una lista, se c'è l'attributo allora controlla che l'elemento non sia già nella lista
* facendo un controllo sul valore dell'attributo passato, altrimenti lo aggiunge a prescindere.
* Ritorna una nuova lista senza alterare quella vecchia.
*
* @param {any} obj è l'oggetto che che deve essere aggiunto (qualsiasi tipo)
* @param {any[]} list la lista a cui deve essere aggiunto l'oggetto (qualsiasi tipo)
* @param {String} attribute l'attributo su cui deve essere fatto il controllo (Stringa)
*
*/
function addObjToListByAttribute(obj, list, attribute) {
    var any_list = null;

    if (obj != null) {
        if (list != null && list.length > 0 && (attribute !== null || attribute !== '')) {
            any_list = clone(list);
            var obj_found = any_list.find(listElement => compareObjectByAttribute(listElement, obj, attribute));
            if (!obj_found) any_list.push(obj);
        } else {
            any_list.push(obj);
        }
    }

    return any_list;
}



/**
 *
 * any[] removeObjFromListByAttribute(obj: any, list: any[], attribute: string): any[]
 * rimuove un oggetto da un lista basandosi su un compare di un attributo che vuoi tu.
 * se trova l'atttributo lo elimina dalla lista.
 * Se attribute è null allora in quel caso lo ricerca e poi lo elimina come oggetto semplice.
 * Ritorna una nuova lista senza alterare quella vecchia.
 *
 * @param {any} obj oggetto da eliminare
 * @param {any[]} list lista da cui togliere l'elemento
 * @param {string} attribute attributo su cui si deve basare la ricerca
 *
 */
function removeObjFromListByAttribute(obj, list, attribute) {
    var any_list = [];

    if(list!=null && obj!=null){
        var index = -1;
        if (attribute !== null && attribute !== '') {
            any_list = this.clone(list);

            index = any_list.findIndex(
                e => this.compareObjectByAttribute(e, obj, attribute)
            );

        } else {
            index = list.indexOf(obj);
        }

        if (index > -1) {
            any_list.splice(index, 1);
        }
    }
    return any_list;
}



/**
 *
 * any[] mergeTwoListByObjAttribute(objsList: any[], list: any[], attribute: string): any[]
 * mergia due liste basandoti sull'attributo dell'oggetto desiderato.
 * Se trova l'atttributo ripetuto non aggiunge l' elemento della lista objslist a list
 * A meno che attribute è null allora in quel caso li aggiunge a prescindere.
 * Ritorna una nuova lista senza alterare quella vecchia.
 * 
 * @param {any[]} objsList lista nuova di oggetti de aggiungere alla lista già esistente
 * @param {any[]} list lista già esistente
 * @param {string} attribute attributo su cui fare il confronto
 *
 */
function mergeTwoListByObjAttribute(objsList, list, attribute) {


    var any_list = null;

    if (objsList != null && list != null && attribute != null && attribute != "") {

        any_list = clone(list);
        var condition = any_list.length > 0;

        objsList.map(
            key => {
                if (condition) {
                    let obj = any_list.find(listElement => compareObjectByAttribute(listElement, key, attribute));
                    if (!obj) any_list.push(key);
                } else {
                    any_list.push(key);
                }
            }
        )
    }
    console.log(any_list);
    return any_list;

}



/**
 *
 * obj getObjFromListByAttribute(attribute:string, list:any[], valueCheked:any): Promise<any>
 * Recupera un oggetto da una lista basandosi sul valore di un attributo.
 *
 * @param {string} attribute attributo da controllare
 * @param {any[]} list lista di oggetti
 * @param {any} valueCheked valore dell'attributo da controllare
 *
 */
function getObjFromListByAttribute(attribute, list, valueCheked) {
    if (list != null && attribute !== null && attribute !== '' && valueCheked !== null) {
        return list.find(o => o[attribute] === valueCheked);
    } else {
        return null;
    }
}



/**
 *
 * filterListByAttribute(attribute:string, list:any[], valueCheked:any): any []
 * ritorna una lista che contiene solo gli elementi di questa, che soddisfano una condizione su un attributo
 * Ritorna una nuova lista senza alterare quella precedente
 *
 * @param {string} attribute attributo degli oggetti da controllare
 * @param {any[]} list lista di oggetti
 * @param {any} valueCheked valore dell'attributo da confrontare
 *
 */
function filterListByAttribute(attribute, list, valueCheked) {
    var list_temp = [];
   
    if (list != null && attribute !== null && attribute !== '' && valueCheked !== null) {
        list.forEach(o => o[attribute] === valueCheked ? list_temp.push(o) : null);
    } else {
        return null;
    }

    return list_temp;
}



/**
 * setAll(list: any[], value : any, attribute : string) : any[]
 * Setta un attributo di ogni elemento di una lista ad un valore.
 * Ritorna una nuova lista senza alterare quella precedente
 *
 * @param {any} list
 * @param {any} value
 * @param {any} attribute
 */
function setAll(list, value, attribute) {

    var any_list = [];

    if (list != null && attribute !== '') {
        any_list = clone(list);
        any_list.forEach(o => o[attribute] = value)
    }
    return any_list;
}



/**
 * setValueByTwoList
 * Setto un valore specifico a tutti gli oggetti che hanno lo stesso valore di attributo tra due liste.
 * Ritorna una nuova lista senza alterare quella precedente.
 *
 * @param {any} list1
 * @param {any} list2
 * @param {any} attribute
 * @param {any} checked
 */
function setValueByTwoList(list1, list2, attribute, checked) {

    var any_list = [];
    if (list1 !== null && list2 !== null && attribute !== '') {
        any_list = this.clone(list1);
        any_list.forEach(o1 => {
            list2.forEach(o2 => o2[attribute] === o1[attribute]) ? o1[attribute] = checked : null;
        })
    }
    return any_list;

}



/**
 * Controlla se un elemento è presente in una lista.
 * Ritorna un boolean.
 * @param {any} list
 * @param {any} obj
 */
function listContains(list, obj) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}


//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
/**************************************************************************   FINE OPERAZIONI SULLE LISTE     **************************************************************************/
//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************