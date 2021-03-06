import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router';

// containers
import WiFiConfiguration from './containers/WiFiConfiguration';
import NTPConfiguration from './containers/NTPConfiguration';
import OTAConfiguration from './containers/OTAConfiguration';
import APConfiguration from './containers/APConfiguration';
import BrewConfiguration from './containers/BrewConfiguration';
import BrewDayConfiguration from './containers/BrewDayConfiguration';
import AboutContainer from './containers/AboutContainer';

class AppRouting extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/brew" component={BrewDayConfiguration} />
				<Route exact path="/brew-configuration" component={BrewConfiguration} />
				<Route exact path="/wifi-configuration" component={WiFiConfiguration} />
				<Route exact path="/ap-configuration" component={APConfiguration} />
				<Route exact path="/ntp-configuration" component={NTPConfiguration} />
				<Route exact path="/ota-configuration" component={OTAConfiguration} />
				<Route exact path="/about" component={AboutContainer} />
				<Redirect to="/brew" />
			</Switch>
		)
	}
}

export default AppRouting;
