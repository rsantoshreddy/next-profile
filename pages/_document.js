import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta name='desctiption' content='Price Computer Education' />
          <meta charSet='utf-8' />
          <meta name='robot' content='noindex, nofollow' />
          <meta name='viewport'></meta>
          {/* <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet'></link> */}
          <link href='https://fonts.googleapis.com/css?family=Poppins&display=swap' rel='stylesheet'></link>
          <link href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' rel='stylesheet'></link>
          <link href='https://fonts.googleapis.com/css?family=Fjalla+One&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Niconne&display=swap' rel='stylesheet'></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </html>
    );
  }
}
export default MyDocument;
