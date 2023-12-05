import Header from './Header';
import MarketControl from './MarketControl';
import Produce from './ProduceControl';
function App() {

  return (
    <>
      <Header />
      <hr />
      <tr>
        <td>
          <MarketControl />
        </td>
        <hr />
        <td>
          <Produce />
        </td>
      </tr>
    </>
  )
}

export default App
