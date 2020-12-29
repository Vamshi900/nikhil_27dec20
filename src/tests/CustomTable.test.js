import { render, screen } from '@testing-library/react';
import Table from '../Containers/CustomTable';
// import { render, fireEvent, screen } from './test-utils';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render table', () => {

    render(<Provider store={store}> <Table /></Provider>)
    const linkElement = screen.getByText(/Locations/i);
    const linkElement1 = screen.getByText(/Name/i);
    const linkElement2 = screen.getByText(/Email/i);
    const linkElement3 = screen.getByText(/Phone/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
});
