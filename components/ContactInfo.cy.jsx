import React from 'react'
import ContactInfo from './ContactInfo'

describe('<ContactInfo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContactInfo />)
  })
})