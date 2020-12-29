import { render, screen } from '@testing-library/react';
import NewUserForm from '../Containers/NewUserForm';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render New User Form', () => {
 
    render(<Provider store={store}> <NewUserForm /></Provider>)
    const linkElement = screen.getByText(/Add User/i);
    expect(linkElement).toBeInTheDocument();
});
