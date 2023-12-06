import Header from './Header';
import MarketControl from './MarketControl';
import Produce from './ProduceControl';

function App() {

  return (
    <>
      <div id="body">
        <Header />
        <hr />
        <table>
          <tbody>
            <tr>
              <td>
                <MarketControl id="marketControl" />
              </td>
              <td id="produceDisplay">
                <Produce />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
