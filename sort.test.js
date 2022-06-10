const arrangeWordListInAlphabeticalOrder =  require("./index")
describe("should be able to se", () => {
    it("should it be possible to arrange a vector based on alphabetical order",()=> {
      
      let  deposit = ["zebra","cálice", "borboleata", "helicoptero", "zebra"];
      let  witdraw = [ 'borboleata', 'cálice',"helicoptero" ,'zebra', "zebra" ]

      expect(arrangeWordListInAlphabeticalOrder(deposit)).toEqual(witdraw)
    })
})