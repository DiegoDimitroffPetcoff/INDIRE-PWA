import { useEffect, useState } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { Auth } from "../../../utils/auth";
import { FetchPost } from "../../../services/fetchGetData";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const FetchNode = () => {
  const { data, loading, error } = FetchPost(BASE_URL);

  return (
    <ul>
      <h1>TESTING FECTH POST</h1>
      {loading && <li>"Loading"</li>}
      {error && <li>"There was an error"</li>}

      {data?.map((user) => (
        <li kay={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
