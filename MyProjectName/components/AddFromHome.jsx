import { View,Text, Pressable } from 'react-native'
import React from 'react'

const AddFromHome = () => {
  return (
    <View style={{width:345,
                 height:127,
                 backgroundColor:'#EBF0F7',
                 borderRadius:20,
                 marginTop :'15%',
                 marginLeft:'4%'
                }}
                 >
          <View>
            <Text style={{marginLeft:'10%',marginTop:'5%',fontWeight:'bold',fontSize:18}}>Lost or found an item ?</Text>
            <View style={{flexDirection:'row',marginTop:'5%',marginLeft:'10%',width:300,justifyContent:"space-between"}}>
            <Text>You can post it here{'\n'}for easy recovery</Text>
           <Pressable style={{borderColor:'#6892D5',borderWidth:2,marginTop:"3%",borderRadius:20,width:90,height:40,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}}>Post</Text>
           </Pressable>
            
            </View>
            </View>          
        
    </View>
  )
}

export default AddFromHome