import * as React from 'react';
import {render} from 'react-dom';

import {AwesomeShit} from '../src/index';

const init = () => {
	const root = document.getElementById('root');
	render(
		<AwesomeShit />,
		root
	);
};

init();
