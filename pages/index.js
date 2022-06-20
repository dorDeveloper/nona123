import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import { FaBars,FaStar,FaHome,FaUserAlt} from "react-icons/fa";
import React from 'react';
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
            <a href="https://dor123.vercel.app/" className='txt-white'>
              <h1 className='pl-2 txt-bold txt-deco m-0'>DOR<span className='ctxt2'>123</span></h1>
            </a>
            <div className='nav-button-container'>
              {/* <div>
                Daftar
              </div>
              <div>
                Login
              </div> */}
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='container-welcome bg2 ctxt3'>
          <div className='welcome'>
            <div className='txt-welcome txt-big txt-bold txt-shadow-white'>
              <p className='m-0'>
                Cari Situs Game Slot <span className='ctxt2'>Tergacor?</span><br/>
                Ya Cuma Di DOR123
              </p>
              <p className='ctxt2 m-0'> Ayo Gabung Sekarang.</p>
              <p className='mt-1 txt-small txt-italic'>
                join <a className='ctxt2' href='https://www.facebook.com/groups/1251136832290431'>Group Facebook</a> kami untuk lihat member yang sudah Jackpot setiap harinya.
              </p>
            </div>
            <div className='btn-welcome'>
              <a href="https://123dor.net/account/register">
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
        <a href='https://dor123rtp.online/'>
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
                        <td>💵 BCA, 💴 BRI, 💶 BNI, 💷 Mandiri, 💵 CIMB,</td>
                    </tr>
                    <tr>
                        <th>E-Money:</th>
                        <td>💳 OVO, Gopay, Dana, Linkaja.</td>
                    </tr>
                    <tr>
                        <th>Pulsa:</th>
                        <td>💸 XL, 🧧 Telkomsel</td>
                    </tr>
                    <tr>
                        <th>Slot Populer</th>
                        <td>⚡ Gates of Olympus, 🍭 Sweet Bonanza, 🏜 Wild West Gold, ⭐ Starlight Princess, 💎 Aztec Gems</td>
                    </tr>
                    <tr>
                        <th>Promo Slot Terbaru</th>
                        <td>💸 New Member 30%, 🎁 Bonus Harian 20%, 🧧 Referral 15%</td>
                    </tr>
                    <tr>
                        <th>Hubungi Kami</th>
                        <td><a href="https://direct.lc.chat/14138274/">☎ LiveChat Kami</a></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <article>
          <div className='container-arc'>
            <div>
              <h1 className='txt-center my-1'>Daftar Sebagai Member Dor123 Dan Dapatkan Bocoran Pola Slot Tergacor Setiap Hari</h1>
              <h3>Situs Judi Slot Online Terpercaya Paling Gacor Terbaru 2022 Dor123</h3>
              <p>
                Dor123 merupakan website dengan permainan slot gacor terbaik dengan pilihan games slots terbaru dan terlengkap. Dengan pilihan permainan yang lengkap anda dapat mencoba peruntungan anda di berbagai tempat , anda juga dapat berpindah pindah game setelah merasa bosan dengan game yang dimainkan sebelumnya.
              </p>
              <p>  
                Daftar Slot Online di dor123 tidaklah sulit dan juga GRATIS. Inilah alasan mengapa situs taruhan kami dikenal sebagai website judi slot online terbesar dan agen dari bandar judi slot terpercaya dan terbaik di Asia.
              </p>
                Demi kenyamanan untuk para permain, Semua permainan yang tersedia dapat diakses melalui PC dan smartphone Android atau IOS yang mempunyai akses internet sehingga anda dapat memainkan semua permainan slot yang tersedia kapanpun dan dimanapun anda berada dengan ratusan pilihan jenis permainan yang akan memanjakan anda seharian dengan kemenangan besar beserta bonus yang ditawarkan. 
              <p>
                kami juga menyediahakan berbagai pilihan pembayaran untuk deposit melalui e-wallet , pulsa dan transfer melalui bank-bank yang tersedia.
                Untuk pembayaran E-wallet kami anda dapat melakukan deposit dengan DANA, OVO, GO-PAY, LINKAJA, SAKUKU.
              </p>
            </div>
            <article className='my-1'>
              <h2>Daftar Situs Slot Online</h2>
              <p>Daftar situs slot online terbaik di situs Dor123 bisa anda temukan disini. Menemukan situs dan provider yang tepat merupakan langkah awal yang harus ditempuh oleh semua pemain slot online baik veteran maupun yang pemula. Nah berikut adalah 17 provider <a href="https://dor123.vercel.app/">Slot Online</a> Terpercaya:</p>
                <ol className="p semibold">
                    <li>
                        <h3 className="h6">Slot Online Pragmatic Play</h3>
                        <p className="m-0">Provider Situs game slot online Pragmatic Play adalah provider slot terbaik Indonesia saat ini dengan jumlah pemain terbanyak yang terus bertambah setiap harinya. Permainan yang terkenal antara lain adalah Slot WWG , Slot Zeus , Slot Princess dan masih banyak lagi permainan lainya. Selain slot, Pragmatic juga memiliki game lain yang cukup terkenal seperti Mega Wheel pragmatic yang mempunyai Host untuk memandu anda dalam bermain.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Micro Gaming</h3>
                        <p className="m-0">Menjadi opsi atau pilihan ketiga dalam bermain slot Micro Gaming tetap menjadi salah satu pilihan terpopuler masyarakat slot. Dengan permainan yang banyak dengan jackpot yang melimpah. Slot77 dari microgaming akan membuat anda bermain tanpa memikirkan waktu sama sekali.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Live22</h3>
                        <p className="m-0">Agen judi slot online live22 termasuk dalam kategori mudah jackpot. Dimana anda sebagai pemain dapat menikmati hujan jackpot namun bukan jackpot progressive yang biasanya di miliki oleh permainan mesin sloto modern.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Slot88</h3>
                        <p className="m-0">Penyedia slot88 hadir dari kombinasi negara Taiwan dan China untuk memberikan anda pengalaman bermain slot dengan tema oriental yang sangat menarik dan telah di ciptakan khusus dengan cita rasa slot Asia. Berbeda dengan Pragmatic, Habanero dan Microgaming yang mengusung tema barat.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online IONSLOT</h3>
                        <p className="m-0">Siapa yang tidak kenal dengan produk ION Casino?? Salah satu situs judi casino online paling lama ini mengeluarkan produk terbaru mereka yaitu IONSlot. Melihat kepopuleran kata kunci slot yang terus meningkat, mereka mengembangkan game-game yang tidak kalah seru dari para competitor salah satu game yang terkenal disini adalah slot magician.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online PG Soft</h3>
                        <p className="m-0">Memasukin akhir tahun 2022 nama PG Soft atau Pocket Gaming Soft kian bersinar dengan tipe permainan slot yang berbeda. Pada Slot PGSoft ketika anda mendapatkan urutan gambar yang sama atau memecahkan gambar nilai perkalian akan terus meningkat hingga maksimal 5x tanpa scatter.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Joker123</h3>
                        <p className="m-0">Penyedia slot joker123 merupakan pelopor pertama yang mempopulerkan permainan slot di Indonesia. Sebelum Pragmatic Play dan Habanero masuk, Slot Joker123 menjadi pilihan nomor satu para bettor. Beberapa game favorit mereka adalah Slot Roma & Slot One Night in Vegas. Bersaing dengan slot88, joker memiliki game arcade Tembak ikan Joker123 yang masih populer dan terbaik hingga sekarang.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Advant Play</h3>
                        <p className="m-0">Slot Advant Play pasti sudah tidak asing lagi di kuping para penjudi Indonesia. Karena rumornya bermain di provider satu ini memberikan banyak keuntungan bahkan ketika anda tidak mendapatkan jackpot sekalipun dan Game yang diberikan sangat friendly untuk pemula.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Spade Gaming</h3>
                        <p className="m-0">Jika anda sering bertanya bandar slot online apa sih yang memberikan Return To Player tertinggi atau yang biasa di sebut RTP? 10 dari 7 pemain akan menjawab spade gaming sebagai agen slot online dengan RTP 90% luar biasa sekali bukan.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Habanero</h3>
                        <p className="m-0">Siapa sih yang tidak tahu Habanero? Pilihan kedua para pemain slot setelah pragmatic terus mengejutkan para pemain setianya lewat games yang di sajikan. Dengan update permainan terbaru setiap minggu, Slot Habanero pastinya sangat seru sekali untuk anda mainkan dan nikmati sebagai bettor sloto.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online JDB</h3>
                        <p className="m-0">Slot JDB merupakan pendatang baru dari negeri tirai bamboo yang siap memberikan anda pengalaman bermain slot tradisional dengan kemampuan bermain secara online. Game yang terus di update dan mudah untuk dimainkan oleh para bettor Veteran membuat provider ini cukup menarik banyak minat bettor.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online CQ9</h3>
                        <p className="m-0">Lagi-lagi pendatang dari negeri tirai bambu ikut meramaikan pasar slot online dalam negeri, dengan tampilan tradisional nan menarik. Slot CQ9 berhasil menarik minat masyarakat untuk memasang taruhan dan bermain agar bisa mendapatkan jackpot luar biasa.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Gamatron</h3>
                        <p className="m-0">Bandar slot online Indonesia dengan jumlah Maxwin terbanyak Gamatron, menghadirkan permainan slot777 paling hoki dan pastinya gampang banget mendapatkan jackpotnya. Anda hanya perlu memutarkan Reel dan biarkan dewi fortuna yang menuntun anda menuju kemenangan. Selain itu Kami juga memiliki slot online deposit 10000.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online Playtech</h3>
                        <p className="m-0">Penyedia permainan slot 77 PlayTech awalanya adalah salah satu pemimpin di sektor pasar Financial Trading. Setelah sukses di dunia tersebut, akhirnya PlayTech mulai mengembangkan sayap mereka di dunia perjudian online dengan permainan slot sebagai game utama.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online RTG Slot</h3>
                        <p className="m-0">Perusahaan RTG Slot di gadang-gadang sebagai salah satu perusahaan terbaik dengan 180 jenis permainan. Real Time Gaming nama panjangnya memiliki reputasi yang tidak perlu di ragukan lagi di dunia judi online.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online PlaynGo</h3>
                        <p className="m-0">Sebagai member baru di dunia <a href="https://dor123.vercel.app/">judi online</a> sangatlah penting menemukan tempat bermain yang sangat tepat terutama dalam dunia judi yang terus berubah ini. PlaynGo boleh menjadi pilihan anda dalam menggapai bonus member baru yang tidak tipu-tipu.</p>
                    </li>
                    <li>
                        <h3 className="h6">Slot Online YGGDrasil</h3>
                        <p className="m-0">Dengan mengedepankan jackpot progresif besar dan mudah untuk di dapatkan, YGGDrasil masuk sebagai calon pedatang baru slot online terbaik tahun 2022-2022. Situs ini memberikan bonus new member 100 dengan TO yang mudah tercapai membuat anda akan semakin bersemangan dalam bertaruh.</p>
                    </li>
                </ol>
            </article>
          </div>
        </article>
      </div>
      <style jsx>{`
      //article
      .container-arc{
        padding:20px 10px;
      }
      .container-arc li{
        margin-left: 20px;
        padding-left: 10px;
        line-height: 1.5;
        margin-bottom: 10px;
      }
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
        .hide{
          max-height: 0;
          overflow:hidden;
        }
        .nav-menu li{
          font-size: 14pt;
          background-color: #363636;
          padding: 20px;
        }
        .nav-menu li a {
          display: flex;
          align-items: center;
        }
        .nav-menu li:hover{
          background: #1e1e1e;
        }
        // Reuseable Class
        .p{
          font-size: 11pt;
        }
        .p-1{
          padding: 10px;
        }
        .p-2{
          padding: 20px;
        }
        .pl-1{
          padding-left:10px;
        }
        .pl-2{
          padding-left:20px;
        }
        .m-0{
          margin:0;
        }
        .mt-1{
          margin-top:10px;
        }
        .my-1{
          margin:10px 0px;
        }
        .mx-1{
          margin:0 10px;
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
        .txt-white{
          color: #FFF;
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
