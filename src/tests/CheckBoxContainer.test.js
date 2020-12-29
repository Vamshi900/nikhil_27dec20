import { render, screen } from '@testing-library/react';
import CheckBoxContainer from '../components/CheckBoxContainer';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render table Row', () => {
    const intialprops = {
         intialValue :'Delhi,Mumbai',
         handleToggle: () => { }
    }
    render(<Provider store={store}> <CheckBoxContainer {...intialprops} /></Provider>)
    const linkElement = screen.getByText(/Delhi/i);
    expect(linkElement).toBeInTheDocument();
});