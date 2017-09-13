//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
/**************************************************************************   INIZIO OPERAZIONI GENERICHE     **************************************************************************/
//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************



/**
* object clone(object)
* Clona un oggetto tornando una copia di quello passato
* 
* @param {any} object oggetto da clonare
*
*/
function clone(object) {
        if(object) return JSON.parse(JSON.stringify(object));
}



/**
* void applyIfValidate(validatore, f_succ, f_err)
*
* esegue la funzione f_succ se il validatore.checkValidation è true, f_err se il validatore.checkValidation è false
*
* @param {any} validator oggetto di tipo validatore
* @param {any} f_succ funzione success ()
* @param {any} f_err funzione errore ();
*/    
function applyIfValidate(validatore, f_succ, f_err) {

    if (validatore.checkValidation())
    {
        f_succ();
        
    } else {
        f_err();
    }

}



/**
 * void doInTryCatch(f)
 *
 * Esegue una funzione all'interno di un try catch controllato per la gestione degli errori
 *
 * @param {any} f funzione da eseguire nel try catch
 *
 */
function doInTryCatch(f) {
    try {

        f()

    } catch (e) {
        console.log(e);
    }
}



/**
 * any[] createList()
 *
 * Ritorno una lista contenente tutti gli elementi che sono stati passare come argomento della funzione.
 * 
 */
function createList() {

    var l = [];
    for (var i = 0; i < arguments.length; i++){
        l.push(arguments[i]);
    };
    return l;
}



/**
 * void printEccezioneMsg(from, objWithError)
 *
 * Stampa in cosnole un messaggio di eccezione e l'oggetto che l'ha causato
 * 
 * @param {any} from nome del js dove si è verificata l'eccezione'
 * @param {any} objWithError oggetto che ha causato l'ecezione
 */
function printEccezioneMsg(from, objWithError){

    console.log("***********************************************************************************************");
    console.log( from + " il seguente oggetto ha causato un eccezione:");
    console.log(objWithError);
    console.log("***********************************************************************************************");
}
//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
/**************************************************************************   FINE OPERAZIONI GENERICHE     ****************************************************************************/
//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************