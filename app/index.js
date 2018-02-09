import React from 'react';
import {Platform} from 'react-native';

import {Drawer, ContactsStack} from './config/router.js';


const App = ()=>{
    
if (Platform.OS =='ios')
{
    return <ContactsStack />
}
    return <Drawer/>;
}

export default App;
