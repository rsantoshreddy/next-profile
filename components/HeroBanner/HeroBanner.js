import './HeroBanner.scss';
import classname from 'classname';

const HeroBanner = props => {
  const { heading, paragraph, backgroundImage, className, quote } = props;
  return (
    <section className={classname('container-fluid hero', className)}>
      <div
        className='hero-bg'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      ></div>
      <div className='content'>
        {heading && <h1>{heading}</h1>}
        {paragraph && <p>{paragraph}</p>}
        {quote && <p className='quote'>{quote}</p>}
      </div>
    </section>
  );
};
export default HeroBanner;
