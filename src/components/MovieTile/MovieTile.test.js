import React from "react"
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import MovieTile from './MovieTile'

const movieMock = {
    id: 1,
    overview: 'overview',
    poster_path: 'poster_path',
}

describe('MovieTile', () => {
  it('renders correctly', () => {
    const movieTitle = shallow(<MovieTile movie={movieMock}/>)
    expect(shallowToJson(movieTitle)).toMatchSnapshot()
  })
})