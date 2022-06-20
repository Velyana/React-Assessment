import { render, screen } from '@testing-library/react';
import SalesOverview from '../sales-overview/sales-overview';

const salesOverviewStub = {
    salesOverview: {
        uploads: 8,
        successfulUploads: 3,
        linesAttempted: 20,
        linesSaved: 4,
        lastUploadDate: 1605001226079
    }
}

test('renders upload', () => {
    render(<SalesOverview data={salesOverviewStub} />);
    const element = screen.getByText("Upload success");
    expect(element).toBeInTheDocument();
});

test('renders saved lines', () => {
    render(<SalesOverview data={salesOverviewStub} />);
    const element = screen.getByText("Lines saved");
    expect(element).toBeInTheDocument();
});
