import { render, screen } from '@testing-library/react';
import Home from '../Containers/Home';
import store from '../store/store';
import { Provider } from 'react-redux';


test('render table', () => {

    render(<Provider store={store}> <Home /></Provider>)
    const linkElement = screen.getByText(/Locations/i);
    const linkElement1 = screen.getByText(/Name/i);
    const linkElement2 = screen.getByText(/Email/i);
    const linkElement3 = screen.getByText(/Phone/i);
    const linkElement4 = screen.getByText(/Home Page/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
    expect(linkElement4).toBeInTheDocument();
});
