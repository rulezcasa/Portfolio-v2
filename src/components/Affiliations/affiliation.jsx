import React from 'react';
import { FiSearch } from 'react-icons/fi';
import vit from '../../images/vit.png';
import csir from '../../images/csir.jpeg';
import pretoria from '../../images/up.jpeg';
import travellio from '../../images/travellio.png';
import lnpl from '../../images/lnpl.jpeg';
import ieee from '../../images/ieeras.png';

const AffiliationGrid = () => {
  const Affiliations = [
    { id: 1, title: 'Vellore Institute of Technology', img: vit },
    { id: 2, title: 'Council for Scientific and Industrial Research', img: csir },
    { id: 3, title: 'University of Pretoria', img: pretoria },
    { id: 4, title: 'Vialux Nomadic Solution Pvt. Ltd (Travellio)', img: travellio },
    { id: 5, title: 'Liquid Neurons Pvt. Ltd', img: lnpl },
    { id: 6, title: 'IEEE Robot Automation Society', img: ieee },
  ];

  return (
    <section className="py-10 mt-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-white mb-8">Affiliations</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-6 text-white">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Affiliations.map((aff) => (
            <div
              key={aff.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center transition transform hover:scale-105"
            >
              <div className="w-24 h-24 flex items-center justify-center mr-4">
                <img
                  src={aff.img}
                  alt={aff.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{aff.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationGrid;
