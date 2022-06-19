import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import { FaBars,FaStar } from "react-icons/fa";
export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (
    <Layout>
      <Head>
        <title>Dor123</title>
      </Head>
      <header>
        <div className='container-menu bg ctxt'>
          <div className='nav grid p-1'>
            <h1 className='txt-center txt-bold txt-deco'>DOR<span className='ctxt2'>123</span></h1>
            <div className='nav-button-container'>
              <button className='nav-button ctxt txt-bold'>
                <FaBars/>
              </button>  
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='container-welcome bg2 ctxt3'>
          <div className='welcome'>
            <div className='txt-welcome txt-big txt-bold txt-shadow-white'>
              <p>
                Cari Situs Game Slot <span className='ctxt2'>Tergacor?</span><br/>
                Ya Cuma Di DOR123<br/>
              </p>
              <p className='ctxt2'> Ayo Gabung Sekarang.</p>
              <p className='mt-1 txt-small txt-italic'>
                join <a className='ctxt2' href='#'>Group Facebook</a> kami untuk lihat member yang sudah Jackpot setiap harinya.
              </p>
            </div>
            <div className='btn-welcome'>
              <a href="#">
                <button className='btn-dekstop txt-bold btn-dft btn-tx'>
                  DAFTAR SEKARANG
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className='body-content'>
        <section>
            <amp-img
              alt="Mountains"
              width="375"
              height="180"
              layout="responsive"
              media="(min-width:768px)"
              src="/assets/banner.webp"
            ></amp-img>
            <amp-img
              alt="Mountains"
              width="375"
              height="300"
              layout="responsive"
              media="(max-width:768px)"
              src="/assets/banner.webp"
            ></amp-img>
        </section>
        <a href='#'>
          <div className='txt-center btn-tx content-txt'>
            <span className='star'><FaStar/><FaStar/><FaStar/></span>Trik and Tips supaya menang Terus<span className='star'><FaStar/><FaStar/><FaStar/></span>
          </div>
        </a>
        {/* POLA GACOR */}
        <section>
          <div className='polaGame-header txt-big txt-bold txt-center p-2'>
            POLA GAME YANG LAGI GACOR
          </div>
          <div className='container-polaGame'>
            <div className='polaGame'>
              <div className='c-polaGame-clip'>Pragmatic Play</div>
              <div className='grid'>
                <div className='polaGame-card'>
                  <div className='card-header p-1 txt-center'>
                  <amp-img
                    alt="Mountains"
                    width="375"
                    height="375"
                    layout="responsive"
                    className='br-1'
                    src="/assets/banner.webp"
                  ></amp-img>
                  <h4 className='p-1'>Gates of Olympus</h4>
                  </div>
                  <div className='card-content txt-xs txt-bold txt-center'>
                    <p>Jam Gacor : 18:00 - 21:00</p>
                    <p>Pola Slot : 10 - 30 - 100 (✅❌✅) DC Off</p>
                  </div>
                </div>
                <div className='polaGame-card'>
                  <div className='card-header p-1 txt-center'>
                  <amp-img
                    alt="Mountains"
                    width="375"
                    height="375"
                    layout="responsive"
                    className='br-1'
                    src="/assets/banner.webp"
                  ></amp-img>
                  <h4 className='p-1'>Sweet Bonanza</h4>
                  </div>
                  <div className='card-content txt-xs txt-bold txt-center'>
                    <p>Jam Gacor : 17:00 - 20:00</p>
                    <p>Pola Slot : 10 - 30 - 100 (✅❌✅) DC On</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='polaGame'>
              <div className='c-polaGame-clip'>Pragmatic Play</div>
              <div className='grid'>
                <div className='polaGame-card'>
                  <div className='card-header p-1 txt-center'>
                  <amp-img
                    alt="Mountains"
                    width="375"
                    height="375"
                    layout="responsive"
                    className='br-1'
                    src="/assets/banner.webp"
                  ></amp-img>
                  <h4 className='p-1'>Gates of Olympus</h4>
                  </div>
                  <div className='card-content txt-xs txt-bold txt-center'>
                    <p>Jam Gacor : 18:00 - 21:00</p>
                    <p>Pola Slot : 10 - 30 - 100 (✅❌✅) DC Off</p>
                  </div>
                </div>
                <div className='polaGame-card'>
                  <div className='card-header p-1 txt-center'>
                  <amp-img
                    alt="Mountains"
                    width="375"
                    height="375"
                    layout="responsive"
                    className='br-1'
                    src="/assets/banner.webp"
                  ></amp-img>
                  <h4 className='p-1'>Sweet Bonanza</h4>
                  </div>
                  <div className='card-content txt-xs txt-bold txt-center'>
                    <p>Jam Gacor : 17:00 - 20:00</p>
                    <p>Pola Slot : 10 - 30 - 100 (✅❌✅) DC On</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div></div>
          <div className='txt-center p-1'>
            <h1>Situs Judi Game Slot DOR123</h1>
            <p className='my-1'>Sebagai Bandar Judi Terpercaya yang berfokus pada produk <strong>Slot Online</strong>, sudah menjadi kewajiban kami untuk melayani kalian, para pencinta Game Slot Online di Indonesia.</p>
            <table className='tbl-pembayaran'>
                <tbody>
                    <tr>
                      <th colSpan="2" className='tbl-header bg ctxt'>CARA PEMBAYARAN</th>
                    </tr>
                    <tr>
                        <th>BANK:</th>
                        <td>💵 BCA, 💴 BRI, 💶 BNI, 💷 Mandiri.</td>
                    </tr>
                    <tr>
                        <th>E-Money:</th>
                        <td>💳 OVO, Gopay, Dana.</td>
                    </tr>
                    <tr>
                        <th>Slot Populer</th>
                        <td>⚡ Gates of Olympus, 🍭 Sweet Bonanza, 🏜 Wild West Gold, ⭐ Starlight Princess, 💎 Aztec Gems</td>
                    </tr>
                    <tr>
                        <th>Promo Slot Terbaru</th>
                        <td>💸 New Member 50%, 🎁 Cashback 300%, 🧧 Referral 1%</td>
                    </tr>
                    <tr>
                        <th>Hubungi Kami</th>
                        <td><a href="https://direct.lc.chat/14138274/">☎ LiveChat Kami</a></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
      <style jsx>{`
      //dekstop css
      @media only screen and (min-width: 768px) {
        .body-content{
          max-width: 1000px;
          margin: 0 auto;
        }
        .container-polaGame{
          display: flex;
        }
        .btn-dekstop{
          width: 40%;
        }
      }
      //tabel pembayaran
      .tbl-pembayaran{
        border: 1px solid #dedede;
        border-spacing: 0px;
        width: 100%;
      }
      .tbl-pembayaran td{
        border-left: 1px solid #dedede;
      }
      .tbl-pembayaran td,.tbl-pembayaran th{
        padding:5px;
        border-bottom: 1px solid #dedede;
      }
      .tbl-header{
        padding:10px;
      }
      //polaGame
      .card-header{
      }
      .container-polaGame{
      }
      .polaGame{
        position: relative;
        border-top: 2px solid #03a9f4;
        border-bottom: 2px solid #03a9f4;
        margin: 30px 10px 10px 10px;
        padding: 30px 5px 30px 5px;
        border-radius: 10px;
      }
      .c-polaGame-clip{
        position: absolute;
        clip-path: polygon(0%0%,85%0%,100%50%,85%100%,0%100%)
        background-color:#03a9f4;
        border-radius: 3px;
        padding: 10px 25px 10px 5px;
        color:#fff;
        text-align:left;
        top: -23px;
        left: -5px

      }
      .polaGame-card{
        padding: 5px 5px 15px 5px;
        margin: 0px 5px;
        border-radius: 10px;
        background:url(/assets/nav-lines.png);
        background-color: #e1f5fe;
        box-shadow: rgb(50 50 93 / 25%) 0 6px 12px -2px, rgb(0 0 0 / 30%) 0 3px 7px -3px;
      }
      .polaGame-header{

      }
      //Content Text
      .content-txt{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 10px;
        font-size: 10pt;
        font-weight: 700;
        border-radius:10px;
        box-shadow:rgb(245 196 34 / 17%) 0 -23px 25px 0 inset, rgb(245 196 34 / 15%) 0 -36px 30px 0 inset, rgb(245 196 34 / 10%) 0 -79px 40px 0 inset, rgb(245 196 34 / 6%) 0 2px 1px, rgb(245 196 34 / 9%) 0 4px 2px, rgb(245 196 34 / 9%) 0 8px 4px, rgb(245 196 34 / 9%) 0 16px 8px, rgb(245 196 34 / 9%) 0 32px 16px;
      }
      // Welcome DIV
      .container-welcome{
        margin-top: 63px;
      }
      .welcome{
        text-align:center;
        padding:10px;
      }
      .btn-dft{
        position: relative;
        margin:20px 0 10px 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-weight: 800;
        font-size: 16pt;
        border:none;
        border-radius: 10px;
        padding: 15px 35px 15px 85px;
        letter-spacing: 1.5px;
        box-shadow: rgb(0 0 0 / 9%) 0 2px 1px, rgb(0 0 0 / 9%) 0 4px 2px, rgb(0 0 0 / 9%) 0 8px 4px, rgb(0 0 0 / 9%) 0 16px 8px, rgb(0 0 0 / 9%) 0 32px 16px;
      }
      .btn-dft::after{
        content: "97% RTP";
        display: inline-block;
        font-size: 14pt;
        color: #fcc425;
        font-weight: 700;
        letter-spacing: 1px;
        background-color: #222831;
        clip-path: polygon(0% 0%, 65% 0%, 100% 50%, 65% 100%, 0% 100%);
        border-radius: 5px;
        padding: 4px 10px;
        position: absolute;
        width: 60px;
        text-align:left
        top:0px;
        left:-5px;
        width:65px;
      }
      // Nav Class
        .container-menu{
          position: fixed;
          z-index:1;
          top:0;
          width:100%;
        }
        .nav{
          background:url(/assets/nav-lines.png);
        }
        .nav-button-container{
          display:flex;
          height:100%;
          align-items:center;
        }
        .nav-button{
          cursor:pointer;
          display:flex;
          margin: auto;
          margin-right: 10px;
          padding: 0 10px;
          background-color: transparent;
          border: none;
          font-size: 20pt;
        }
        // Reuseable Class
        .p-1{
          padding: 10px;
        }
        .p-2{
          padding: 20px;
        }
        .mt-1{
          margin-top:10px;
        }
        .my-1{
          margin:10px 0px;
        }
        .br-1{
          border-radius:10px;
        }
        .txt-big{
          font-size: 24pt;
        }
        .txt-small{
          font-size: 11pt;
        }
        .txt-xs{
          font-size: 9pt;
        }
        .txt-center{
          text-align: center;
        }
        .txt-italic{
          font-style: italic;
        }
        .txt-bold{
          font-weight: 700;
        }
        .bg{
          background-color: #161616;
        }
        .bg2{
          background-color: #ECDBBA;
        }
        .ctxt{
          color: #EEEEEE;
        }
        .ctxt2{
          color: #C84B31;
        }
        .ctxt3{
          color: #161616;
        }
        .txt-shadow-white{
          text-shadow:-1px 1px 0 #fff, -2px 2px 0 rgb(0 0 0 / 10%)
        }
        .txt-deco{
          text-decoration: line-through;
        }
        .btn-tx{
          cursor:pointer;
          color: #000;
          background: url(/assets/nav-lines.png);
          background-color: #fcc425;
        }
        .star{
          color: #f00;
          margin:0 5px;
        }
        .grid{
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
      `}</style>
    </Layout>
  )
}
