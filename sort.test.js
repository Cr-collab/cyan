const sort =  require("./index")
describe("Verifacando se sort esta funcionando", () => {
    it("se a função esta reorganizando em ordem alfabetica",()=> {
      
      let  Entrada = ["zebra","cálice", "borboleata"];
      let  esperado = [ 'borboleata', 'cálice', 'zebra' ]

      expect(sort(Entrada)).toEqual(esperado)
    })
})