import { render, screen } from '@testing-library/react';
import App from './App';
// import { render, fireEvent, screen } from './test-utils';
import store from './store/store';
import { Provider } from 'react-redux';


test('renders app', () => {
    render(<Provider store={store}> <App /></Provider> )
const linkElement = screen.getByText(/Home/i);
expect(linkElement).toBeInTheDocument();
});
