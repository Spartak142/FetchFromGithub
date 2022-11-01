import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const url = "https://api.github.com/users/pjhyett";
  return useFetch(url);
  //asdasdshsh
}
