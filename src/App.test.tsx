import React from 'react'
import {mount, shallow} from 'enzyme'
import App from './App'


describe('Render App Component' , ()=>{
   const container = shallow(<App/>);

   it('Should Render a Div' , ()=>{
   
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })
})
