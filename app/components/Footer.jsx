export default function Footer() {

  const officesData = [
    {
      name: 'Singapore Office',
      addressLines: ['68, Circular Road,', '#02-01, 049422,', 'Singapore'],
    },
    {
      name: 'New York Office',
      addressLines: ['123 Main Street,', 'Suite 456,', 'New York, NY'],
    },
    {
      name: 'London Office',
      addressLines: ['45 Baker Street,', 'Floor 3,', 'London, UK'],
    },
  ];

  return (
    <main className="bg-[#242d45] mx-auto">
      <div className="flex">
        {officesData.map((office, index) => (
          <div key={index} className="w-1/3 text-center p-10">
            <h2 className="text-xl mb-4 text-white">{office.name}</h2>
            {office.addressLines.map((line, lineIndex) => (
              <p className="text-slate-400" key={lineIndex}>{line}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-white items-center">
        <p className="text-center text-slate-500">© 2024 Your Company. All rights reserved.</p>
      </div>
    </main>
  );
}
