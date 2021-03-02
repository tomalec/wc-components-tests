// Import WP-scripts presets to extend them,
// see https://developer.wordpress.org/block-editor/packages/packages-scripts/#advanced-information-11.
const defaultConfig = require( '@wordpress/scripts/config/jest-unit.config' );

module.exports = {
	...defaultConfig,
	// That does not help either
	// transformIgnorePatterns: [ ...(defaultConfig.transformIgnorePatterns || []), 'node_modules/(?!@woocommerce)' ],
};
