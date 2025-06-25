import React from 'react';

const FontTest: React.FC = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-bold">Font Test Component</h2>
      
      <div className="mb-6">
        <h3 className="text-xl mb-2">Ohno Softie Font:</h3>
        <p className="font-ohno font-normal text-lg">This text uses Ohno Softie Regular</p>
        <p className="font-ohno font-bold text-lg">This text uses Ohno Softie Bold</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl mb-2">Gilroy Font:</h3>
        <p className="font-gilroy font-normal text-lg">This text uses Gilroy Regular</p>
        <p className="font-gilroy font-medium text-lg">This text uses Gilroy Medium</p>
        <p className="font-gilroy font-bold text-lg">This text uses Gilroy Bold</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl mb-2">Sans Font (Gilroy as default):</h3>
        <p className="font-sans font-normal text-lg">This text uses the default sans font</p>
        <p className="font-sans font-medium text-lg">This text uses the default sans font medium</p>
        <p className="font-sans font-bold text-lg">This text uses the default sans font bold</p>
      </div>
    </div>
  );
};

export default FontTest;
