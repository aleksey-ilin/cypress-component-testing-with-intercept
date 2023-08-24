function App() {
  const handleClick1 = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3000/__cypress/iframes//Users/user/projects/ui/src/shared/components/side-panel/api/my-api/view/123');
    xhr.send();
  };

  const handleClick2 = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('PUT', 'http://localhost:3000/__cypress/iframes//Users/user/projects/ui/src/shared/components/side-panel/api/my-api/view/123');
    xhr.send();
  };

  return (
    <>
      <button onClick={handleClick1} name='get'>get</button>
      <button onClick={handleClick2} name='put'>put</button>
    </>
  );
}

export default App;
