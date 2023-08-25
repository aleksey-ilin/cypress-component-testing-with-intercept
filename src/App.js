// import axios from 'axios';

function App() {
  const handleClickGetButton = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/my-api/view/get');
    xhr.send();

    // axios({
    //   method: 'GET',
    //   baseURL: 'api/my-api/view',
    //   url: '/123',
    // })
  };

  const handleClickPutButton = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'api/my-api/view/put');
    xhr.send();

    // axios({
    //   method: 'PUT',
    //   baseURL: 'api/my-api/view',
    //   url: '/123',
    // })
  };

  return (
    <>
      <button onClick={handleClickGetButton} name='get'>get</button>
      <button onClick={handleClickPutButton} name='put'>put</button>
    </>
  );
}

export default App;
