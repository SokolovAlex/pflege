const { withTamagui } = require('@tamagui/next-plugin')

const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    disableExtraction: process.env.NODE_ENV === 'development',
})

// https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
const styledComponentsCompiler = {
    styledComponents: true,
    displayName: true,
    ssr: true,
    fileName: true,
}

module.exports = function (name, { defaultConfig }) {
    const config = {
        ...defaultConfig,
    }
    return {
        ...config,
        ...tamaguiPlugin(config),
        compiler: styledComponentsCompiler,
    }
}