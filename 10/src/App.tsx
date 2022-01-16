import React, { useEffect } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import {Layout} from './shared/Layout';
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import {Text} from "./shared/Text/Text";
import {EColor} from "./shared/Text/Text";
import { Break } from "./shared/Break";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/Context/tokenContext";
import {  UserContextProvider } from "./shared/Context/userContext";
import { PostsContextProvider } from "./shared/Context/postsContext";
import { Posts } from "./shared/Posts";
import {  createStore } from "redux";
import { Provider, useSelector} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, setToken } from "./store";


const store=createStore(rootReducer, composeWithDevTools());

function AppComponent() {
    useEffect(() => {
        if (window.__token__)
        store.dispatch(setToken(window.__token__));
    }, [])

     return (
         <Provider store={store}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                    <Header />
                    <Content>
                        <CardsList/>
                        <br/>
                        {/* <Text size={20} bold mobileSize={28}  color={EColor.green} >Label1</Text>
                        <Break size={20} mobileSize={16} top/>
                        <Text size={20}  >Label2</Text>
                        <Break size={20} top/>
                        <Text size={20} mobileSize={16}>Label3</Text> */}
                    </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
         </Provider>
             

       
    );
};

export const App=hot(()=><AppComponent/>);