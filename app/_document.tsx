import NextDocument, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
  } from 'next/document'
  import { StyleSheet } from 'react-native'
  
  // import the config you just exported from the tamagui.config.ts file
  import tamaguiConfig from '../tamagui.config'
  
  export default class Document extends NextDocument {
    static async getInitialProps({ renderPage }: DocumentContext) {

      const page = await renderPage()
  
      // @ts-ignore RN doesn't have this type
      const rnwStyle = StyleSheet.getSheet()
  
      return {
        ...page,
        styles: (
          <>
            <style
              id={rnwStyle.id+ `111111111111111`}
              dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
            />
            <style
              id={rnwStyle.id+ `2222222222222222`}
              dangerouslySetInnerHTML={{
                __html: tamaguiConfig.getCSS(),
              }}
            />
          </>
        ),
      }
    }
    render() {
      console.log(`______DOCUMENT_________________`)
      return (
        <Html lang="en">
          <Head>
            <meta id="theme-color" name="theme-color" />
            <meta name="color-scheme" content="light dark" />
          </Head>
          <body>
            <Main />
            !!!!!!!!!
            <NextScript />
          </body>
        </Html>
      )
    }
  }