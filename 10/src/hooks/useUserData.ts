import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { tokenContext } from "../shared/Context/tokenContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";


interface IUserData {
    name?:string;
    iconImage?:string;
  }

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    const token =useSelector<RootState, string>(state=>state.tokenText);
    useEffect(() => {
        axios.get(
        'https://oauth.reddit.com/api/v1/me', {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) =>{
            const userData=resp.data;
            setData({name: userData.name, iconImage:userData.icon_img});
        })
        .catch(console.log)
        
    }, [token])

    return [data];
}