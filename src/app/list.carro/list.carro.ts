export class Carros {

    carros:Array<{}> = [

        {
            "placa":125,
            "marca":"toshiba",
            "modelo":"21",
            "nombre":"kevin stiven",
            "celular":3208921,
            "diaIngreso":"12/04/2020"
        },
        {
            "placa":251,
            "marca":"ferrari",
            "modelo":"07",
            "nombre":" stiven",
            "celular":3298921,
            "diaIngreso":"07/04/2020"
        },   {
            "placa":201,
            "marca":"ford",
            "modelo":"21",
            "nombre":"juan ",
            "celular":324951,
            "diaIngreso":"22/04/2020"
        },   {
            "placa":550,
            "marca":"toshiba",
            "modelo":"21",
            "nombre":"sebastian",
            "celular":3018000,
            "diaIngreso":"12/05/2020"
        }

    ]

    getCarros(){
        return  this.carros
    }

    addNewCarro(carro:{}){
        this.carros.push(carro)
    }

}