import './Achivements.scss';
const Achivements = props => {
  const { items, backgroundImage } = props;
  return (
    <section className='panel achivements'>
      <div className='row panel-content'>
        {items.map(item => (
          <div className='col'>
            <i className={item.icon}></i>
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achivements;
