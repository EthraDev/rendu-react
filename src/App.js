import './App.css';

function Header() {
  return <header>
    <h1>Intermarché : tous unis contre la vie</h1>
  </header>
}

function App() {
  //let [title, setTitle] = useState('');
  //let [price, setPrice] = useState('');
  //let [image, setImage] = useState('');
  //let [newProduct, setNewProduct] = useState({title: '', price: '', image: ''});
  // let [ createProduct ] = useCreateProductMutation();
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
