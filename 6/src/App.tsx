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

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
                <br/>
                <Text size={20} bold mobileSize={28}  color={EColor.green} >Label1</Text>
                <Break size={20} mobileSize={16} top/>
                <Text size={20}  >Label2</Text>
                <Break size={20} top/>
                <Text size={20} mobileSize={16}>Label3</Text>
            </Content>
        </Layout>
    );
};

export const App=hot(()=><AppComponent/>);