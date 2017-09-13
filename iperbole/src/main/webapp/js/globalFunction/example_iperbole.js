//******************************************************************
//ESEMPIO IPERBOLE
//******************************************************************
var o1 = { nome: 'leo', cognome: 'castano', eta: '27' };
var o2 = { nome: 'marco', cognome: 'castano', eta: '23' };
var attribute = "nome";
var objList = [];
var list = [];

objList.push(o1);
list.push(o2);
    
//list = null;
doInTryCatch(function () {
    new iperbole()
    //.setValidator(function () { return (existElementsInList(true, Standard_list.INVALID_VALUE, objList, list, attribute)) /*&& false /*&& altra funzione;*/ }) //uso questa sintassi se voglio fare && or di più function
    .setValidatorList([existElementsInList.bind(this, true, Standard_list.INVALID_VALUE, objList, list, attribute), ritornatrue.bind(this)]) //qui metto i validatori che voglio siano rispettati (controlli esterni)
    .ifSuccess( mergeTwoListByObjAttribute.bind(this,objList, list, attribute) )//se il validatore ritorna true esegue questa fuznione (che avrà i suoi controlli interni)
    .ifError( lunchExceptionError.bind(this, Msg_error.ARGUMENTS_ERROR) )       //se il validatore ritorna false esegue questa fuznione con questa stringa di errore
    .run()
})

function ritornatrue() { return true; }
function ritornafalse() { return false; }


/*
try {
    var obj_err = null;
    if (objList != null && objList != "") {
        obj_err = objList;
    }

    if (list != null && list != "") {
        obj_err = list;
    } 
        
    if (attribute != null && attribute != "") {
        obj_err = attribute;
    }

    if(obj_err==null){
        mergeTwoListByObjAttribute(objList, list, attribute);
    } else {
        console.log("Errore causato da:"+obj_err);
        throw Msg_error.ARGUMENTS_ERROR; return;
    }
} catch (e) {
    console.log(e);
}

*/

//******************************************************************