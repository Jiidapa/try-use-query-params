import React, { useEffect } from "react";
import { StringParam, useQueryParams } from "use-query-params";

export default function User() {
  const [query, setQuery] = useQueryParams({
    test: StringParam,
  });

  useEffect(() => {
    console.log(query);
    setQuery({ eiei: "eyeja" });
  }, []);

  return (
    <h2>
      Users
      <div>
        <button onClick={() => setQuery({ test: "555" })}>Change</button>
      </div>
    </h2>
  );
}
