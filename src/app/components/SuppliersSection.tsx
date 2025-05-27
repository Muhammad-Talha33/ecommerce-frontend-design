import React from 'react';

const SuppliersSection = () => {
  const suppliers = [
    { name: "Arabic Emirates", flag: "ae", details: "shopname.ae" },
    { name: "Australia", flag: "au", details: "shopname.au" },
    { name: "United States", flag: "us", details: "shopname.com" },
    { name: "Russia", flag: "ru", details: "shopname.ru" },
    { name: "Italy", flag: "it", details: "shopname.it" },
    { name: "Denmark", flag: "dk", details: "shopname.dk" },
    { name: "France", flag: "fr", details: "shopname.fr" },
    { name: "Arabic Emirates", flag: "ae", details: "shopname.ae" },
    { name: "China", flag: "cn", details: "shopname.cn" },
    { name: "Great Britain", flag: "gb", details: "shopname.co.uk" }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6">Suppliers by region</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {suppliers.map((country, index) => (
          <div key={index} className="flex items-center p-2">
            <img src={`https://flagcdn.com/w40/${country.flag}.png`} alt={country.name} className="h-8 w-12 object-cover rounded mr-3" />
            <div>
              <p className="text-sm font-medium">{country.name}</p>
              <p className="text-xs text-gray-500">{country.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersSection;