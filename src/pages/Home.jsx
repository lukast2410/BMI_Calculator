import '../styles/Home.css'

export default function Home() {
  return (
    <main>
      <section class="glass">
        <div class="dashboard">
          <div class="user">
            <h3>Hallo User</h3>
            <p>Home</p>
          </div>
          <div class="links">
            <div class="link">
              <h2>Calculator</h2>
            </div>
            <div class="link">
              <h2>Advisor</h2>
            </div>
            <div class="link">
              <h2>Advisor Detail</h2>
            </div>
            <div class="link">
              <h2>Tracking</h2>
            </div>
          </div>
          <div class="product">
            <h2> BMI Calculator</h2>
          </div>
        </div>
        <div class="info">
          <div class="state">
            <h1>INDEKS MASSA TUBUH (IMT)</h1>
            <p>Indeks Massa Tubuh (IMT) adalah salah satu cara untuk mengetahui rentang berat badan ideal Anda dan memprediksi seberapa besar risiko gangguan kesehatan Anda. Metode ini digunakan untuk menentukan berat badan yang sehat berdasarkan berat dan tinggi badan.</p>
          </div>
          <div class="cards">
            <div class="card">
              <div class="card-info">
                <h2>Kurang Berat Badan</h2>
              </div>
              <h2 class="percentage">< 18.5</h2>
            </div>
            <div class="card">
              <div class="card-info">
                <h2>Normal Berat Badan</h2>
              </div>
              <h2 class="percentage">18.5-22.9</h2>
            </div>
            <div class="card">
              <div class="card-info">
                <h2>Kelebihan Berat Badan</h2>
              </div>
              <h2 class="percentage">23-24.9</h2>
            </div>
            <div class="card">
              <div class="card-info">
                <h2>Obesitas Tingkat 1</h2>
              </div>
              <h2 class="percentage">25-29.9</h2>
            </div>
            <div class="card">
              <div class="card-info">
                <h2>Obesitas Tingakt 2</h2>
              </div>
              <h2 class="percentage">30 ></h2>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div className="homeContent">
      {/* isi disini ya untuk home */}
      Home
    </div>
  )
};
