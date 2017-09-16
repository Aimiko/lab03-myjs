function TennisApp(){
    let playerAScore = 0
    let playerBScore = 0
    const scoreString = ['Love','Fiteen','Thirthy','Forthy']
    this.reset = () => {
        playerAScore = 0
        playerBScore = 0 

}
this.echo = () => {
    if (playerAScore > 3){
        return 'Player A wins game'
    }
    {
        if (playerBScore >3){
            return 'Player B wins game'
        }
    }
    return `${scoreString[playerAScore]} - ${scoreString[playerBScore]}`
}
this.playerAGetScore = () => {
    playerAScore++
}
{
    this.playerBGetScore = () => {
        playerBScore++
    }
}
}
describe('Tennis App',()=>{
    describe('Player A get score',()=>{
    
        let app 
         function repeatPlayerAGetScore(number){
             for(let i =0;i < number; i++){
                 app.playerAGetScore()
             }
         }
        beforeEach(()=>{
         app = new TennisApp()
         app.reset()
    
    })
        it('echo "Love - Love "When game start',()=>{
            let result = app.echo()

            expect(result).toBe('Love - Love')
        })

it('should echo "Fiteen - Love"When score is 15-0',()=>{
   repeatPlayerAGetScore(1)
   let result =app.echo()

    expect(result).toBe('Fiteen - Love')
})
it('should echo "Thirthy - Love"When score is 30=0',()=> {
    repeatPlayerAGetScore(2)
    let result = app.echo()

expect(result).toBe('Thirthy - Love')
})
it('should echo "Forthy - Love"When score is 40=0',()=> {
  repeatPlayerAGetScore(3)
    let result = app.echo()

expect(result).toBe('Forthy - Love')
})
it('should echo "Player A wins game"When player A gets next score at 40-0',()=> {
 repeatPlayerAGetScore(4)
    let result = app.echo()

    expect(result).toBe('Player A wins game')
    })
})
describe('When player B get score',() => {
    let app

    function repeatPlayerBGetScore(number){
        for(let i =0; i< number;i++){
            app.playerBGetScore()
        }
    }
    beforeEach(() => {
        app = new TennisApp()
        app.reset()
    })
    it('should echo "Love - Love"When game starts',()=>{
        let result = app.echo()

        expect(result).toBe('Love - Love')
    })
    it('should echo "Love - Fiteen"When score is 0-15',()=>{
      repeatPlayerBGetScore(1)
      let result = app.echo()
      
      expect(result).toBe('Love - Fiteen')
    })
    it('should echo "Love - Thirthy"When score is 0-30',()=>{
      repeatPlayerBGetScore(2)
      let result = app.echo()
      
      expect(result).toBe('Love - Thirthy')
    })
    

})

})
