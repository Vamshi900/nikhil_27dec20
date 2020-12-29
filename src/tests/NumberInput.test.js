import { render, screen } from '@testing-library/react';
import NumberInput from '../components/NumberInput';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render table Row', () => {
    const intialprops = {
         intialValue :'9000',
         handleChange: () => { }
    }
    render(<Provider store={store}> <NumberInput {...intialprops} /></Provider>)
    const linkElement = screen.getByDisplayValue(/900/i);
    expect(linkElement).toBeInTheDocument();
});
