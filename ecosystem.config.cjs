module.exports = {
	apps: [
		{
			name: 'my-web',
			script: './node_modules/vite/bin/vite.js',
			instances: 1,
			exec_mode: 'fork',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};