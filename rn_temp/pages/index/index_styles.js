
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "index": {
    "flexDirection": "column",
    "width": "100%"
  },
  "add_btn": {
    "backgroundColor": "#f00"
  },
  "add_btn_text": {
    "color": "#fff",
    "fontSize": scalePx2dp(25),
    "fontWeight": "bold"
  },
  "dec_btn": {
    "backgroundColor": "blue"
  },
  "asc_btn": {
    "backgroundColor": "green"
  },
  "num": {
    "paddingTop": scalePx2dp(10),
    "paddingRight": scalePx2dp(10),
    "paddingBottom": scalePx2dp(10),
    "paddingLeft": scalePx2dp(10)
  },
  "num_text": {
    "fontSize": scalePx2dp(20),
    "textAlign": "center",
    "fontWeight": "bold"
  },
  "hello": {
    "paddingTop": scalePx2dp(5),
    "paddingRight": scalePx2dp(5),
    "paddingBottom": scalePx2dp(5),
    "paddingLeft": scalePx2dp(5),
    "marginTop": scalePx2dp(15),
    "borderWidth": scalePx2dp(2.5),
    "borderColor": "#000",
    "borderStyle": "solid",
    "fontSize": scalePx2dp(15),
    "color": "#f00",
    "fontWeight": "bold"
  }
})
