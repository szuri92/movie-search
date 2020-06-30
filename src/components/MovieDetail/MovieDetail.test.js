import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import MovieDetail from './MovieDetail'

const mockFn = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      id: '1',
    }),
    useHistory: () => ({
        goBack: mockFn,
    })
}))

describe('MovieDetails', () => {

    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue([{
        id: 1,
        overview: 'overview',
        poster_path: 'poster_path',
    }])

    it('renders correctly', () => {
        const tree = shallow(<MovieDetail/>) 
        expect(shallowToJson(tree)).toMatchSnapshot()
    })

    it('renders correctly', () => {
        const tree = shallow(<MovieDetail/>) 
        const button = tree.find('span')
        button.simulate('click')
        expect(mockFn).toHaveBeenCalled()
    })
})

