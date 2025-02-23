import React from 'react';
import sagneetha from '../../images/sangeetha.jpg';
import nithya from '../../images/nithya.jpg';
import bipin from '../../images/bipin.jpeg';
import Vukosi from '../../images/vukosi.jpg';
import shiban from '../../images/shiban.jpg';
import mithun from '../../images/mithun.png';

const EndorsementGrid = () => {
  const endorsements = [
    {
      id: 1,
      name: 'Dr. Sangeetha N',
      designation: 'Assistant professor, Vellore Institute of Technology',
      img: sagneetha,
    },
    {
      id: 2,
      name: 'Dr. Nithya Darisini P.S',
      designation:
        'Assistant dean of academics, Vellore Institute of Technology',
      img: nithya,
    },
    {
      id: 3,
      name: 'Bipin Kumar Sinha',
      designation:
        'Managing Director and Senior Architect, Liquid Neurons Private Limited',
      img: bipin,
    },
    {
      id: 4,
      name: 'Prof Vukosi Marivate',
      designation: 'Associate professor, University of Pretoria',
      img: Vukosi,
    },
    {
      id: 5,
      name: 'Shiban Bannerjee',
      designation:
        'Managing Director, Knowledge Ark Technologies Private Limited',
      img: shiban,
    },
    {
      id: 6,
      name: 'Nallana Mithun Babu',
      designation: 'Scientist, CSIR 4th Paradigm Institute',
      img: mithun,
    },
  ];

  return (
    <section className="py-10 mt-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-white mb-8">Endorsements</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-6 text-white">
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {endorsements.map((endorsement) => (
            <div
              key={endorsement.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition transform hover:scale-105"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                <img
                  src={endorsement.img}
                  alt={endorsement.name}
                  className="max-w-full max-h-full object-contain rounded-full"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-white border-b border-white pb-2">
                  {endorsement.name}
                </h4>
                <p className="text-white">{endorsement.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndorsementGrid;
