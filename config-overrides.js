const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@services': 'src/services',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
        '@hoc': 'src/hoc',
        '@routes': 'src/routes',
        '@assets': 'src/assets',
    })(config);

    return config;
}