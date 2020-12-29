import { render, screen } from '@testing-library/react';
import CheckBox from '../components/CheckBox';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render table Row', () => {
    const intialprops = {
        type : 'checkbox',
        name: 'Delhi',
        checked: false,
        onChange: () => { }
    }
    render( <CheckBox {...intialprops} />)
    const linkElement = screen.getByTitle(/Delhi/i);
    expect(linkElement).toBeInTheDocument();
});
