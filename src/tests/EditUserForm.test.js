import { render, screen } from '@testing-library/react';
import EditUserForm from '../Containers/EditUserForm';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render Edit User Form', () => {

    render(<Provider store={store}> <EditUserForm match={{ params: { userId: 2 } }} /></Provider>)
    const linkElement = screen.getByText(/Edit User/i);
    expect(linkElement).toBeInTheDocument();
});
