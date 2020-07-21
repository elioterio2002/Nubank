import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages';

const Routes = createAppContainer(createSwitchNavigator({ Home }));

export default Routes;