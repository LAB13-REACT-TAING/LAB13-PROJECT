module.exports = {
	comments: false,
	presets: [
		[
			'@babel/preset-env', 
			{
				useBuiltIns: 'entry',
				corejs: '3.26.0'
			}
		]
	]
};