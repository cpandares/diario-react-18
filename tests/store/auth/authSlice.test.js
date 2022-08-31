import { authSlice } from "../../../src/store/auth/authSlice"
import { initialState } from "../../fixtures/authFixtures"



describe('Test auth slice', ()=>{

    test('debe regresar el initial state y llamarse "auth"', ()=>{
        
        expect(authSlice.name).toBe('auth')
        
        const state = authSlice.reducer(initialState, {})
        expect( state ).toEqual(initialState)
    })

})