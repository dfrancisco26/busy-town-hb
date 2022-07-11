import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/truck/i);
  expect(linkElement).toBeInTheDocument();
});

test('if the user clicks on truck button one more truck is on screen',
  () => {
    render(<App />);
    const trucksAtLoad = screen.getAllByText(/🚚/i);
    
    const truckButton = screen.getByText(/Truck/i);

    expect(trucksAtLoad.length).toBe(1);

    fireEvent.click(truckButton);

    const trucksAfterClick = screen.getAllByText(/🚚/i);

    expect (trucksAfterClick.length).toBe(2);
  });


test('if the user clicks on the car button it adds a car',
  () => {
    render(<App />);
    const carsAtLoad = screen.getAllByText(/🚗/i);

    const carButton = screen.getByText(/Car/i);

    expect(carsAtLoad.length).toBe(1);

    fireEvent.click(carButton);

    const carsAfterClick = screen.getAllByText(/🚗/i);
    expect (carsAfterClick.length).toBe(2);
  });






// LET'S TRY THIS ONE LATER
//test('if the user clicks on green, it changes the light from red to green',
//   () => {
//     render(<App />);
//     const lightAtLoad = screen.get('red on');
    
//     const greenButton = screen.getByText(/Green/i);

//     expect(lightAtLoad.length).toBe(1);
  
  
//   });