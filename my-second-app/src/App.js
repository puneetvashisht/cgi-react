
import './App.css';
import Badge from './Badge';
import Card from './Card'

function App() {
  return (
    <div>
      <Badge caption="Sent" count="23"></Badge>
      <Badge caption="Inbox" count="3445"></Badge>
      <Card title="Angular"></Card>
      <Card title="React"></Card>
    </div>
  );
}

export default App;
