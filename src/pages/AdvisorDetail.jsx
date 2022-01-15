import roti from "../assets/sarapan_roti.jpeg";
import panekuk from "../assets/sarapan_panekuk.jpg";
import ubi from "../assets/sarapan_ubi.jpg";
import ayampm from "../assets/siang_ayampm.jpg";
import bayam from "../assets/siang_bayam.jpg";
import ramen from "../assets/siang_ramen.jpg";
import telur from "../assets/malam_telur.jpeg";
import salmon from "../assets/malam_salmon.jpg";
import kangkung from "../assets/malam_kangkung.JPG";

import "../styles/AdvisorDetail.css";
import { RiH5 } from "react-icons/ri";

export default function AdvisorDetail() {
  return (
    <div className="container">
      <div>
        <h1 className="adetail">Advisor Detail</h1>
        <h2 className="d-flex flex-row adetailc">Menu Sarapan</h2>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={roti} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Roti Panggang</h5>
                <p>313.3kcal</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={panekuk} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Panekuk</h5>
                <p>227.1kcal</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={ubi} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Ubi</h5>
                <p>85.8kcal</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h2 className="d-flex flex-row mt-5 adetailc">Menu Makan Siang</h2>
        <div
          id="carouselExampleCaptions2"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={ayampm} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Ayam Pedas Manis</h5>
                <p>239kcal</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={bayam} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Bayam</h5>
                <p>23kcal</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={ramen} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Ramen</h5>
                <p>436.2kcal</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h2 className="d-flex flex-row mt-5 adetailc">Menu Makan Malam</h2>
        <div
          id="carouselExampleCaptions3"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={kangkung} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Kangkung</h5>
                <p>18.9kcal</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={salmon} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Salmon</h5>
                <p>208.2kcal</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={telur} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Telur</h5>
                <p>155.1kcal</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions3"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions3"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
