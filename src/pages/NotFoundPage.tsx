import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/not-found.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Halaman Tidak Ditemukan</h2>
          <p className="not-found-description">
            Oops! Halaman tidak ditemukan.
            <br />
            Halaman mungkin telah dipindahkan atau Anda memasukkan URL yang
            salah.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn-secondary">
              Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
