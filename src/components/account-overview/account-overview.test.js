import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

const accountOverviewStub = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '020 3362 4208'
  }
}

test('renders support contact', () => {
  render(<AccountOverview data={accountOverviewStub} />);
  const element = screen.getByText("Your feefo support contact");
  expect(element).toBeInTheDocument();
});
