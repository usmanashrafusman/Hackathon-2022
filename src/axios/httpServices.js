

import axios from "axios";
import { makeUseAxios, configure } from "axios-hooks";
import { Config } from "config";

export const instance = axios.create({
    baseURL: "http://localhost/5000/",
    timeout: 120000, // 120 seconds

    headers: {
        "Content-Type": "application/json",
    },
});

const useAxios = makeUseAxios({
    axios: instance,
});

const defaultOptions = { useCache: false };
configure({ axios, defaultOptions });

export default useAxios;
