// import React, {Component} from 'react';
// import PropTypes from "prop-types";
// import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
// import {Image as ReactImage} from 'react-native';
// import Svg, {Defs, Pattern} from 'react-native-svg';
// import {Path as SvgPath} from 'react-native-svg';
// import {Text as SvgText} from 'react-native-svg';
// import {Image as SvgImage} from 'react-native-svg';

// export default class Login5 extends Component {

//   constructor(props) {
//       super(props);
//       this.state = {
          
//       };
//   }


//   handlePress(target, owner) {
//     if (this.props.onPress) {
//         let name;
//         let id;
//         let index = -1;
//         if (target.search("::") > -1) {
//             const varCount = target.split("::").length;
//             if (varCount === 2) {
//                 name = target.split("::")[0];
//                 id = target.split("::")[1];
//             } else if (varCount === 3) {
//                 name = target.split("::")[0];
//                 index = parseInt(target.split("::")[1]);
//                 id = target.split("::")[2];
//             }
//         } else {
//             name = target;
//         }
//         this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
//     }
//   }

//   handleChangeTextinput(name, value) {
//       let id;
//       let index = -1;
//       if (name.search('::') > -1) {
//           const varCount = name.split("::").length;
//           if (varCount === 2) {
//               name = name.split("::")[0];
//               id = name.split("::")[1];
//           } else if (varCount === 3) {
//               name = name.split("::")[0];
//               index = name.split("::")[1];
//               id = name.split("::")[2];
//           }
//       } else {
//           name = name;
//       }
//       let state = this.state;
//       state[name.split('::').join('')] = value;
//       this.setState(state, () => {
//           if (this.props.onChange) {
//               this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
//           }
//       });
//   }

//   render() {
    
