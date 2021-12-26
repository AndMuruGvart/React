import React from "react";
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

function AppComponent() {
    const [token]=useToken();
     return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                    <Header />
                    <Content>
                        <CardsList/>
                        <br/>
                        <Posts/>
                        {/* <Text size={20} bold mobileSize={28}  color={EColor.green} >Label1</Text>
                        <Break size={20} mobileSize={16} top/>
                        <Text size={20}  >Label2</Text>
                        <Break size={20} top/>
                        <Text size={20} mobileSize={16}>Label3</Text> */}
                    </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
        </tokenContext.Provider>

       
    );
};

export const App=hot(()=><AppComponent/>);