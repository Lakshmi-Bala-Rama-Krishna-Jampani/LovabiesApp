/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import App from './App';

const appName = require('./app.json').name ?? 'LovabiesApp';

AppRegistry.registerComponent(appName, () => App);
