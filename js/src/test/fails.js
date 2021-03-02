// Any of this breaks
import foo from '@woocommerce/components';

describe( 'Dependencies', () => {
	test( 'should not break tests', () => {
		expect( true ).toEqual( true );
	} );
} );
