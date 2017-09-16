describe('Tennis App',()=>{
describe('Player A get score',()=>{
it('echo "Love - Love "When game start',()=>{
    let app = new TennisApp()
    app.reset()
    let result = app.echo()

    expect(result).toBe('Love - Love')
})
})
})