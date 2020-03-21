import React from 'react'
import renderer from 'react-test-renderer'

import { NavBar } from '../NavBar'

describe('<NavBar />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<NavBar.test {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