//     return (
//     <ScrollView data-layer="09f324ad-5e56-481b-a063-916f3afddf7e" style={styles.login5}>
//         <View data-layer="d4ecd0b5-ad2b-4141-94f4-441f92b17030" style={styles.login5_buttondefault}>
//             <View data-layer="7008de1f-8901-4348-87ce-fe40c28be954" style={styles.login5_buttondefault_rectangle11596f4933af}></View>
//             <Text data-layer="e4816a49-2904-4a0b-9d4c-9965d5eaeb04" style={styles.login5_buttondefault_dontHaveAccount}>Don't have account?</Text>
//         </View>
//         <View data-layer="d7929bb3-57a9-49b0-b722-1fc984500627" style={styles.login5_buttonprimarydefault}>
//             <View data-layer="48faafb6-a567-4563-a233-f915413ad30b" style={styles.login5_buttonprimarydefault_rectangle1159}></View>
//             <Text data-layer="60420c18-684a-41e2-b8e3-965cfe28f2ea" style={styles.login5_buttonprimarydefault_continue}>Continue</Text>
//         </View>
//         <Text data-layer="f40f5ba2-a94f-4431-ac68-e1104e6ba978" style={styles.login5_forgotPassword}>Forgot password?</Text>
//         <View data-layer="2750980f-426b-4865-951d-6a3492240324" style={styles.login5_formdefaultpasswordtrailingicon}>
//             <View data-layer="1e933a79-40e8-4802-87a9-6d69c8ed5c9e" style={styles.login5_formdefaultpasswordtrailingicon_rectangle128a9baa919}></View>
//             <Text data-layer="4a2be724-1eb8-4003-a116-d6eaaa7476b0" style={styles.login5_formdefaultpasswordtrailingicon_password}>Password</Text>
//             <View data-layer="b05223dd-bf6a-4da3-b6be-acb8142d8e18" style={styles.login5_formdefaultpasswordtrailingicon_icononlightvisibilityoff}>
//                 <View data-layer="24193f37-4079-44c6-8cac-8658c8d0cc41" style={styles.login5_formdefaultpasswordtrailingicon_icononlightvisibilityoff_opComponent45d5f6fb7}></View>
//                 <Svg data-layer="5d019724-2f3c-4b5e-a048-e69bcad1c4d7" style={styles.login5_formdefaultpasswordtrailingicon_icononlightvisibilityoff_icon21be9774} preserveAspectRatio="none" viewBox="-0.75 -0.75 23.5 19.82470703125" fill="rgba(3, 126, 243, 1)"><SvgPath d="M 18.7344970703125 18.324462890625 C 18.468505859375 18.324462890625 18.21820068359375 18.22064208984375 18.02969360351563 18.03216552734375 L 15.30990600585938 15.3123779296875 C 13.90811157226563 15.85650634765625 12.45761108398438 16.13226318359375 10.99978637695313 16.13226318359375 C 8.579986572265625 16.13226318359375 6.254058837890625 15.4049072265625 4.273406982421875 14.0286865234375 C 2.339141845703125 12.68475341796875 0.861419677734375 10.81884765625 0 8.632568359375 C 0.753021240234375 6.70465087890625 2.025543212890625 4.98980712890625 3.680084228515625 3.67266845703125 L 1.709991455078125 1.70257568359375 C 1.52093505859375 1.5135498046875 1.416900634765625 1.26275634765625 1.41705322265625 0.9964599609375 C 1.417205810546875 0.73065185546875 1.521240234375 0.48052978515625 1.709991455078125 0.292236328125 C 1.898468017578125 0.103759765625 2.150482177734375 0 2.419647216796875 0 C 2.68878173828125 0 2.940826416015625 0.103759765625 3.129302978515625 0.292236328125 L 19.44000244140625 16.62274169921875 C 19.6279296875 16.81072998046875 19.7314453125 17.06097412109375 19.7314453125 17.32745361328125 C 19.7314453125 17.59393310546875 19.6279296875 17.84423828125 19.44000244140625 18.03216552734375 C 19.25106811523438 18.22064208984375 19.00051879882813 18.324462890625 18.7344970703125 18.324462890625 Z M 6.489898681640625 6.49237060546875 L 6.489898681640625 6.49237060546875 C 6.16900634765625 7.1536865234375 5.9993896484375 7.89373779296875 5.9993896484375 8.632568359375 C 5.9993896484375 11.3892822265625 8.2425537109375 13.632080078125 10.99978637695313 13.632080078125 C 11.74490356445313 13.632080078125 12.4649658203125 13.4639892578125 13.13998413085938 13.132568359375 L 11.56948852539063 11.56207275390625 C 11.39773559570313 11.5986328125 11.2091064453125 11.63226318359375 10.99978637695313 11.63226318359375 C 9.34576416015625 11.63226318359375 8.000091552734375 10.28662109375 8.000091552734375 8.632568359375 C 8.000091552734375 8.4381103515625 8.0281982421875 8.251708984375 8.05950927734375 8.06195068359375 L 6.489898681640625 6.49237060546875 L 6.489898681640625 6.49237060546875 Z M 18.81991577148438 13.15234375 L 18.81924438476563 13.1517333984375 L 15.7598876953125 10.09234619140625 C 15.9208984375 9.5615234375 15.99929809570313 9.0843505859375 15.99929809570313 8.632568359375 C 15.99929809570313 5.87530517578125 13.75653076171875 3.63214111328125 10.99978637695313 3.63214111328125 C 10.5457763671875 3.63214111328125 10.07876586914063 3.70849609375 9.53009033203125 3.8724365234375 L 7.359283447265625 1.70257568359375 C 8.538482666015625 1.3233642578125 9.76318359375 1.1319580078125 10.99978637695313 1.1319580078125 C 13.41851806640625 1.1319580078125 15.74435424804688 1.85906982421875 17.72586059570313 3.2347412109375 C 19.66006469726563 4.57745361328125 21.13790893554688 6.44061279296875 21.99960327148438 8.6226806640625 C 21.32662963867188 10.3402099609375 20.22735595703125 11.90606689453125 18.82061767578125 13.1517333984375 L 18.81991577148438 13.15234375 Z M 13.96981811523438 8.30224609375 L 13.96780395507813 8.30029296875 L 11.33010864257813 5.66253662109375 C 12.7327880859375 5.81341552734375 13.81784057617188 6.8984375 13.969482421875 8.2994384765625 L 13.96981811523438 8.30224609375 Z"  /></Svg>
//             </View>
//             <View data-layer="95b45d9b-4872-4eb8-bdc8-0704b5a70cbc" style={styles.login5_formdefaultpasswordtrailingicon_iconondarklock}>
//                 <View data-layer="f3512727-e4af-4469-a202-42a56422a2c4" style={styles.login5_formdefaultpasswordtrailingicon_iconondarklock_group}>
//                     <View data-layer="701efa45-81f8-450b-b0e2-d2d406a94349" style={styles.login5_formdefaultpasswordtrailingicon_iconondarklock_group_pathed53c65a}></View>
//                     <View data-layer="73ea417a-d755-4d6f-a48c-7a3078248d0b" style={styles.login5_formdefaultpasswordtrailingicon_iconondarklock_group_pathfc2fb720}></View>
//                 </View>
//                 <Svg data-layer="d90868ac-891f-4ae4-a7fb-fb853a06895b" style={styles.login5_formdefaultpasswordtrailingicon_iconondarklock_icon4ccd6e04} preserveAspectRatio="none" viewBox="-0.75 -0.75 83.3203125 22.49951171875" fill="rgba(243, 244, 247, 1)"><SvgPath d="M 71.59403991699219 20.99969482421875 L 10.22644519805908 20.99969482421875 C 4.587588310241699 20.99969482421875 0 20.10260009765625 0 18.99990844726563 L 0 9 C 0 7.896820068359375 4.587588310241699 6.999298095703125 10.22644519805908 6.999298095703125 L 15.33956241607666 6.999298095703125 L 15.33956241607666 4.999481201171875 C 15.33956241607666 2.242767333984375 26.81044578552246 0 40.91003036499023 0 C 55.00983047485352 0 66.48093414306641 2.242767333984375 66.48093414306641 4.999481201171875 L 66.48093414306641 6.999298095703125 L 71.59403991699219 6.999298095703125 C 77.23290252685547 6.999298095703125 81.82049560546875 7.896820068359375 81.82049560546875 9 L 81.82049560546875 18.99990844726563 C 81.82049560546875 20.10260009765625 77.23290252685547 20.99969482421875 71.59403991699219 20.99969482421875 Z M 40.91003036499023 11.99969482421875 C 35.27138900756836 11.99969482421875 30.68379974365234 12.89678955078125 30.68379974365234 13.99948120117188 C 30.68379974365234 15.10269165039063 35.27138900756836 16.00018310546875 40.91003036499023 16.00018310546875 C 46.54888916015625 16.00018310546875 51.13669204711914 15.10269165039063 51.13669204711914 13.99948120117188 C 51.13669204711914 12.89678955078125 46.54888916015625 11.99969482421875 40.91003036499023 11.99969482421875 Z M 40.91003036499023 1.999786376953125 C 32.45185470581055 1.999786376953125 25.57046890258789 3.345428466796875 25.57046890258789 4.999481201171875 L 25.57046890258789 6.999298095703125 L 56.24980926513672 6.999298095703125 L 56.24980926513672 4.999481201171875 C 56.24980926513672 3.345428466796875 49.36842346191406 1.999786376953125 40.91003036499023 1.999786376953125 Z"  /></Svg>
//             </View>
//         </View>
//         <View data-layer="8188d04c-8812-47c5-8f41-f9975c93b9d8" style={styles.login5_formdefaultwithicon}>
//             <View data-layer="6367f247-bd5b-41de-a0e1-89a334a4bb83" style={styles.login5_formdefaultwithicon_rectangle128}></View>
//             <Text data-layer="0372ade1-4a77-4849-aca6-44551f9d0bf1" style={styles.login5_formdefaultwithicon_email}>Email</Text>
//             <View data-layer="f042bb07-3191-4ecb-bd53-5e0c1cdf9022" style={styles.login5_formdefaultwithicon_iconondarkperson}>
//                 <View data-layer="9c3c6cc7-d17d-4f31-82f8-3d398df4a403" style={styles.login5_formdefaultwithicon_iconondarkperson_path7b96360b}></View>
//                 <Svg data-layer="d956fc63-aeda-4f10-8bbe-a87064fd66f3" style={styles.login5_formdefaultwithicon_iconondarkperson_opComponent1} preserveAspectRatio="none" viewBox="-0.75 -0.75 1.5 9.50048828125" fill="rgba(243, 244, 247, 1)"><SvgPath d="M 5.000002602173481e-06 0 C 7.76142769609578e-06 0 1.000000520434696e-05 1.79097056388855 1.000000520434696e-05 4.000244140625 C 1.000000520434696e-05 6.209517478942871 7.76142769609578e-06 8.00048828125 5.000002602173481e-06 8.00048828125 C 2.238577508251183e-06 8.00048828125 0 6.209517478942871 0 4.000244140625 C 0 1.79097056388855 2.238577508251183e-06 0 5.000002602173481e-06 0 Z"  /></Svg>
//                 <Svg data-layer="fdc5e65f-f3ea-468a-a84f-b0e0d23ea538" style={styles.login5_formdefaultwithicon_iconondarkperson_opComponent2} preserveAspectRatio="none" viewBox="137.2490234375 4111.24951171875 1.5 7.50048828125" fill="rgba(243, 244, 247, 1)"><SvgPath d="M 137.9990386962891 4115.99951171875 C 137.9990386962891 4115.99951171875 137.9990386962891 4117 137.9990386962891 4117 C 137.9990386962891 4117.5498046875 137.9990386962891 4118 137.9990386962891 4118 C 137.9990386962891 4118 137.9990234375 4118 137.9990234375 4118 C 137.9990234375 4118 137.9990234375 4117.5498046875 137.9990234375 4117 C 137.9990234375 4117 137.9990234375 4115.99951171875 137.9990234375 4115.99951171875 C 137.9990234375 4113.33935546875 137.9990234375 4111.99951171875 137.9990234375 4111.99951171875 C 137.9990386962891 4111.99951171875 137.9990386962891 4113.33935546875 137.9990386962891 4115.99951171875 Z"  /></Svg>
//             </View>
//         </View>
//         <Text data-layer="2df7250e-7775-411c-b7ff-45aa72e3f12e" style={styles.login5_loginHeretoContinue}>Login here
// to continue</Text>
//         <View data-layer="3c2286af-0f7a-4366-8dc7-2f6483ac3b21" style={styles.login5_overlaysnackbarsuccess}>
//             <View data-layer="c98d3180-1104-4d9a-a1d7-3256e8a5c4a9" style={styles.login5_overlaysnackbarsuccess_rectangle1236}></View>
//             <Text data-layer="22e7a146-8e73-4ce7-8dbf-c87a5ac881e8" style={styles.login5_overlaysnackbarsuccess_weHaveSentYouAnEmailVerificationDidNotreceiveAnyEmailFromUsResendEmail}>We have sent you an email verification. Did not
// receive any email from us? Resend email</Text>
//             <View data-layer="4e6c4ce6-9682-4392-9994-011712e581c1" style={styles.login5_overlaysnackbarsuccess_iconondarkclose}>
//                 <View data-layer="b9bb2a1a-d7e1-40db-a1f9-2771f0d2651b" style={styles.login5_overlaysnackbarsuccess_iconondarkclose_path}></View>
//                 <Svg data-layer="bae60159-75fb-493e-a574-5348419be157" style={styles.login5_overlaysnackbarsuccess_iconondarkclose_icon} preserveAspectRatio="none" viewBox="280.657470703125 3480.65771484375 10.685546875 10.6845703125" fill="rgba(243, 244, 247, 1)"><SvgPath d="M 290.3887634277344 3482.593505859375 C 290.3887634277344 3482.593505859375 286.9822998046875 3486.000244140625 286.9822998046875 3486.000244140625 C 286.9822998046875 3486.000244140625 290.3887634277344 3489.406494140625 290.3887634277344 3489.406494140625 C 290.6603698730469 3489.678466796875 290.6603698730469 3490.116943359375 290.3887634277344 3490.388916015625 C 290.1170043945313 3490.660400390625 289.6781921386719 3490.660400390625 289.4065856933594 3490.388916015625 C 289.4065856933594 3490.388916015625 286.0000305175781 3486.982666015625 286.0000305175781 3486.982666015625 C 286.0000305175781 3486.982666015625 282.5934143066406 3490.388916015625 282.5934143066406 3490.388916015625 C 282.3218078613281 3490.660400390625 281.8829040527344 3490.660400390625 281.6111450195313 3490.388916015625 C 281.3395690917969 3490.116943359375 281.3395690917969 3489.678466796875 281.6111450195313 3489.406494140625 C 281.6111450195313 3489.406494140625 285.0177001953125 3486.000244140625 285.0177001953125 3486.000244140625 C 285.0177001953125 3486.000244140625 281.6111450195313 3482.593505859375 281.6111450195313 3482.593505859375 C 281.3395690917969 3482.322021484375 281.3395690917969 3481.883056640625 281.6111450195313 3481.611572265625 C 281.8829040527344 3481.339599609375 282.3218078613281 3481.339599609375 282.5934143066406 3481.611572265625 C 282.5934143066406 3481.611572265625 286.0000305175781 3485.018310546875 286.0000305175781 3485.018310546875 C 286.0000305175781 3485.018310546875 289.4065856933594 3481.618408203125 289.4065856933594 3481.618408203125 C 289.6781921386719 3481.346923828125 290.1170043945313 3481.346923828125 290.3887634277344 3481.618408203125 C 290.6535034179688 3481.883056640625 290.6535034179688 3482.328857421875 290.3887634277344 3482.593505859375 Z"  /></Svg>
//             </View>
//         </View>
//     </ScrollView>
//     );
//   }
// }

