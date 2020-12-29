import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import reducer from './reducers/tableSlice'
import store from './store/store';

function render(
  ui,
  {
    initialState,
    store,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
      console.log(children);
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render