import './app.css';
import AccountOverview from './components/account-overview/account-overview';
import SalesOverview from './components/sales-overview/sales-overview';

function App() {

  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com',
      phone: '020 3362 4208'
    }
  }

  const salesOverviewStub = {
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079
    }
  }


  return (
    <div className="App">
      <div >
        <AccountOverview data={accountOverviewStub} />
      </div>
      <div >
        <SalesOverview data={salesOverviewStub} />
      </div>
    </div>

  );
}

export default App;
