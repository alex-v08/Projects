import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

    // Tests that the Navbar component renders with the correct background color and size. 
    it("test_navbar_renders_with_correct_background_color_and_size", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Navbar).prop('bg')).toEqual('light');
        expect(wrapper.find(Navbar).prop('expand')).toEqual('lg');
    });
    