// Login5.propTypes = {

// }

// Login5.defaultProps = {

// }


// const styles = StyleSheet.create({
//   "login5": {
//     "opacity": 1,
//     "position": "relative",
//     "backgroundColor": "rgba(18, 18, 18, 1)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 1786,
//     "height": 812,
//     "left": 0,
//     "top": 0
//   },
//   "login5_buttondefault": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 1754.5,
//     "height": 48,
//     "left": 16.5,
//     "top": 576
//   },
//   "login5_buttondefault_rectangle11596f4933af": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(243, 244, 247, 1)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(243, 244, 247, 1)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(243, 244, 247, 1)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(243, 244, 247, 1)",
//     "borderTopLeftRadius": 4,
//     "borderTopRightRadius": 4,
//     "borderBottomLeftRadius": 4,
//     "borderBottomRightRadius": 4,
//     "width": 1754.5,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login5_buttondefault_dontHaveAccount": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(243, 244, 247, 1)",
//     "fontSize": 14,
//     "fontWeight": "500",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "center",
//     "lineHeight": 24,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 138,
//     "height": 27,
//     "left": 808.25,
//     "top": 12.5
//   },
//   "login5_buttonprimarydefault": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 1755,
//     "height": 48,
//     "left": 16,
//     "top": 504
//   },
//   "login5_buttonprimarydefault_rectangle1159": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(3, 126, 243, 1)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopLeftRadius": 4,
//     "borderTopRightRadius": 4,
//     "borderBottomLeftRadius": 4,
//     "borderBottomRightRadius": 4,
//     "width": 1755,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login5_buttonprimarydefault_continue": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(255, 255, 255, 1)",
//     "fontSize": 14,
//     "fontWeight": "500",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "center",
//     "lineHeight": 24,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 62,
//     "height": 27,
//     "left": 847,
//     "top": 12.5
//   },
//   "login5_forgotPassword": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(3, 126, 243, 1)",
//     "fontSize": 14,
//     "fontWeight": "500",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "center",
//     "lineHeight": 24,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 122,
//     "height": 27,
//     "left": 20.5,
//     "top": 443.5
//   },
//   "login5_formdefaultpasswordtrailingicon": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 1754,
//     "height": 48,
//     "left": 16,
//     "top": 376
//   },
//   "login5_formdefaultpasswordtrailingicon_rectangle128a9baa919": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(36, 37, 41, 1)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(59, 62, 68, 1)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(59, 62, 68, 1)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(59, 62, 68, 1)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(59, 62, 68, 1)",
//     "borderTopLeftRadius": 8,
//     "borderTopRightRadius": 8,
//     "borderBottomLeftRadius": 8,
//     "borderBottomRightRadius": 8,
//     "width": 1754,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login5_formdefaultpasswordtrailingicon_password": {
//     "opacity": 0.6800000071525574,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(163, 168, 176, 1)",
//     "fontSize": 14,
//     "fontWeight": "400",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "left",
//     "lineHeight": 20,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 64,
//     "height": 23,
//     "left": 48,
//     "top": 14.5
//   },
//   "login5_formdefaultpasswordtrailingicon_icononlightvisibilityoff": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 24,
//     "height": 24,
//     "left": 1718,
//     "top": 13
//   },
//   "login5_formdefaultpasswordtrailingicon_icononlightvisibilityoff_opComponent45d5f6fb7": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(0, 0, 0, 0)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(0, 0, 0, 0)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(0, 0, 0, 0)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(0, 0, 0, 0)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(0, 0, 0, 0)",
//     "borderTopLeftRadius": 0,
//     "borderTopRightRadius": 0,
//     "borderBottomLeftRadius": 0,
//     "borderBottomRightRadius": 0,
//     "width": 23,
//     "height": 23,
//     "left": -0.5,
//     "top": -0.5
//   },
//   "login5_formdefaultpasswordtrailingicon_icononlightvisibilityoff_icon21be9774": {
//     "opacity": 1,
//     "position": "absolute",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 24,
//     "height": 20.32,
//     "left": 0,
//     "top": 1.87
//   },
//   "login5_formdefaultpasswordtrailingicon_iconondarklock": {
//     "opacity": 0.3799999952316284,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 123,
//     "height": 24,
//     "left": 61,
//     "top": 13
//   },
//   "login5_formdefaultpasswordtrailingicon_iconondarklock_group": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 123,
//     "height": 24,
//     "left": 0,
//     "top": 0
//   },
//   "login5_formdefaultpasswordtrailingicon_iconondarklock_group_pathed53c65a": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(0, 0, 0, 0)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(0, 0, 0, 0)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(0, 0, 0, 0)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(0, 0, 0, 0)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(0, 0, 0, 0)",
//     "borderTopLeftRadius": 0,
//     "borderTopRightRadius": 0,
//     "borderBottomLeftRadius": 0,
//     "borderBottomRightRadius": 0,
//     "width": 122,
//     "height": 23,
//     "left": -0.5,
//     "top": -0.5
//   },
//   "login5_formdefaultpasswordtrailingicon_iconondarklock_group_pathfc2fb720": {
//     "opacity": 0.8705882430076599,
//     "position": "absolute",
//     "backgroundColor": "rgba(0, 0, 0, 0)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(0, 0, 0, 0)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(0, 0, 0, 0)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(0, 0, 0, 0)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(0, 0, 0, 0)",
//     "borderTopLeftRadius": 0,
//     "borderTopRightRadius": 0,
//     "borderBottomLeftRadius": 0,
//     "borderBottomRightRadius": 0,
//     "width": 122,
//     "height": 23,
//     "left": -0.5,
//     "top": -0.5
//   },
//   "login5_formdefaultpasswordtrailingicon_iconondarklock_icon4ccd6e04": {
//     "opacity": 1,
//     "position": "absolute",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 83.82,
//     "height": 23,
//     "left": 19.45,
//     "top": 0
//   },
//   "login5_formdefaultwithicon": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 266,
//     "height": 48,
//     "left": 16,
//     "top": 312
//   },
//   "login5_formdefaultwithicon_rectangle128": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(36, 37, 41, 1)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(59, 62, 68, 1)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(59, 62, 68, 1)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(59, 62, 68, 1)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(59, 62, 68, 1)",
//     "borderTopLeftRadius": 8,
//     "borderTopRightRadius": 8,
//     "borderBottomLeftRadius": 8,
//     "borderBottomRightRadius": 8,
//     "width": 266,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login5_formdefaultwithicon_email": {
//     "opacity": 0.6800000071525574,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(163, 168, 176, 1)",
//     "fontSize": 14,
//     "fontWeight": "400",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "left",
//     "lineHeight": 20,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 36,
//     "height": 23,
//     "left": 47,
//     "top": 14.5
//   },
//   "login5_formdefaultwithicon_iconondarkperson": {
//     "opacity": 0.3799999952316284,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 0,
//     "height": 24,
//     "left": 12,
//     "top": 12
//   },
//   "login5_formdefaultwithicon_iconondarkperson_path7b96360b": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(0, 0, 0, 0)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(0, 0, 0, 0)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(0, 0, 0, 0)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(0, 0, 0, 0)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(0, 0, 0, 0)",
//     "borderTopLeftRadius": 0,
//     "borderTopRightRadius": 0,
//     "borderBottomLeftRadius": 0,
//     "borderBottomRightRadius": 0,
//     "width": -1,
//     "height": 23,
//     "left": -0.5,
//     "top": -0.5
//   },
//   "login5_formdefaultwithicon_iconondarkperson_opComponent1": {
//     "opacity": 1,
//     "position": "absolute",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 2,
//     "height": 10,
//     "left": 3,
//     "top": 3
//   },
//   "login5_formdefaultwithicon_iconondarkperson_opComponent2": {
//     "opacity": 1,
//     "position": "absolute",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 2,
//     "height": 8,
//     "left": 3,
//     "top": 13
//   },
//   "login5_loginHeretoContinue": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(243, 244, 247, 1)",
//     "fontSize": 48,
//     "fontWeight": "500",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "left",
//     "lineHeight": 52,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 266,
//     "height": 113,
//     "left": 16,
//     "top": 173.5
//   },
//   "login5_overlaysnackbarsuccess": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 1755,
//     "height": 66,
//     "left": 16,
//     "top": 704
//   },
//   "login5_overlaysnackbarsuccess_rectangle1236": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(45, 184, 149, 1)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopLeftRadius": 4,
//     "borderTopRightRadius": 4,
//     "borderBottomLeftRadius": 4,
//     "borderBottomRightRadius": 4,
//     "width": 1755,
//     "height": 66,
//     "left": 0,
//     "top": 0
//   },
//   "login5_overlaysnackbarsuccess_weHaveSentYouAnEmailVerificationDidNotreceiveAnyEmailFromUsResendEmail": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(255, 255, 255, 1)",
//     "fontSize": 12,
//     "fontWeight": "400",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "left",
//     "lineHeight": 17,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 263,
//     "height": 36,
//     "left": 17,
//     "top": 17.5
//   },
//   "login5_overlaysnackbarsuccess_iconondarkclose": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "transparent",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 20,
//     "height": 20,
//     "left": 316,
//     "top": 8
//   },
//   "login5_overlaysnackbarsuccess_iconondarkclose_path": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(0, 0, 0, 0)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopWidth": 1,
//     "borderTopColor": "rgba(0, 0, 0, 0)",
//     "borderRightWidth": 1,
//     "borderRightColor": "rgba(0, 0, 0, 0)",
//     "borderBottomWidth": 1,
//     "borderBottomColor": "rgba(0, 0, 0, 0)",
//     "borderLeftWidth": 1,
//     "borderLeftColor": "rgba(0, 0, 0, 0)",
//     "borderTopLeftRadius": 0,
//     "borderTopRightRadius": 0,
//     "borderBottomLeftRadius": 0,
//     "borderBottomRightRadius": 0,
//     "width": 19,
//     "height": 19,
//     "left": -0.5,
//     "top": -0.5
//   },
//   "login5_overlaysnackbarsuccess_iconondarkclose_icon": {
//     "opacity": 1,
//     "position": "absolute",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 11.19,
//     "height": 11.18,
//     "left": 4.41,
//     "top": 4.41
//   }
// });