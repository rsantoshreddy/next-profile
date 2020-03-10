import './Panel.scss';
const Panel = props => {
  const { heading, paragraph, items } = props;
  return (
    <section className='panel'>
      <div className='section-area'>
        {heading && (
          <div className='panel-heading'>
            <div className='row'>
              <div className='col'>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
              </div>
            </div>
          </div>
        )}
        <div className='row panel-content'>
          {items.map(item => (
            <div className='col'>
              <img className='thumb' src={item.image}></img>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Panel;
