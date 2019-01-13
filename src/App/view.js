import React from 'react';
import Input from '../components/Input';
import UserInformation from '../components/UserInformation';
import Repositories  from '../components/Repositories';
import styled from 'styled-components';

const AppBody = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 50px;
    margin-left: 50px;
    heigth: 100%;
    width: 100%;
`;

const App = ({apiHandler, userInfo, repositories}) =>
    <div className="App">
        <Input apiCall={apiHandler} />
        <AppBody>
            <UserInformation userInfo={userInfo} />
            <Repositories repo={repositories} />
        </AppBody>
    </div>

export default App;