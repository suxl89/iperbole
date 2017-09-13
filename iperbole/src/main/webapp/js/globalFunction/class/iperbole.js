//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************
//***********************************************************CLASSE CHE PERMETTE DI ESEGUIRE LA CATENA:VALIDAZIONE->SUCCESS->ERROR->RUN()***********************************************
//**************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************


class iperbole{
    
    constructor() {
        this.validatore;
        this.funzioneSuccesso;
        this.funzioneErrore;
    }

    //setta i validatori = una seguenza di funzioni che ritornano true o false
    setValidator(validatore_functions) {
        this.validatore = new validatore();
        this.validatore.addValidatore(validatore_functions);
        return this;
    }

    setValidatorList(validator_functions_list) {
        this.validatore = new validatore();
        this.validatore.addValidatori(validator_functions_list);
        return this;
    }

    //se il validatore ritorna true a tempo di run() esegue questa funzione
    ifSuccess(fsucc) {
        this.funzioneSuccesso = fsucc;
        return this;
    }

    //se il validatore ritorna false a tempo di run() esegue questa funzione
    ifError(ferr) {
        this.funzioneErrore = ferr;
        return this;
    }

    //esegue la catena
    run() {
        applyIfValidate(
            this.validatore,//dovevamo passare l'oggetto non la funzione dell' oggetto altirmenti lui si fa una copia di una fuzniona e passa quello senza il contesto della classe- > this era null
            this.funzioneSuccesso,
            this.funzioneErrore
        )
    }
}