// import React, {Component} from 'react';
// import PropTypes from "prop-types";
// import {StyleSheet, Text, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
// // import {Image as ReactImage} from 'react-native';
// import Svg, {Defs, Pattern} from 'react-native-svg';
// import {Path as SvgPath} from 'react-native-svg';
// import {Text as SvgText} from 'react-native-svg';
// import { View } from '@shoutem/cli'
// import {Image as SvgImage} from 'react-native-svg';

// export default class Login2 extends Component {

//   constructor(props) {
//       super(props);
//       this.state = {
//         fontsAreLoaded: false,
//       };
//   }

//   async componentWillMount() {
//     await Font.loadAsync({
//       'Rubik': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
//       'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
//       'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
//       'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
//       'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
//       'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
//       'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
//       'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
//       'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
//       'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
//       'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
//       'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
//     });

//     this.setState({ fontsAreLoaded: true });
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
//     <ScrollView data-layer="6f8e53db-c2c6-4ddb-93fc-d876208a073e" style={styles.login2}>
//         {/* <View data-layer="5f0b59d4-ee8f-4dff-95ee-b67dce73e1fc" style={styles.login2_buttonsocialfacebookbtn}>
//             <View data-layer="f44998ec-67e3-47c4-9c19-b5afea995fb7" style={styles.login2_buttonsocialfacebookbtn_rectangle115972d72f63}></View>
//             <Text data-layer="6cca093d-8769-48ec-a3fe-d494a4d95f4d" style={styles.login2_buttonsocialfacebookbtn_loginWithFacebook}>Login with Facebook</Text>
//             <Svg data-layer="0737f084-0c0b-444d-a6db-df93cfe07e61" style={styles.login2_buttonsocialfacebookbtn_facebookF} preserveAspectRatio="none" viewBox="6.610000133514404 1.9999719858169556 10.3896484375 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 15.11999988555908 5.320000171661377 L 17 5.320000171661377 L 17 2.140000104904175 C 16.08975028991699 2.04534912109375 15.17515468597412 1.998617172241211 14.2599983215332 2.000001907348633 C 11.53999996185303 2 9.680000305175781 3.660000085830688 9.680000305175781 6.699999809265137 L 9.680000305175781 9.319999694824219 L 6.610000133514404 9.319999694824219 L 6.610000133514404 12.8799991607666 L 9.680000305175781 12.8799991607666 L 9.680000305175781 22 L 13.36000061035156 22 L 13.36000061035156 12.88000011444092 L 16.42000007629395 12.88000011444092 L 16.8799991607666 9.319999694824219 L 13.35999965667725 9.319999694824219 L 13.35999965667725 7.050000190734863 C 13.35999965667725 6 13.64000034332275 5.320000171661377 15.11999988555908 5.320000171661377 Z"  /></Svg>
//         </View> */}

//         <View data-layer="4da50a46-a50e-42a8-b9f8-dd24f13648b5" style={styles.login2_buttonprimarydefault}>
//             <View data-layer="b547cc0b-be03-46fe-81ff-ae67154ba318" style={styles.login2_buttonprimarydefault_rectangle1159}></View>
//             <Text data-layer="f0091ee0-5017-428c-a13e-aca9142bafed" style={styles.login2_buttonprimarydefault_loginab66ac0e}>Login</Text>
//         </View>

//         <Text data-layer="d60c4790-acf8-4eee-8df7-104a01839feb" style={styles.login2_forgotPassword}>Forgot password?</Text>

