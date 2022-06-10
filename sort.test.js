const sort =  require("./index")
describe("Verifacando se sort esta funcionando", () => {
    it("se a função esta reorganizando em ordem alfabetica",()=> {
      
      let  Entrada = ["zebra","cálice", "borboleata","helicoptero", "zebra"];
      let  esperado = [ 'borboleata', 'cálice', 'helicoptero', 'zebra', 'zebra' ]

      expect(sort(Entrada)).toEqual(esperado)
    })
})