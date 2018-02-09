import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native';
//importing navigator types
import {StackNavigator, TabNavigator, DrawerNavigator}  from 'react-navigation';

//screens
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';

//helper functions
import {capitalizeFirstLetter} from '../helpers/string';

export const ContactsStack  = StackNavigator({
Contacts:{
    screen: Contacts,
    navigationOptions: ({navigation})=>({
        title: 'Contacts',
        headerRight: <Button title="menu" onPress ={()=> navigation.navigate('DrawerOpen')} />
    })
},
Details:{
    screen: Details,
   //  navigationOptions: {
     //   title: 'Details',   
   // }

   navigationOptions: ({navigation}) =>({
       title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
   }),
},
});


export const NewContactStack = StackNavigator({
NewContact:{
    screen: NewContact,
       navigationOptions: ({navigation})=>({
        title: 'New Contact',
        headerRight: <Button title="menu" onPress ={()=> navigation.navigate('DrawerOpen')} />
    })
}
});

export const MeStack = StackNavigator({
Me:{
    screen: Me,
      navigationOptions: ({navigation})=>({
        title: 'Me',
        headerRight: <Button title="menu" onPress ={()=> navigation.navigate('DrawerOpen')} />
    })
}
});


export const Tabs = TabNavigator({
    Contacts:{
        screen: ContactsStack,
        navigationOptions:{
            tabBarLabel:'Contacts',
            tabBarIcon: ({tintColor})=> <Icon name="ios-list" size={35}  color ={tintColor} />
        }
    },
    NewContact:{
        screen:NewContactStack,
          navigationOptions:{
            tabBarLabel:'New Contact',
            tabBarIcon: ({tintColor})=> <Icon name="ios-add" size={35}  color ={tintColor} />
        }
    },
    Me:{
      screen:MeStack,  
        navigationOptions:{
            tabBarLabel:'Me',
            tabBarIcon: ({tintColor})=> <Icon name="ios-contact" size={35}  color ={tintColor} />
        }
    }
})

export const Drawer = DrawerNavigator({
    Contacts:{
        screen: ContactsStack,
        navigationOptions:{
            drawerLabel:'Contacts',
            tabBarIcon: ({tintColor})=> <Icon name="ios-list" size={35}  color ={tintColor} />
        }
    },
    NewContact:{
        screen:NewContactStack,
          navigationOptions:{
            drawerLabel:'New Contact',
            tabBarIcon: ({tintColor})=> <Icon name="ios-add" size={35}  color ={tintColor} />
        }
    },
    Me:{
      screen:MeStack,  
        navigationOptions:{
            drawerLabel:'Me',
            tabBarIcon: ({tintColor})=> <Icon name="ios-contact" size={35}  color ={tintColor} />
        }
    }
})

