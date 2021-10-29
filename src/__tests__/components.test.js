import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Quote from '../components/Quote';
import Home from '../components/Home';
import Calculator from '../components/Calculator';

describe('Testing Components', () => {
    test('Home.js', () => {
      const tree = render(<Home/>);
      expect(tree).toMatchSnapshot();
    });
  
    test('Calculator.js', () => {
      const tree = render(<Calculator />);
      expect(tree).toMatchSnapshot();
      fireEvent.click(screen.getByText('8'));
      expect(screen.getByTestId('result')).toHaveTextContent('8');
      fireEvent.click(screen.getByText('+'));
      fireEvent.click(screen.getByText('1'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('result')).toHaveTextContent('9');
    });
  
    test('Quote.js', () => {
      const tree = render(<Quote/>);
      expect(tree).toMatchSnapshot();
    });
  });