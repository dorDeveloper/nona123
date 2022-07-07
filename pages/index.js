import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import { FaStar,FaFacebook,FaRocketchat} from "react-icons/fa";
import React from 'react';
export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()
  const schemaData =
    {
      "@context": "http://schema.org",
      "@type": "Game",
      "name": "Agen Game Slot Online nona123",
      "author": {
          "@type": "Person", 
          "name": " nona123"
      },
      "headline": "Pragmatic & Pgsoft : nona123 Situs Judi Slot Online Terpercaya",
      "description": "nona123 adalah agen judi online dan situs judi slot gacor online terpercaya indonesia yang siap melayani 24 jam dan memiliki RTP yang akurat.",
      "keywords": ["slot123, judi online, slot gacor, slot online, judi slot, situs judi slot, slot pulsa, pragmatic slot, RTP, agen slot"],
      "image":"https://cdn.robotaset.com/assets/tpl/e55a196116/images/logo.png",
      "url": "https://nona123.online",
      "publisher": { 
          "@type": "Organization", 
          "name": "nona123" 
      },
      "aggregateRating": { 
          "@type": "AggregateRating", 
          "ratingValue": "99", 
          "bestRating": "100", 
          "worstRating": "0", 
          "ratingCount": "321321" 
      },
      "inLanguage": "id-ID"
  }
  
  const analytics = {
    "vars": {
      "GA4_MEASUREMENT_ID": "G-QVQ3Z50SH9",
      "GA4_ENDPOINT_HOSTNAME": "www.google-analytics.com",
      "DEFAULT_PAGEVIEW_ENABLED": true,    
      "GOOGLE_CONSENT_ENABLED": false,
      "WEBVITALS_TRACKING": false,
      "PERFORMANCE_TIMING_TRACKING": false,
      "SEND_DOUBLECLICK_BEACON": false
  }
  }
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta key="desc" name="description" content="Mau main slot seru tapi juga tetap gacor ? Join situs kami sekarang juga ! Bocoran Pola dan cara main selalu kami sediakan setiap harinya." />
        <meta key="keywords" name="keywords" content="nona123, slot online, situs slot online, agen slot online, judi online, judi online terpercaya, agen bola, bandar bola, bandar togel, togel online, agen togel online, slot online terpercaya, judi bola online, slot" />
        <meta key="author" name="author" content="nona123" />
        <meta key="language" name="language" content="id" />
        <meta key="robots" name="robots" content="index, follow"/>
        <meta key="geoname" name="geo.placename" content="Indonesia" />
        <meta key="geocountry" name="geo.country" content="ID" />
        <meta key="tgnnation" name="tgn.nation" content="Indonesia" />
        <meta key="twittercard" name="twitter:card" content="summary" />
        <meta key="twittersite" name="twitter:site" content="@Slotnona123" />
        <meta key="twittercreator" name="twitter:creator" content="@Slotnona123" />
        <meta key="twittertitle" name="twitter:title" content="nona123 Slot : Main Slot Anti Rungkat Pake Bocoran Pola Kami" />
        <meta key="twitterdesc" name="twitter:description" content="Mau main slot seru tapi juga tetap gacor ? Join situs kami sekarang juga ! Bocoran Pola dan cara main selalu kami sediakan setiap harinya." />
        <meta key="twitterimg" name="twitter:image" content="https://nona123.online/" />
        <meta key="theme" name="theme-color" content="#fff" />
        <meta key="ogtitle" property="og:title" content="nona123 Slot : Main Slot Anti Rungkat Pake Bocoran Pola Kami" />
        <meta key="ogtype" property="og:type" content="website" />
        <meta key="ogdesc" property="og:description" content="Mau main slot seru tapi juga tetap gacor ? Join situs kami sekarang juga ! Bocoran Pola dan cara main selalu kami sediakan setiap harinya." />
        <meta key="ogimg" property="og:image" content="https://nona123.online/" />
        <meta key="ogurl" property="og:url" content="https://nona123.online/"/>    
        <link rel="canonical" href="https://nona123.online/"></link>
        <link rel="shortcut icon" href="https://cdn.rbtasset.com/assets/tpl/4222f5bac2/images/faviconOLD.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://cdn.rbtasset.com/assets/tpl/4222f5bac2/images/faviconOLD.ico" />
        <link rel="icon" href="https://cdn.rbtasset.com/assets/tpl/4222f5bac2/images/faviconOLD.ico" type="image/x-icon" />
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
        <title>nona123</title>
      </Head>
      <amp-analytics type="googleanalytics" config="https://amp.analytics-debugger.com/ga4.json" data-credentials="include">
       <script
        type="application/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(analytics) }}
      /></amp-analytics>
      <header>
        <div className='container-menu bg ctxt'>
          <div className='nav grid p-1'>
            <a href="https://178.128.48.234/" className='txt-white'>
              <div className='logo'>
                <amp-img
                  alt="Mountains"
                  width="120px"
                  height="23px"
                  layout="responsive"
                  src="https://cdn.rbtasset.com/assets/tpl/4222f5bac2/images/logo.gif"
                ></amp-img>
              </div>
              {/* <h1 className='pl-2 txt-bold txt-deco m-0'>DOR<span className='ctxt2'>123</span></h1> */}
            </a>
            <div className='btn-container txt-right'>
              <a className='d-flex' href="https://178.128.48.234/">
                <div className='btn-nav btn-primary mx-1'>Login</div>
              </a>
              <a className='mobile' href="https://178.128.48.234/account/register">
                <div className='btn-nav btn-primary-outline mx-1'>Daftar</div>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='container-welcome bg2 ctxt3'>
          <div className='welcome'>
            <div className='txt-welcome txt-big txt-bold txt-shadow-white'>
              <p className='m-0'>
               Selamat Datang Di Situs Tergacor<br/>
               <span className='ctxt2'>Nona123</span>
              </p>
              <p className='m-0'> Ayo Gabung Sekarang.</p>
              <p className='mt-1 txt-small txt-italic'>
                Dapatkan Jackpot dan menangkan puluhan juta hinga miliaran rupiah.
              </p>
            </div>
            <div className='btn-welcome'>
              <a href="https://178.128.48.234/account/register">
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
              src="https://i.ibb.co/PM0CgZX/selamatdatang1.jpg"
            ></amp-img>
            <amp-img
              alt="Mountains"
              width="375"
              height="300"
              layout="responsive"
              media="(max-width:768px)"
              src="https://i.ibb.co/PM0CgZX/selamatdatang1.jpg"
            ></amp-img>
        </section>
        <a href='https://nona123rtp.online/'>
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
                    src="/assets/gates-of-olympus-home.png"
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
                    src="/assets/sweet-bonanza-home.png"
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
                    src="/assets/bounty-gold-home.png"
                  ></amp-img>
                  <h4 className='p-1'>Bounty Gold</h4>
                  </div>
                  <div className='card-content txt-xs txt-bold txt-center'>
                    <p>Jam Gacor : 19:30 - 22:00</p>
                    <p>Pola Slot : 10 - 70 - 100 (✅❌✅) DC Off</p>
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
                    src="/assets/hot-fiesta-home.png"
                  ></amp-img>
                  <h4 className='p-1'>Hot Fiesta</h4>
                  </div>
                  <div className='card-content txt-xs txt-bold txt-center'>
                    <p>Jam Gacor : 23:00 - 01:00</p>
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
            <h1>Situs Judi Game Slot Nona123</h1>
            <p className='my-1 txt-left'>
            Saat ini ada banyak situs judi online yang menawarkan Slot Online Deposit Pulsa, Perihal tersebut disebabkan Pulsa ialah salah satu Pembayaran Deposit yang gampang serta terbaik dikala ini dipilih oleh warga sebab gampang digunakan sehingga bertransaksi kapan saja serta dimana saja.
            <br/>
            <br/>
            nona123 ialah salah satu bandar slot online dana terbaik yang sudah banyak memperoleh pembahasan positif sehabis sediakan slot online deposit dana yang banyak di pakai oleh warga, sebab mereka bisa melaksanakan setoran serta penarikan kapan saja serta dimana saja. Bisa jadi diantara kamu telah terdapat yang memiliki Bandar Slot Online Terpercaya, tetapi dari begitu banyak nama slot yang terpercaya mana yang kerap membagikan jackpot/ gratis spin?. Tetapi dari banyaknya web yang ada, kamu wajib berupaya nona123 yang populer sediakan 10 saran catatan web judi slot online terpercaya serta anti rungkat.
            <br/>
            <br/>
            Penawaran yang diberikan oleh nona123 sangat berbeda dengan web slot pada biasanya, nona123 menawarkan kemudahan akses lewat fitur mobile dengan memakai tampilan spesial sehingga pemain bisa bebas pada dikala bermain. Keuntungan lain semacam kenyamanan pula hendak ditawarkan oleh nona123 dengan menawarkan deposit via pulsa, e wallet serta seluruh bank lokal Indonesia, online 24 Jam serta transaksi yang kilat. Sebagian orang masih bimbang buat memilah game slot terbaik buat dimainkan, disini kami hendak membagikan sebagian kabar menimpa slot permainan yang hendak kamu mainkan.
            </p>
          </div>
        </div>
        <article>
          <div className='container-arc'>
            <div>
              <h1 className='txt-center my-1'>Sejarah Slot Online Depo Pakai Pulsa Indonesia</h1>
              <p>
              Mulai Terkenal di tahun 2020, Slot Deposit Pulsa mulai banyak di cari oleh pecinta slot online yang belum mempunyai bank lokal Indonesia, sehingga memilah web yang bisa bertransaksi memakai Pulsa yang bisa di jalani dimana saja serta kapan saja langsung lewat genggaman smartphone.
              <br/>
              <br/>
              Sejarah Munculnya Game Judi Slot Online Pulsa ini Awal kali diperkenalkan oleh nona123 yang berupaya trobosan baru dengan menawarkan deposit via Pulsa dengan tujuan memudahkan pemain dalam bertransaksi.
              <br/>
              <br/>
              Melihat suksesnya nona123, Hal tersebut membuat banyak agen bandar slot online yang mulai mengikuti jejaknya untuk menawarkan transaksi deposit menggunakan Pulsa.
              </p>
            </div>
            <article className='my-1'>
              <h2>10 Game Slot Online RTP Terbaik dan Anti Rungkat</h2>
              <p>
                Begitu banyak jenis permainan slot online yang dapat anda mainkan di situs slot online terbaik nona123 dari provider-provider terkemuka seluruh dunia , dan ada beberapa yang sedang populer dan banyak dimainkan pecinta slot online karena banyak memberikan kemenangan seperti yang akan dibahas berikut ini adalah 10 macam slot terbaik rtp tinggi dan anti rungkat tentunya :
              </p>
              <h3>
                1. Slot Online Pragmatic Play Indonesia
              </h3>
              <p>
                Pragmatic Play ialah salah satu provider slot online terbaik indonesia yang jadi salah satu provider yang sangat direkomendasikan buat kamu, sepanjang ini terdapat lebih dari 150 tipe game dengan jackpot luar biasa yang tidak sempat kamu duga lebih dahulu disini terdapat pula sebagian game yang senantiasa jadi opsi pemain semacam Gates Of Olympus, Princess Starlight, Aztec Gemz serta masih banyak yang lain.
              </p>
              <h3>
