import { render, screen } from '@testing-library/react';
import TableRow from '../Containers/TableRow';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render table Row', () => {
    const intialprops = {
        id: 0,
        name: 'Test',
        phone: '9000000000',
        email: 'abcd@gmail.com',
        gender: " male",
        locations: 'Delhi',
        remove: () => { }
    }
    render(<Provider store={store}> <TableRow {...intialprops} /></Provider>)
    const linkElement = screen.getByText(/abcd@gmail.com/i);
    expect(linkElement).toBeInTheDocument();
});
