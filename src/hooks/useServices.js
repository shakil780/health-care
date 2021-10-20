import { useEffect, useState } from "react";

function useServices() {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return { services };
}

export default useServices;
