const Footer = () => (
  <footer className="myfooter">

    <div className="mydiv1">
      <img className="img" src="static/facebook-white.svg">
      </img>

      <img className="img" src="static/twitter-white.svg">
      </img>

      <img className="img" src="static/instagram-white.svg">
      </img>
    </div>

    <div className="mydiv2">
    <img className="img2"  src="static/app-store.svg">
      </img>

      <img className="img2" src="static/play-store.svg">
      </img>

      <img  className="img2" src="static/windows-store.svg">
      </img>
    </div>



    <style>{`
.myfooter{
position: fixed;
left: 0;
bottom: 0;
width: 100%;
height: 25%;
background-color: #1E1E1E;
      }

      .mydiv1
      {
        bottom: 5%;
        position: fixed;
        width: 50%;
      }

      .mydiv2
      {
        width: 50%;
        position: fixed;
        bottom: 5%;
        right: 0;

      }

      .img
      {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }

      .img2
      {
        margin-left: 20px;
      }

     
       
       `}</style>
  </footer>

);

export default Footer;