//         <View data-layer="5a246ddf-a956-43ec-9b2d-011015ad100e" style={styles.login2_formdefaultpasswordtrailingicon}>
//             <View data-layer="e787def8-dc17-4fb8-ae90-086461998479" style={styles.login2_formdefaultpasswordtrailingicon_rectangle1283ced9073}></View>
//             <Text data-layer="06dd695e-dcb4-4086-843e-92eac5bdae2f" style={styles.login2_formdefaultpasswordtrailingicon_password}>Password</Text>
//             <View data-layer="769672c9-27e4-4fc9-ae29-70bb472546e5" style={styles.login2_formdefaultpasswordtrailingicon_icononlightvisibilityoff}>
//                 <View data-layer="1fb4ea91-f1c3-4275-a440-b8eba2d01dea" style={styles.login2_formdefaultpasswordtrailingicon_icononlightvisibilityoff_opComponent4353358b1}></View>
//                 <Svg data-layer="3bcdee0c-4a28-471c-ac04-af841d00ebb5" style={styles.login2_formdefaultpasswordtrailingicon_icononlightvisibilityoff_icone07b0958} preserveAspectRatio="none" viewBox="-0.75 -0.75 23.5 19.82470703125" fill="rgba(3, 126, 243, 1)"><SvgPath d="M 18.7344970703125 18.324462890625 C 18.468505859375 18.324462890625 18.21820068359375 18.22064208984375 18.02969360351563 18.03216552734375 L 15.30990600585938 15.3123779296875 C 13.90811157226563 15.85650634765625 12.45761108398438 16.13226318359375 10.99978637695313 16.13226318359375 C 8.579986572265625 16.13226318359375 6.254058837890625 15.4049072265625 4.273406982421875 14.0286865234375 C 2.339141845703125 12.68475341796875 0.861419677734375 10.81884765625 0 8.632568359375 C 0.753021240234375 6.70465087890625 2.025543212890625 4.98980712890625 3.680084228515625 3.67266845703125 L 1.709991455078125 1.70257568359375 C 1.52093505859375 1.5135498046875 1.416900634765625 1.26275634765625 1.41705322265625 0.9964599609375 C 1.417205810546875 0.73065185546875 1.521240234375 0.48052978515625 1.709991455078125 0.292236328125 C 1.898468017578125 0.103759765625 2.150482177734375 0 2.419647216796875 0 C 2.68878173828125 0 2.940826416015625 0.103759765625 3.129302978515625 0.292236328125 L 19.44000244140625 16.62274169921875 C 19.6279296875 16.81072998046875 19.7314453125 17.06097412109375 19.7314453125 17.32745361328125 C 19.7314453125 17.59393310546875 19.6279296875 17.84423828125 19.44000244140625 18.03216552734375 C 19.25106811523438 18.22064208984375 19.00051879882813 18.324462890625 18.7344970703125 18.324462890625 Z M 6.489898681640625 6.49237060546875 L 6.489898681640625 6.49237060546875 C 6.16900634765625 7.1536865234375 5.9993896484375 7.89373779296875 5.9993896484375 8.632568359375 C 5.9993896484375 11.3892822265625 8.2425537109375 13.632080078125 10.99978637695313 13.632080078125 C 11.74490356445313 13.632080078125 12.4649658203125 13.4639892578125 13.13998413085938 13.132568359375 L 11.56948852539063 11.56207275390625 C 11.39773559570313 11.5986328125 11.2091064453125 11.63226318359375 10.99978637695313 11.63226318359375 C 9.34576416015625 11.63226318359375 8.000091552734375 10.28662109375 8.000091552734375 8.632568359375 C 8.000091552734375 8.4381103515625 8.0281982421875 8.251708984375 8.05950927734375 8.06195068359375 L 6.489898681640625 6.49237060546875 L 6.489898681640625 6.49237060546875 Z M 18.81991577148438 13.15234375 L 18.81924438476563 13.1517333984375 L 15.7598876953125 10.09234619140625 C 15.9208984375 9.5615234375 15.99929809570313 9.0843505859375 15.99929809570313 8.632568359375 C 15.99929809570313 5.87530517578125 13.75653076171875 3.63214111328125 10.99978637695313 3.63214111328125 C 10.5457763671875 3.63214111328125 10.07876586914063 3.70849609375 9.53009033203125 3.8724365234375 L 7.359283447265625 1.70257568359375 C 8.538482666015625 1.3233642578125 9.76318359375 1.1319580078125 10.99978637695313 1.1319580078125 C 13.41851806640625 1.1319580078125 15.74435424804688 1.85906982421875 17.72586059570313 3.2347412109375 C 19.66006469726563 4.57745361328125 21.13790893554688 6.44061279296875 21.99960327148438 8.6226806640625 C 21.32662963867188 10.3402099609375 20.22735595703125 11.90606689453125 18.82061767578125 13.1517333984375 L 18.81991577148438 13.15234375 Z M 13.96981811523438 8.30224609375 L 13.96780395507813 8.30029296875 L 11.33010864257813 5.66253662109375 C 12.7327880859375 5.81341552734375 13.81784057617188 6.8984375 13.969482421875 8.2994384765625 L 13.96981811523438 8.30224609375 Z"  /></Svg>
//             </View>
//             <View data-layer="cde91c7c-a5fd-49cf-b315-55e5ab31df1e" style={styles.login2_formdefaultpasswordtrailingicon_iconondarklock}>
//                 <View data-layer="c62d1319-1ae6-4c2d-a0ef-3280eb186a85" style={styles.login2_formdefaultpasswordtrailingicon_iconondarklock_group}>
//                     <View data-layer="4671ecfc-edbe-4e16-a8d9-4ed5a256b283" style={styles.login2_formdefaultpasswordtrailingicon_iconondarklock_group_path216d250b}></View>
//                     <View data-layer="8d17b882-37e7-40fe-b60b-bc6b026b3200" style={styles.login2_formdefaultpasswordtrailingicon_iconondarklock_group_pathbba50f1b}></View>
//                 </View>
//                 <Svg data-layer="7689b471-bbae-4de5-bba2-fe0932c05351" style={styles.login2_formdefaultpasswordtrailingicon_iconondarklock_iconac79e3ee} preserveAspectRatio="none" viewBox="-0.75 -0.75 17.5 22.49951171875" fill="rgba(243, 244, 247, 1)"><SvgPath d="M 14.00043106079102 20.99969482421875 L 1.999812245368958 20.99969482421875 C 0.8971167206764221 20.99969482421875 0 20.10260009765625 0 18.99990844726563 L 0 9 C 0 7.896820068359375 0.8971167206764221 6.999298095703125 1.999812245368958 6.999298095703125 L 2.999697685241699 6.999298095703125 L 2.999697685241699 4.999481201171875 C 2.999697685241699 2.242767333984375 5.242863655090332 0 8.000080108642578 0 C 10.75733852386475 0 13.0005464553833 2.242767333984375 13.0005464553833 4.999481201171875 L 13.0005464553833 6.999298095703125 L 14.00043106079102 6.999298095703125 C 15.10312652587891 6.999298095703125 16.000244140625 7.896820068359375 16.000244140625 9 L 16.000244140625 18.99990844726563 C 16.000244140625 20.10260009765625 15.10312652587891 20.99969482421875 14.00043106079102 20.99969482421875 Z M 8.000080108642578 11.99969482421875 C 6.897426128387451 11.99969482421875 6.000309467315674 12.89678955078125 6.000309467315674 13.99948120117188 C 6.000309467315674 15.10269165039063 6.897426128387451 16.00018310546875 8.000080108642578 16.00018310546875 C 9.102775573730469 16.00018310546875 9.999934196472168 15.10269165039063 9.999934196472168 13.99948120117188 C 9.999934196472168 12.89678955078125 9.102775573730469 11.99969482421875 8.000080108642578 11.99969482421875 Z M 8.000080108642578 1.999786376953125 C 6.346057891845703 1.999786376953125 5.000382423400879 3.345428466796875 5.000382423400879 4.999481201171875 L 5.000382423400879 6.999298095703125 L 10.9998197555542 6.999298095703125 L 10.9998197555542 4.999481201171875 C 10.9998197555542 3.345428466796875 9.654144287109375 1.999786376953125 8.000080108642578 1.999786376953125 Z"  /></Svg>
//             </View>
//         </View>

