import React, { useState } from "react";
import "../assets/styles/merch-ustore.css";
import titleDesktop from "../assets/images/titles/merch-ustore-title-desktop.png";
import titleMobile from "../assets/images/titles/merch-ustore-title-mobile.png";
// Define the product data for Merch UStore
const merchProducts = [
  {
    id: 1,
    name: "Baseus ENCOK WM -01 True Wireless Bluetooth",
    image:
      "https://via.placeholder.com/156x156/e0e0e0/333?text=Wireless+Earbuds",
    quota: "+ 12 GB",
    period: "30 Hari",
    price: "Rp 150.000",
    ribbon: "byU X Baseus",
    isSelected: true,
  },
  {
    id: 2,
    name: "Exclusive C-51 T-Shirt o-neck",
    image:
      "https://via.placeholder.com/156x156/808d70e977eeac9dd13092c90ae3b755488e6dd7/333?text=T-Shirt",
    quota: "+ 12 GB",
    period: "30 Hari",
    price: "Rp 150.000",
    isSelected: false,
  },
  {
    id: 3,
    name: "Kabel Data LED Baseus Halo Fast Charging iPhone/Micro USB/Type-C 1M – Baseus Indonesia",
    image: "https://via.placeholder.com/156x156/866d35fa/333?text=Cable",
    quota: "+ 12 GB",
    period: "30 Hari",
    price: "Rp 150.000",
    isSelected: false,
  },
  {
    id: 4,
    name: "Baseus 22.5W Power Bank 10.000MAh dengan 5A 20W PD",
    image: "https://via.placeholder.com/156x156/52f3c6e0/333?text=Power+Bank",
    quota: "+ 12 GB",
    period: "30 Hari",
    price: "Rp 150.000",
    isSelected: false,
  },
  {
    id: 5,
    name: "Baseus inAuto Car Charger U C 40W Dual Quick Charger",
    image: "https://via.placeholder.com/156x156/c0f9c932/333?text=Car+Charger",
    quota: "+ 12 GB",
    period: "30 Hari",
    price: "Rp 150.000",
    isSelected: false,
  },
  {
    id: 6,
    name: "Kabel Data LED Baseus Halo Fast Charging iPhone/Micro USB/Type-C 1M – Baseus Indonesia",
    image: "https://via.placeholder.com/156x156/e39fd09f/333?text=Cable+2",
    quota: "+ 12 GB",
    period: "30 Hari",
    price: "Rp 150.000",
    isSelected: false,
  },
];

interface MerchUstoreSectionProps {
  className?: string;
}

const MerchUstoreSection: React.FC<MerchUstoreSectionProps> = ({
  className = "",
}) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([1]);

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className={`merch-ustore-section ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="merch-header">
          <img
            src={titleDesktop}
            alt="Merch UStore"
            className="md:inline-block hidden h-auto w-full max-w-[1224px]  md:scale-[0.8] scale-100"
          />
          <img
            src={titleMobile}
            alt="Merch UStore"
            className="md:hidden inline-blockh-auto w-full max-w-[1224px] inline-block md:scale-[0.8] "
          />
          {/* <h2 className="merch-title !font-ohno !font-bold">
            MERCH USTORE SPESIAL KOREA KAJA
          </h2> */}
        </div>

        {/* Product Grid */}
        <div className="merch-grid">
          {merchProducts.map((product) => {
            const isSelected = selectedProducts.includes(product.id);

            return (
              <div
                key={product.id}
                className={`merch-card`}
                onClick={() => toggleProductSelection(product.id)}
              >
                {/* Product Image */}
                <div className="merch-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="merch-image"
                  />

                  {/* Ribbon for first product */}
                  {product.ribbon && (
                    <div className="merch-ribbon">
                      <span className="merch-ribbon-text">
                        {product.ribbon}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="merch-details">
                  <h3 className="merch-product-name">{product.name}</h3>

                  <div className="merch-content">
                    {/* Data and Period */}
                    <div className="merch-data-info">
                      <span className="merch-quota">{product.quota}</span>
                      <div className="merch-divider"></div>
                      <span className="merch-period">{product.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MerchUstoreSection;
