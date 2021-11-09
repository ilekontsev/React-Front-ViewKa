import { UseQueryResult } from "react-query/types/react/types";

import { useQuery } from "react-query";
import axios from "axios";
import { DescListDialogues } from "../../../Interfaces";

const useListDialogues = (token: string): UseQueryResult<DescListDialogues> => {
  return useQuery(["listDialog", token], async () => {
    if (!token) {
      return;
    }
    return await axios.get("http://localhost:5000/message/listdialogues", {
      headers: {
        token,
      },
    });
  });
};

const useGetMessageUser = (
  token: string,
  id: number
): UseQueryResult<DescListDialogues> => {
  return useQuery(["listDialog", token, id], async () => {
    if (!token) {
      return;
    }
    return await axios.get("http://localhost:5000/message/getmessage", {
      headers: {
        token,
        id,
      },
    });
  });
};

export { useListDialogues, useGetMessageUser };
