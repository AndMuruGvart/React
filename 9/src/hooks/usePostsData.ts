import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { tokenContext } from "../shared/Context/tokenContext";


interface IPostsData {
   kind?:string;
   data?:any;
  }

export function usePostsData() {
    const [data, setData] = useState<IPostsData[]>([]);
    const token =useContext(tokenContext);
    useEffect(() => {
        axios.get(
        'https://oauth.reddit.com/best.json?limit=20&sr_detail&after', {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) =>{
            const postsData=resp.data.data.children;
            setData(postsData);
        })
        .catch(console.log)
        
    }, [token])


    return [data];
}