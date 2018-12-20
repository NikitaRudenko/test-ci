import * as React from 'react';
import {mount} from 'enzyme';

import {AwesomeShit} from '../';

describe('AwesomeShit', () => {
	it('Should render component', () => {
		const component = mount(<AwesomeShit />);
		expect(component).toMatchSnapshot();
	});
});
