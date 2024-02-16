const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const encryption = {
    optimization: {
        minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8
					},
					compress: {
						ecma: 6,
						warnings: false,
						comparisons: false,
						inline: 2
					},
					output: {
						ecma: 6,
						comments: false,
						ascii_only: true
					}
				},
				parallel: true,
				extractComments: false
			})
		]
    },
};

const client = {
    ...encryption,
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/client/index.js')
    },

    output: {
        path: path.resolve(__dirname, '../client_packages/client/'),
        filename: 'index.js'
    }
};

const server = {
    ...encryption,
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/server/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../packages/server/'),
        filename: 'index.js'
    }
}

module.exports = [client, server]