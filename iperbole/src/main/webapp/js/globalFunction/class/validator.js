//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
//***********************************************************CLASSE CHE PERMETTE DI ISTANZIARE UNA LISTA DI FUNZIONI DI VALIDAZIONI*****************************************************
//************************************************************PER POI ESEGUIRLE E RITORNARE UNO STATO DI VALIDAZIONE TRUE O FALSE*******************************************************
//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************

class validatore {

    constructor() {
        this.listaValidatori = []; //lista di funzioni
        this.validate = true;
    }

    //ESEGUE TUTTE LE FUZNIONI PASSATE DENTRO LA LISTA DI VALIDATORI
    checkValidation() {
        var validato = true;
        this.listaValidatori.forEach(function (v) {
            if (!v()) {
                validato = false;
            }
        })
        this.validate = validato;

        return this.validate;
    }

    //AGGIUNGE UNA SEGUENZE DI FUNZIONI ALLA LISTAVALIDATORI
    addValidatore(validatore) {
        this.listaValidatori.push(validatore);
        return this;
    }

    addValidatori(validatori) {
        this.listaValidatori = validatori;
        return this;
    }

}