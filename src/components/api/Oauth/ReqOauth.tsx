import { useQuery } from "react-query";
import axios from "axios";

import { UseQueryResult } from "react-query/types/react/types";
import { DescDataAuth } from "../../../Interfaces";

import { CLIENT_ID, CLIENT_SECRET } from "../../../const";

const useReqAuth = (flag: boolean): UseQueryResult<DescDataAuth> => {
  return useQuery(["auth", flag], async () => {
    if (!flag) {
      return;
    }
    return await axios.get("http://localhost:5000/authentication", {
      headers: {
        CLIENT_ID,
        CLIENT_SECRET,
      },
    });
  });
};

export { useReqAuth };
