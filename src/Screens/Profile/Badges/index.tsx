import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import Colors from '../../../Constans/Colors';

interface Notification {
  id: number;
  description: string;
  title: string;
  image: any
}

const data: Notification[] = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, indu consecteturt',
    title: 'First Stripe Earned',
    image: require('../../../Assets/GroupImage.png'),
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit',
    title: 'Born Winner',
    image: require('../../../Assets/GroupImage.png'),
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit',
    title: 'Trader of the Month',
    image: require('../../../Assets/GroupImage.png'),
  },
  {
    id: 4,
    description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit',
    title: 'Rising Star',
    image: require('../../../Assets/GroupImage.png'),
  },
  {
    id: 5,
    description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit',
    title: 'Jackpot',
    image: require('../../../Assets/GroupImage.png'),
  },
  {
    id: 6,
    description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit',
    title: 'Impossible',
    image: require('../../../Assets/GroupImage.png'),
  },
  {
    id: 7,
    description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit',
    title: 'First Stripe Earned',
    image:require('../../../Assets/GroupImage.png'),
  },
];


const Badges: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(data);

  return (
    <View>
     
      {notifications.map((item,index)=>{
        return(
          <View key={index} style={styles.notificationBox}>
          <View style={styles.imagebox}>
          <Image
            style={styles.icon}
                source={item.image}
          />
          </View>
          
          <View style={styles.tanddescription}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationList: {
    padding: 10,
  },
  notificationBox: {
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 2,

  },
  icon: {
    width: 80,
    height: 80,
   
    
    marginRight:5
  },
  description: {
    fontSize: 17,
    color: Colors.light_dark,
    marginLeft: 10,
  },
  title: {

    marginLeft: 10,
    fontWeight: '500',
    color: Colors.black,
    fontSize: 17,
    marginBottom: 6
  },
  imagebox:{
    width:'20%',
    justifyContent:'center'

  },
  tanddescription:{
    width:'80%',
   justifyContent:'center',
   paddingLeft:25
  }

  
});

export default Badges;