2. Slot Online Habanero
</h3>
<p>
Habanero slot ialah salah satu provider yang membagikan RTP yang besar buat tiap game yang terdapat, perihal ini yang membuat provider ini banyak diseleksi para slotter buat memperoleh jackpot mereka.
</p>
<h3>
3. Slot Online PG Soft
</h3>
<p>
PG Soft ialah salah satu provider slot yang menawarkan kenyamanan bermain dengan membagikan pembaharuan tampilan yang luar biasa membuat kamu merasa aman pada dikala bermain sebab foto yang terbaik.
</p>
<h3>
4. Slot Online Joker123
</h3>
<p>
Siapa sih yang tidak ketahui industri satu ini? Dengan karakteristik khas tembak ikan yang terkenal banyak diminati oleh pecinta slot online Indonesia.
</p>
<h3>
5. Slot Online Top trend gaming
</h3>
<p>
Merupakan salah satu Provider game slot terbaik yang sudah berdiri lebih dari 7 tahun dalam game slot online ini, Top trend gaming slot membawa ratusan jenis game slot seru dan asyik untuk anda mainkan.
</p>
<h3>
6. Slot Online Playtech
</h3>
<p>
Playtech merupakan salah satu web slot video sangat setia serta sangat berpengalaman di pasaran dikala ini. Dengan pengalaman jangka panjang mereka, Playtech sudah menghasilkan platform luar biasa di mana Kamu bisa memainkan lebih dari 100 permainan dengan grafis hebat serta audio bermutu besar. Web ini kembali bertahun- tahun, serta sebab itu, mereka mempunyai pemain setia yang sudah bermain dengan playtech sepanjang lebih dari satu dekade. Yang sangat menarik dari Playtech merupakan, minimun taruhan mulai dari Rp200 Serta game mereka yang sangat terkenal merupakan harta karun kapten, singa luar biasa, ratu permata, serta terumbu lumba- lumba.
</p>
<h3>
7. Slot Online CQ9
</h3>
<p>
CQ9 memiliki tujuan buat melindungi supaya pemain tidak bosan, dengan metode menawarkan game dengan win rate besar serta permainan baru di tiap bulannya.
</p>
<h3>
8. Slot Online Microgaming
</h3>
<p>
Microgaming ialah tempat segala ini dimulai; Microgaming dini kali memperkenalkan slot online. Website ini diucap sebagai pemicu slot online dan telah berkecimpung di bidang ini selama bertahun- tahun. Dan kala Kalian memandang ke dalam permainan slot mereka, itu ialah realitas jika Kalian hendak kaget menghasilkan permainan di luar imajinasi Kalian. Microgaming dapat jadi tidak setenar dulu, tetapi fitur dan bonus fantastis tetap sama. Microgaming ialah salah satu website tepercaya terbaik yang dapat Kalian temukan, mereka memiliki reputasi yang baik, dan pemain setia mereka kembali ke tahun- tahun lebih dulu. Bagian terbaik tentang bermain Microgaming ialah jika taruhan minimum mereka mulai dari Rp 100. Ya, Kalian tidak salah baca; apabila ini tidak cukup alibi buat Kalian buat memilah Microgaming, sampai inilah satu lagi jackpot maksimal dari Microgaming ialah 1000x. Game sangat terkenal yang terdapat di Microgaming ialah Lucky Twins Wild, 9 Masks on Fire, Playboy Fortunes, Immortal Romance, Aurora Wilds, dll.
</p>
<h3>
9. Slot Online YGG Drasil
</h3>
<p>
Salah satu provider baru yang banyak dimainkan oleh pecinta slot indonesia sebab begitu gacor diawal peluncurannya sampai hari ini.
</p>
<h3>
10. Slot Online AFB Gaming
</h3>
<p>
Berdiri semenjak tahun 2012, Win Rate dari AFB Gaming slot di nona123 menggapai 92% serta pastinya jackpot ratusan juta siap dibagikan kepada member setianya.
</p>
            </article>
          </div>
        </article>
      </div>
      <style jsx>{`
      .logo{
        width:250px;
      }
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
        .mobile{
          display: flex;
        }
      }
      @media only screen and (max-width: 768px) {
        .mobile{
          display:none;
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
        border-top: 2px solid #f44336;
        border-bottom: 2px solid #f44336;
        margin: 30px 10px 10px 10px;
        padding: 30px 5px 30px 5px;
        border-radius: 10px;
      }
      .c-polaGame-clip{
        position: absolute;
        clip-path: polygon(0%0%,85%0%,100%50%,85%100%,0%100%)
        background-color:#f44336;
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
        color: #f44336;
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
        .btn-container{
          display:flex;
          justify-content: right;
        }
        .btn-nav{
          padding: 5px 20px;
          border-radius: 3px;
        }
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
        .text-right{
          text-align: right;
        }
        .txt-left{
          text-align: left;
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
        .btn-primary{
          background-color: #f44336;
          color: #161616;
          font-weight: 700;
        }
        .btn-primary-outline{
          border: 2px solid #f44336;
          color: #f44336;
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
          background-color: #f44336;
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
        .d-flex{
          display:flex;
        }
      `}</style>
    </Layout>
  )
}
