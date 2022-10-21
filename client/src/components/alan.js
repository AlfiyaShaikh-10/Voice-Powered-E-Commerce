import { productByCategory } from "../../admin/products/FetchApi";


// {products && products.length > 0 ? (
//     products.map((item, index) => {
    function App() {
        const history = useHistory();
      
        const [category, setCategory] = useState([]);
      
        useEffect(() => {
          alanBtn({
            key: "Alan SDK Key",
            onCommand: ({ command, product }) => {
              if (command === "show") {
                filter(product);
              }
              if (command === "cartPage") {
                history.push("/cart");
              }
              if (command === "ordersPage") {
                history.push("/orders");
              }
              if (command === "homePage") {
                history.push("/");
              }
            },
          });
          filter("");
        }, [history]);
      
        const filter = (names) => {
          const filtered = Data.filter((item) => item.name.includes(names));
          console.log(filtered);
          setCategory(filtered);
        };
      