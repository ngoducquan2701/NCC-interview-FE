import htmlLogo from '../../assets/img/html-logo.png';
import cssLogo from '../../assets/img/css-logo.png';
import jsLogo from '../../assets/img/js-logo.png';

const itemStyle2 = [
  {
    title: 'Lorem ipsum dolor sit amet',
    image: htmlLogo,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: cssLogo,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: jsLogo,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ',
  },
];
function ContentBody() {
  return (
    <div className="contentBody">
      <div className="itemStyle1">
        <div className="title">Lorem ipsum dolor sit asmet?</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </div>
      </div>

      <div className="itemStyle2">
        {itemStyle2.map((item, index) => (
          <div key={index} className="item">
            <div className="title2">{item.title}</div>
            <div className="itemBody">
              <img src={item.image} alt="logo" />
              <div className="itemBodyText">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentBody;
