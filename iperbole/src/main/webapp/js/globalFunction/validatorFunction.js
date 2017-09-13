//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
//***********************************************************RITORNANO SOLO BOOLENAI E SONO AUTO CONTROLLATI SUI PARAMETRI IN INPUT/****************************************************
//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************


var thisFile = "validatorFunction.js";


/**
 * 
 * boolean existElementsInList(list, validator_list)
 * Ritorna un boolean che specifica se gli oggetti di una lista (list) corrispondono ad almeno uno dei valori contenuti
 * in un'altra lista (validator_list).
 * Ritorna false se nessun elemento compare nella lista di controllo, true altrimenti.
 *
 * @param reverse se reverse è true ritona il return è invertito
 * @param {any[]} list lista di oggetti
 * @param {any[]} validator_list listi di valori con cui vengono paragonati gli oggetti della lista
 *
 */
function existElementsInList(reverse, validator_list,...list ) {
    var is_confirmed = false;
    var obj_causa_errore = null;
    if (list != null && list.length > 0 && validator_list != null && validator_list.length > 0) {

        list.forEach(
            element => {
                if (listContains(validator_list, element)) {
                    is_confirmed = true;
                    printEccezioneMsg(thisFile + " > f() existElementsInList", [list, validator_list]);
                }
            }
        )

    } else {
        is_confirmed = true;
    }

    reverse ? is_confirmed = !is_confirmed : null;

    return is_confirmed;
}


/**
 * boolean compareObjectByAttribute(obj1, obj2, attribute)
 * Fa il compare di due oggetti qualsiasi. Nel caso in cui sono oggetti complessi puoi anche passare un attributo in modo da fare i controlli su un
 * particolare valore.
 * Ritorna true se sono uguali, false altrimenti.
 * 
 * @param {any} obj1 oggetto semplice o complesso
 * @param {any} obj2 oggetto semplice o complesso
 * @param {any} attribute passato nel caso in cui l'oggetto è complesso
 */

function compareObjectByAttribute(obj1, obj2, attribute) {
    var result = false;

    if (obj1 !== null && obj2 !== null) {
        if (attribute !== null && attribute !== '') {
            if (obj1[attribute] === obj2[attribute]) {
                result = true;
            } else {
                result = false;
            }
        } else {
            if (obj1 === obj2) {
                result = true;
            } else {
                result = false;
            }
        }
    }

    return result;
}




/**
 *
 * checkElementsByAttribute(attribute, list, valueCheked)
 * ritorna un boolean che specifica se N attributi (attribute_list),
 * appartenenti ad oggetti di una lista (list) corrispondono a dei valori contenuti
 * in un'altra lista (checked_list)
 *
 * @param {string} list lista di oggetti
 * @param {any[]} attribute_list lista di attributi appartenenti alla lista di oggetti
 * @param {any[]} checked_list lista di elementi che soddisfano i valori degli attributi
 *
 */
function checkElementsByAttribute(list, attribute_list, checked_list) {
    var is_confirmed = true;

    if (list !== null && attribute_list !== null && checked_list !== null && attribute_list.length > 0 && checked_list.length > 0) {

        list.forEach(
            element => {
                attribute_list.forEach(
                    attribute => {
                        if (!listContains(checked_list, element[attribute])) {
                            is_confirmed = false;
                        }
                    }
                )
            }
        )

    } else {
        is_confirmed = false;
    }
    return is_confirmed;
}