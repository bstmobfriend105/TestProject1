import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomCarousel from '../../utils/customCarousel'
import comStyles from '../../utils/commonStyles'

const statusData =[
        {
          title: "Your commissions this quarter total $32,400. You could make $14,200 more from your pipeline.",
          progress: 0.6
        }, {
          title: "Your salaries this year total $65,000. You could make $5,000 more from your pipeline.",
          progress: 0.8
        }
      ]

class StatusCards extends Component {

  render() {
    return (
      <View style={comStyles.backView}>
        <Text style={comStyles.cardTitle}>How you're doing</Text>
        <CustomCarousel cardData={statusData}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  backView: {
    marginTop: 50
  },
  cardTitle: {
    marginLeft: 30,
  }
})

export default StatusCards