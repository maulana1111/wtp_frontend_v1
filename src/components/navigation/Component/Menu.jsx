const SubMenu = ({ items, name }) => (
  <ul className="collapse list-unstyled pl-4 w-100" id={`${name}`}>
    {items.map((item) => (
      <li key={item.id}>
        <a
          className="nav-link pl-3"
          href={`./${item.name.toLowerCase().replace(" ", "-")}.html`}
        >
          <i className={`fa ${item.icon}`} aria-hidden="true"></i>
          <span className="ml-1">{item.name}</span>
        </a>
        {item.children.length > 0 && (
          <SubMenu items={item.children} name={item.name} />
        )}
      </li>
    ))}
  </ul>
);

// Menu utama komponen
const Menu = ({ items }) => (
  <ul className="navbar-nav flex-fill w-100 mb-2">
    {items &&
      items.length > 0 &&
      items.map((item) => (
        <li
          key={item.id}
          className={`nav-item ${
            item.children && item.children.length > 0 ? "dropdown" : "w-100"
          }`}
        >
          <a
            href={`#${item.name}`}
            data-toggle="collapse"
            aria-expanded="false"
            className={`nav-link ${
              item.children && item.children.length > 0 && "dropdown-toggle"
            }`}
          >
            <i className={`fa ${item.icon}`} aria-hidden="true"></i>
            <span className="ml-3 item-text">{item.name}</span>
          </a>
          {item.children && item.children.length > 0 && (
            <SubMenu items={item.children} name={item.name} />
          )}
        </li>
      ))}
  </ul>
);

export default Menu;
