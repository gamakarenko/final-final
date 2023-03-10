import Slider from 'react-slick';
import BigSedan from 'assets/images/sedan-big.png';
import './style.css';
import GreyWrapperHoc from 'hoc/GreyWrapperHoc/GreyWrapperHoc';

export default function TransfersItem() {
  const settings = {
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };

  return (
    <GreyWrapperHoc>
      <div className="transfers-item">
        <div className="transfers-item__info">
          <img className='transfers-item__img' src={BigSedan} alt="" />
          <h3 className="transfers-item__title">
            Тип авто: <strong> Седан</strong>
          </h3>
          <h4 className="transfers-item__subtitle">
            Максимальное количество мест: <strong>3</strong>
          </h4>
        </div>
        <div>
          <Slider {...settings}>
            <div className="transfers-item-slide">
              <div className="transfers-item-slide__inner">
                Время отправления: 12:00 <br /> Свободно: 1/3 <br /> Стоимость
                за человека: 1200 ₺
              </div>
            </div>

            <div className="transfers-item-slide">
              <div className="transfers-item-slide__inner">
                Время отправления: 12:00 <br /> Свободно: 1/3 <br /> Стоимость
                за человека: 1200 ₺
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </GreyWrapperHoc>
  );
}
