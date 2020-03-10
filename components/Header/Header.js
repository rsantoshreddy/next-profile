import './Header.scss';
const Header = props => {
  return (
    <header className='container-fluid'>
      <div className='row'>
        <div className='col'>Logo</div>
        <div className='col-md-auto'>
          <div className='contact d-flex'>
            <i className='fa fa-address-card-o' aria-hidden='true'></i>
            <div>
              <p className='border-bottom'>7682821040 / 9778265525</p>
              <p>priceedu2108@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
