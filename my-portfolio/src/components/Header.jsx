function Header(){
    return (
        <header className="bg-[#0E1628] w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#82D1F5]">ADITI NAIR</h2>
        <nav>
          <ul className="flex space-x-6 text-white ">
            <li><a href="#Home" className="hover:text-[#82D1F5]">Home</a></li>
            <li><a href="#Projects" className="hover:text-[#82D1F5]">Projects</a></li>
            <li><a href="#Contact" className="hover:text-[#82D1F5]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    );
    
}


export default Header