//         <View data-layer="ae11036d-45b8-46ff-9d84-3a9579520e33" style={styles.login2_formfillederrorwithicon}>
//             <View data-layer="6448c797-7c6a-4b1e-8410-0803d6ac0106" style={styles.login2_formfillederrorwithicon_rectangle128}></View>
//             <Text data-layer="9646de18-68ef-45b8-94b6-4f198dd6e7db" style={styles.login2_formfillederrorwithicon_email}>email@gmail.com</Text>
//             <Text data-layer="988993a3-c418-4c89-aaeb-68ceebf33d0a" style={styles.login2_formfillederrorwithicon_emailNotFound}>Email Not Found</Text>
//             <View data-layer="51048db9-7b3c-4589-b4b0-54a36e4a0bdc" style={styles.login2_formfillederrorwithicon_iconondarkemail}>
//                 <View data-layer="00b03021-3002-43d7-8f3a-b30e37b621a1" style={styles.login2_formfillederrorwithicon_iconondarkemail_path175dbcb6}></View>
//                 <Svg data-layer="b26d5f07-8247-4965-9411-8d1986cbe27a" style={styles.login2_formfillederrorwithicon_iconondarkemail_icond633507a} preserveAspectRatio="none" viewBox="-0.75 -0.75 21.5 17.50048828125" fill="rgba(243, 244, 247, 1)"><SvgPath d="M 17.99999809265137 16.000244140625 L 1.99983286857605 16.000244140625 C 0.8971195220947266 16.000244140625 0 15.1031494140625 0 14.0003662109375 L 0.009906438179314137 1.9998779296875 C 0.009906438179314137 0.8970947265625 0.9026126265525818 0 1.99983286857605 0 L 17.99999809265137 0 C 19.10275840759277 0 19.9998779296875 0.8970947265625 19.9998779296875 1.9998779296875 L 19.9998779296875 14.0003662109375 C 19.9998779296875 15.1031494140625 19.10275840759277 16.000244140625 17.99999809265137 16.000244140625 Z M 2.848593950271606 2.68115234375 C 2.380549907684326 2.68115234375 1.99983286857605 3.0618896484375 1.99983286857605 3.52978515625 C 1.99983286857605 3.820556640625 2.149227619171143 4.090087890625 2.399423837661743 4.250732421875 L 9.469850540161133 8.670654296875 C 9.627132415771484 8.7686767578125 9.810425758361816 8.8204345703125 9.99991512298584 8.8204345703125 C 10.18940544128418 8.8204345703125 10.3727912902832 8.7686767578125 10.52997970581055 8.670654296875 L 17.59951400756836 4.250732421875 C 17.85032081604004 4.0902099609375 17.99999809265137 3.8206787109375 17.99999809265137 3.52978515625 C 17.99999809265137 3.0618896484375 17.61904525756836 2.68115234375 17.1508617401123 2.68115234375 C 16.99367332458496 2.68115234375 16.83761024475098 2.7259521484375 16.69957733154297 2.8106689453125 L 9.99991512298584 7.000244140625 L 3.299407243728638 2.8106689453125 C 3.161562204360962 2.7259521484375 3.005688428878784 2.68115234375 2.848593950271606 2.68115234375 Z"  /></Svg>
//             </View>
//             <View data-layer="ae4dc5af-0457-4181-9939-6181e0cd7b62" style={styles.login2_formfillederrorwithicon_badgeerror}>
//                 <Svg data-layer="193b4367-39f0-4e23-9911-8d175026f77f" style={styles.login2_formfillederrorwithicon_badgeerror_ellipse2} preserveAspectRatio="none" viewBox="0 0 17 17" fill="rgba(247, 64, 34, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
//                 <Svg data-layer="b2e01e7d-0ef4-4488-9157-5ea39ace880a" style={styles.login2_formfillederrorwithicon_badgeerror_times} preserveAspectRatio="none" viewBox="5.99420166015625 5.995908260345459 6.0009765625 6" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 9.699047088623047 8.995481491088867 L 11.84727573394775 6.852248191833496 C 12.04317569732666 6.65634822845459 12.04317474365234 6.33873176574707 11.84727573394775 6.14283275604248 C 11.65137577056885 5.946933269500732 11.33375930786133 5.946933269500732 11.13786029815674 6.14283275604248 L 8.994626998901367 8.291062355041504 L 6.851394176483154 6.14283275604248 C 6.655494689941406 5.946933269500732 6.337878227233887 5.946933269500732 6.141979217529297 6.14283275604248 C 5.946079254150391 6.338732719421387 5.946079254150391 6.65634822845459 6.141979217529297 6.852248191833496 L 8.290207862854004 8.995481491088867 L 6.141979217529297 11.13871574401855 C 6.04740047454834 11.23252201080322 5.99420166015625 11.36021423339844 5.99420166015625 11.49342250823975 C 5.99420166015625 11.62663173675537 6.04740047454834 11.7543249130249 6.141979217529297 11.84813117980957 C 6.235784530639648 11.94270992279053 6.36347770690918 11.99590873718262 6.496686458587646 11.99590873718262 C 6.629895687103271 11.99590873718262 6.757588386535645 11.94270992279053 6.851394653320313 11.84813117980957 L 8.994626998901367 9.69990062713623 L 11.13786125183105 11.84813022613525 C 11.23166656494141 11.94270896911621 11.35935974121094 11.9959077835083 11.49256801605225 11.9959077835083 C 11.62577724456787 11.9959077835083 11.7534704208374 11.94270896911621 11.84727668762207 11.84813022613525 C 11.94185543060303 11.7543249130249 11.99505424499512 11.62663173675537 11.99505424499512 11.49342250823975 C 11.99505424499512 11.36021327972412 11.94185543060303 11.23252105712891 11.84727668762207 11.13871479034424 L 9.699047088623047 8.995481491088867 Z"  /></Svg>
//             </View>
//         </View>
//         <Text data-layer="d641c7b7-1c65-469d-9f3e-966b9d80ce33" style={styles.login2_welcomeBackaidan}>Welcome back!
// Aidan</Text>
//         <View data-layer="653bf5c3-d0fd-4271-bf4e-f21deec84e30" style={styles.login2_barTransparentonlight}>
//             <View data-layer="c9f7f8e3-a077-4c78-a5d8-3abc86f39149" style={styles.login2_barTransparentonlight_rectangle1182}></View>
//             <View data-layer="8c129baf-bba1-488d-beb6-d4d770939ac2" style={styles.login2_barTransparentonlight_iconondarkarrowbackios}>
//                 <View data-layer="b0d016e2-160a-43ac-95a0-29732ee543e1" style={styles.login2_barTransparentonlight_iconondarkarrowbackios_path}></View>
//                 <Svg data-layer="25e2f6d8-6962-4f82-a075-13d37b3b544f" style={styles.login2_barTransparentonlight_iconondarkarrowbackios_icon} preserveAspectRatio="none" viewBox="547.4974365234375 3433.872314453125 12.2412109375 20.264892578125" fill="rgba(243, 244, 247, 1)"><SvgPath d="M 558.6300048828125 3436.749755859375 C 558.6300048828125 3436.749755859375 551.3798828125 3443.999755859375 551.3798828125 3443.999755859375 C 551.3798828125 3443.999755859375 558.619873046875 3451.24951171875 558.619873046875 3451.24951171875 C 559.1099243164063 3451.739501953125 559.1099243164063 3452.52978515625 558.619873046875 3453.019775390625 C 558.1298828125 3453.509765625 557.3400268554688 3453.509765625 556.8499145507813 3453.019775390625 C 556.8499145507813 3453.019775390625 548.5399169921875 3444.70947265625 548.5399169921875 3444.70947265625 C 548.14990234375 3444.319580078125 548.14990234375 3443.689697265625 548.5399169921875 3443.299560546875 C 548.5399169921875 3443.299560546875 556.8499145507813 3434.98974609375 556.8499145507813 3434.98974609375 C 557.3400268554688 3434.499755859375 558.1298828125 3434.499755859375 558.619873046875 3434.98974609375 C 559.1099243164063 3435.469482421875 559.1099243164063 3436.26953125 558.6300048828125 3436.749755859375 Z"  /></Svg>
//             </View>
//             <Text data-layer="4fe50eaa-b831-4b6e-a697-9f9e0f386a47" style={styles.login2_barTransparentonlight_login}>Login</Text>
//         </View>
//         {/* <View data-layer="67b1bfa5-c1cc-4668-91c7-360f4187b8fd" style={styles.login2_imageplaceholderprofilepic}>
//             <ReactImage data-layer="1c02fc2a-c9bc-490a-ad22-f74ebb565306" source={require('./assets/profilePicturePlaceholder.png')} style={styles.login2_imageplaceholderprofilepic_profilePicturePlaceholder} />
//         </View> */}
//     </ScrollView>
//     );
//   }
// }

