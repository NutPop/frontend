import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import KimImage from './Kim.jpg';
import JungImage from './Jung.jpg';
import KimdojaImage from './Kimdoja.jpg';
import LogorinaImage from './Logorina.jpg';
import VioletImage from './Violet.jpg';
import './globals.css';
import Script from 'next/script';

export default function Home() {
  return (
<>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
    <a class="navbar-brand" href="page.js">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="page.js">Home</a>
        </li>
        <li className="nav-item">
        <a class="nav-link" href="About.js">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Service.js">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Contact.js">Contact</a>
        </li>
        <li class="nav-item">
        <a href="#" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">SigIn</a>
        </li>
        <li class="nav-item">
        <a href="#" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">SigOut</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>

  <div className="container">

    <div className="row my-3">
      <div className="col-md-12 text-center bg-light p-5 border rounded">
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={KimImage} className="d-block w-100" alt="Kim" />
    </div>
    <div className="carousel-item">
      <Image src={JungImage} className="d-block w-100" alt="Jung" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>

    <div className="row mb-3">
  <div className="col-md-4"> {/* ปรับเป็น col-md-4 */}
    <div className="card" style={{ width: '18rem' }}>
      <Image src={KimdojaImage} className="card-img-top" alt="Kimdoja" width={286} height={180} />
      <div className="card-body">
        <p className="card-text">Kim</p>
      </div>
    </div>
  </div>

  <div className="col-md-4"> {/* ปรับเป็น col-md-4 */}
    <div className="card" style={{ width: '18rem' }}>
      <Image src={LogorinaImage} className="card-img-top" alt="Logorina" width={286} height={180} />
      <div className="card-body">
        <p className="card-text">Jung</p>
      </div>
    </div>
  </div>

  <div className="col-md-4"> {/* ปรับเป็น col-md-4 */}
    <div className="card" style={{ width: '18rem' }}>
      <Image src={VioletImage} className="card-img-top" alt="Violet" width={286} height={180} />
      <div className="card-body">
        <p className="card-text">Violet</p>
      </div>
    </div>
  </div>
</div>
  </div>
</>
  );
}
