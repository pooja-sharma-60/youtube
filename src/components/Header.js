const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center m-2">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="menu"
          className="w-8 h-8 m-3"
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="logo"
          className="w-[120px]"
        />
      </div>
      <div className="flex  items-center bg-gray-100 p-4 m-4 border ">
        <input type="text" className="" />
        <button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP-zagesI6oIDc6Z_EtyZSeHi4C949tp1VA&usqp=CAU"
            alt="search-icon"
            className="w-10"
          />
        </button>
      </div>
      <div>
        <img alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