// Login2.propTypes = {

// }

// Login2.defaultProps = {

// }


// const styles = StyleSheet.create({
//   "login2": {
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
//     "width": 375,
//     "height": 812,
//     "left": 0,
//     "top": 0
//   },
//   "login2_buttonsocialfacebookbtn": {
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
//     "width": 344,
//     "height": 48,
//     "left": 16,
//     "top": 648
//   },
//   "login2_buttonsocialfacebookbtn_rectangle115972d72f63": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(59, 89, 152, 1)",
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
//     "width": 344,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login2_buttonsocialfacebookbtn_loginWithFacebook": {
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
//     "width": 138,
//     "height": 27,
//     "left": 103,
//     "top": 12.5
//   },
//   "login2_buttonsocialfacebookbtn_facebookF": {
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
//     "width": 10.39,
//     "height": 20,
//     "left": 28.5,
//     "top": 14
//   },
//   "login2_buttonprimarydefault": {
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
//     "width": 344,
//     "height": 48,
//     "left": 15.5,
//     "top": 576
//   },
//   "login2_buttonprimarydefault_rectangle1159": {
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
//     "width": 344,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login2_buttonprimarydefault_loginab66ac0e": {
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
//     "width": 38,
//     "height": 27,
//     "left": 153,
//     "top": 12.5
//   },
//   "login2_forgotPassword": {
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
//     "left": 240,
//     "top": 520.5
//   },
//   "login2_formdefaultpasswordtrailingicon": {
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
//     "width": 343,
//     "height": 48,
//     "left": 16,
//     "top": 456
//   },
//   "login2_formdefaultpasswordtrailingicon_rectangle1283ced9073": {
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
//     "width": 343,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login2_formdefaultpasswordtrailingicon_password": {
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
//   "login2_formdefaultpasswordtrailingicon_icononlightvisibilityoff": {
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
//     "left": 307,
//     "top": 13
//   },
//   "login2_formdefaultpasswordtrailingicon_icononlightvisibilityoff_opComponent4353358b1": {
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
//   "login2_formdefaultpasswordtrailingicon_icononlightvisibilityoff_icone07b0958": {
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
//   "login2_formdefaultpasswordtrailingicon_iconondarklock": {
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
//     "width": 24,
//     "height": 24,
//     "left": 12,
//     "top": 13
//   },
//   "login2_formdefaultpasswordtrailingicon_iconondarklock_group": {
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
//     "left": 0,
//     "top": 0
//   },
//   "login2_formdefaultpasswordtrailingicon_iconondarklock_group_path216d250b": {
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
//   "login2_formdefaultpasswordtrailingicon_iconondarklock_group_pathbba50f1b": {
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
//     "width": 23,
//     "height": 23,
//     "left": -0.5,
//     "top": -0.5
//   },
//   "login2_formdefaultpasswordtrailingicon_iconondarklock_iconac79e3ee": {
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
//     "width": 18,
//     "height": 23,
//     "left": 3,
//     "top": 0
//   },
//   "login2_formfillederrorwithicon": {
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
//     "width": 344,
//     "height": 48,
//     "left": 16,
//     "top": 392
//   },
//   "login2_formfillederrorwithicon_rectangle128": {
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
//     "width": 344,
//     "height": 48,
//     "left": 0,
//     "top": 0
//   },
//   "login2_formfillederrorwithicon_email": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(247, 64, 34, 1)",
//     "fontSize": 14,
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
//     "width": 115,
//     "height": 20,
//     "left": 49,
//     "top": 15.97
//   },
//   "login2_formfillederrorwithicon_emailNotFound": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(247, 64, 34, 1)",
//     "fontSize": 10,
//     "fontWeight": "400",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "right",
//     "lineHeight": 17,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 78,
//     "height": 19,
//     "left": 232,
//     "top": 16.45
//   },
//   "login2_formfillederrorwithicon_iconondarkemail": {
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
//     "width": 24,
//     "height": 24,
//     "left": 14,
//     "top": 12
//   },
//   "login2_formfillederrorwithicon_iconondarkemail_path175dbcb6": {
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
//   "login2_formfillederrorwithicon_iconondarkemail_icond633507a": {
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
//     "width": 22,
//     "height": 18,
//     "left": 1,
//     "top": 3
//   },
//   "login2_formfillederrorwithicon_badgeerror": {
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
//     "width": 17,
//     "height": 17,
//     "left": 318,
//     "top": 15.97
//   },
//   "login2_formfillederrorwithicon_badgeerror_ellipse2": {
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
//     "width": 17,
//     "height": 17,
//     "left": 0,
//     "top": 0
//   },
//   "login2_formfillederrorwithicon_badgeerror_times": {
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
//     "width": 6,
//     "height": 6,
//     "left": 5,
//     "top": 6
//   },
//   "login2_welcomeBackaidan": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(243, 244, 247, 1)",
//     "fontSize": 48,
//     "fontWeight": "500",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "center",
//     "lineHeight": 52,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 340,
//     "height": 113,
//     "left": 18,
//     "top": 253.5
//   },
//   "login2_barTransparentonlight": {
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
//     "width": 375,
//     "height": 94,
//     "left": 0,
//     "top": 0
//   },
//   "login2_barTransparentonlight_rectangle1182": {
//     "position": "absolute",
//     "backgroundColor": "rgba(18, 18, 18, 1)",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "borderTopLeftRadius": 0,
//     "borderTopRightRadius": 0,
//     "borderBottomLeftRadius": 0,
//     "borderBottomRightRadius": 0,
//     "width": 375,
//     "height": 94,
//     "left": 0,
//     "top": 0
//   },
//   "login2_barTransparentonlight_iconondarkarrowbackios": {
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
//     "left": 10,
//     "top": 56.5
//   },
//   "login2_barTransparentonlight_iconondarkarrowbackios_path": {
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
//     "width": 23,
//     "height": 23,
//     "left": -0.5,
//     "top": -0.5
//   },
//   "login2_barTransparentonlight_iconondarkarrowbackios_icon": {
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
//     "width": 12.74,
//     "height": 20.76,
//     "left": 5.25,
//     "top": 1.62
//   },
//   "login2_barTransparentonlight_login": {
//     "opacity": 1,
//     "position": "absolute",
//     "backgroundColor": "rgba(255, 255, 255, 0)",
//     "color": "rgba(243, 244, 247, 1)",
//     "fontSize": 18,
//     "fontWeight": "500",
//     "fontStyle": "normal",
//     "fontFamily": "Rubik",
//     "textAlign": "center",
//     "lineHeight": 22,
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "paddingTop": 0,
//     "paddingRight": 0,
//     "paddingBottom": 0,
//     "paddingLeft": 0,
//     "width": 48,
//     "height": 26,
//     "left": 164,
//     "top": 58
//   },
//   "login2_imageplaceholderprofilepic": {
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
//     "width": 104,
//     "height": 104,
//     "left": 136,
//     "top": 123
//   },
//   "login2_imageplaceholderprofilepic_profilePicturePlaceholder": {
//     "opacity": 1,
//     "position": "absolute",
//     "marginTop": 0,
//     "marginRight": 0,
//     "marginBottom": 0,
//     "marginLeft": 0,
//     "borderTopLeftRadius": 52,
//     "borderTopRightRadius": 52,
//     "borderBottomLeftRadius": 52,
//     "borderBottomRightRadius": 52,
//     "width": 104,
//     "height": 104,
//     "left": 0,
//     "top": 0
//   }
// });