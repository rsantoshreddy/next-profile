import './Testimonial.scss';
const Testimonial = props => {
  const { heading, paragraph, image } = props;
  return (
    <section className='testimonial'>
      <h1>{heading}</h1>
      <div className='content'>
        <img className='thumb' src={image}></img>
        <p>&ldquo;{paragraph}&rdquo;</p>
      </div>
    </section>
  );
};

export default Testimonial;
