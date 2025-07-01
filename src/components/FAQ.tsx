import React from "react";
import TitleFAQ from "../assets/images/titles/title-faq.png";
import TitleFAQMobile from "../assets/images/titles/title-faq-mobile.png";
import Accordion, { AccordionItemProps } from "./Accordion";

export interface FAQProps {
  className?: string;
  screen: "main" | "korea-kaja" | "random-play-dance" | "uStore" | "uCoin";
}

const FAQ: React.FC<FAQProps> = ({ className = "", screen = "main" }) => {
  const faqItems: AccordionItemProps[] = [
    {
      id: "1",
      title: 'Apa itu "Campaign Name"?',
      content:
        "Kode pesanan adalah nomor invoice/order id/nomor pesanan yang tertulis di invoice pembelian byU kamu, pembelian mu untuk mengaktifkan SIM card byU kamu.",
    },
    {
      id: "2",
      title: "List Pertanyaan 1 “Campaign Name”?",
      content:
        "Untuk mendaftar, silakan klik tombol daftar dan ikuti langkah-langkah yang tersedia. Pastikan Anda memiliki dokumen yang diperlukan seperti KTP dan foto selfie.",
    },
    {
      id: "3",
      title: "List Pertanyaan 2 “Campaign Name”?",
      content:
        "Periode pendaftaran dimulai dari tanggal 1 Juli 2025 hingga 31 Agustus 2025. Pastikan Anda mendaftar sebelum batas waktu yang ditentukan.",
    },
    {
      id: "4",
      title: "List Pertanyaan 3 “Campaign Name”?",
      content:
        "Syarat dan ketentuan meliputi: 1) Warga Negara Indonesia, 2) Berusia minimal 17 tahun, 3) Memiliki nomor byU aktif, 4) Mengikuti semua tahapan kompetisi yang ditentukan.",
    },
  ];

  return (
    <section className={`faq-section ${className}`}>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <img
          src={TitleFAQ}
          alt="FAQ title"
          className="object-contain h-[50px] scale-110 hidden md:block"
        />
        <img src={TitleFAQMobile} alt="FAQ title mobile" className="object-contain md:hidden" />
        {screen === "main" && (
          <p className="text-[16px] text-[#6a7481]">
            Pertanyaan yang sering ditanyakan terkait Korea
          </p>
        )}
      </div>
      <Accordion
        items={faqItems}
        allowMultiple={false}
        className="overflow-hidden mt-4 md:w-[75%] mx-auto"
      />
    </section>
  );
};

export default FAQ;
