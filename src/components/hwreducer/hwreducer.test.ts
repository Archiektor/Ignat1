import {v1} from 'uuid'
import {checkAgeAC, hwReducer, PartOfStateType, sortArrayAC} from './hwreducer';

describe('should work correct hwReducer', () => {
    let startState: PartOfStateType;
    beforeEach(() => {
        startState = [
            {id: v1(), name: 'Nikki', age: 28},
            {id: v1(), name: 'Anna', age: 11},
            {id: v1(), name: 'Ignat', age: 22},
            {id: v1(), name: 'Saitama', age: 15},
        ]
    });
    test('should pass task#1 sortUp', () => {

        const endState = hwReducer(startState, sortArrayAC('UP'));

        expect(endState.length).toBe(4);
        expect(endState[0].name).toBe('Anna');
        expect(endState[endState.length - 1].name).toBe('Saitama');
    })

    test('should pass task#2 sortDown', () => {

        const endState = hwReducer(startState, sortArrayAC('DOWN'));

        expect(endState.length).toBe(4);
        expect(endState[0].name).toBe('Saitama');
        expect(endState[endState.length - 1].name).toBe('Anna');
    })

    test('should pass task#3 checkAge', () => {

        const endState = hwReducer(startState, checkAgeAC(18));
        expect(endState.length).toBe(2);
    })

   describe("should throw Error", () => {
       test('should throw Error when arrived array is empty', () => {
        const startState: PartOfStateType = []

        expect(() => hwReducer(startState, checkAgeAC(18))).toThrowError()
    })

    test('should throw Error when type is unknown', () => {
        const startState: PartOfStateType = []

        const putSmth = (payload: any) => ({type: "PUT", payload});

        expect(() => hwReducer(startState, putSmth(18))).toThrowError()
    })
   })
})